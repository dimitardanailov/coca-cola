# Git Identity Enforcement Per Repository

## Problem

When working across multiple organisations in the same machine, Git falls back to the global `~/.gitconfig` identity if no local override is set. This causes commits to be authored with the wrong email — e.g. a personal email appearing in a company repo, or vice versa.

---

## Solution

Two layers of enforcement per repository:

1. **Local git config** — hardcodes the correct identity in `.git/config`, overriding the global config.
2. **Pre-commit hook** — blocks any commit where the active email does not match the expected value.

---

## Layer 1 — Local Git Config

Run once inside the repository:

```bash
git config --local user.name "Firstname Lastname"
git config --local user.email "you@example.com"
```

Verify it was applied:

```bash
git config --local user.name
git config --local user.email
```

This writes into `.git/config` and takes priority over `~/.gitconfig` automatically.

---

## Layer 2 — Pre-commit Hook

Create the file `.git/hooks/pre-commit` with the content below, replacing the expected email:

```sh
#!/bin/sh
expected_email="you@example.com"
actual_email="$(git config user.email)"
if [ "$actual_email" != "$expected_email" ]; then
  echo "ERROR: Wrong git user.email for this repo."
  echo "Expected: $expected_email"
  echo "Actual:   $actual_email"
  echo "Fix with: git config --local user.email \"$expected_email\""
  exit 1
fi
```

Make it executable:

```bash
chmod +x .git/hooks/pre-commit
```

The hook runs before every commit. If the email is wrong, the commit is aborted with a clear fix instruction.

> **Note:** `git commit --no-verify` bypasses the hook. Layer 1 (local config) still applies in that case.

---

## Example Setup Per Project

| Repository | Expected email |
|---|---|
| personal / knowledge base repos | `dimityr.danailov@gmail.com` |
| Coca-Cola company repos | `ddanailov@coca-cola.com` |

---

## Reuse in a New Project

```bash
# 1. Set local identity
git config --local user.name "Dimitar Danailov"
git config --local user.email "you@example.com"

# 2. Install the hook (replace email in the heredoc)
cat > .git/hooks/pre-commit <<'EOF'
#!/bin/sh
expected_email="you@example.com"
actual_email="$(git config user.email)"
if [ "$actual_email" != "$expected_email" ]; then
  echo "ERROR: Wrong git user.email for this repo."
  echo "Expected: $expected_email"
  echo "Actual:   $actual_email"
  echo "Fix with: git config --local user.email \"$expected_email\""
  exit 1
fi
EOF
chmod +x .git/hooks/pre-commit

# 3. Verify
git config --local user.email
cat .git/hooks/pre-commit
```

---

## Fixing Wrong Authors in Existing History

### Last commit only (not yet pushed)

```bash
git commit --amend --author="Firstname Lastname <you@example.com>" --no-edit
```

### A specific older commit

```bash
FILTER_BRANCH_SQUELCH_WARNING=1 git filter-branch -f --env-filter '
if [ "$GIT_COMMIT" = "<commit-sha>" ]; then
  export GIT_AUTHOR_NAME="Firstname Lastname"
  export GIT_AUTHOR_EMAIL="you@example.com"
  export GIT_COMMITTER_NAME="Firstname Lastname"
  export GIT_COMMITTER_EMAIL="you@example.com"
fi
' <commit-sha>^..HEAD
```

### Multiple specific commits

```bash
FILTER_BRANCH_SQUELCH_WARNING=1 git filter-branch -f --env-filter '
case "$GIT_COMMIT" in
  <sha1>|<sha2>|<sha3>)
    export GIT_AUTHOR_NAME="Firstname Lastname"
    export GIT_AUTHOR_EMAIL="you@example.com"
    export GIT_COMMITTER_NAME="Firstname Lastname"
    export GIT_COMMITTER_EMAIL="you@example.com"
    ;;
esac
' <oldest-sha>^..HEAD
```

After rewriting pushed history, force-push:

```bash
git push --force-with-lease origin <branch>
```
