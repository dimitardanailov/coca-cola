# Model Structure

## Purpose

This document captures a reusable model-instruction structure.
It focuses on language, sequencing, and decision flow rather than on company-specific pull request policy.

## Core Idea

Good model instructions should behave like an execution funnel rather than a flat list of advice.
The structure should reduce premature action, force evidence collection, and make outputs easier to review.

## One-Minute Summary

Think of this model like shared LEGO building steps for the whole team:

1. Decide what to build
2. Check what is known and unknown
3. Define what "done" means
4. Show evidence
5. Explain why this approach
6. Validate the result

Why this helps:

- fewer mistakes
- easier onboarding
- clearer decisions
- more consistent AI and human outputs

## Structural Pattern

The most useful pattern is:

1. Interrupt execution
2. Check preconditions
3. Define required artifacts
4. Name failure modes
5. Raise the evidence bar for sensitive changes
6. Preserve project philosophy and terminology
7. End with a compact summary

This structure is useful because it turns vague guidance into a staged decision system.

## Recommended Sections

### Entry Gate

Use this section to stop immediate action and frame the task.

- What is the exact task?
- What is already known?
- What is still unknown?
- What evidence exists right now?

### Scope Check

Use this section to confirm where the work belongs.

- Why does this work belong here?
- What is explicitly out of scope?
- What related documents, repos, or systems are affected?

### Spec

Use this section before implementation or detailed review work.

- Problem statement
- Acceptance criteria
- Constraints
- Non-goals
- Reviewer focus

### Evidence

Use this section to anchor conclusions in observed reality.

- Reproduction steps or observed behavior
- Existing related work
- Prior attempts
- Supporting files, diffs, tickets, or logs

### Change Logic

Use this section to explain why the selected approach is justified.

- Why this approach
- What alternatives were considered
- Why those alternatives were rejected

### Validation

Use this section to define how success will be checked.

- Test or verification method
- Environments or cases covered
- Remaining risks

### High-Risk Changes

Use this section when the change affects prompts, instructions, workflow behavior, architecture, or other behavior-shaping systems.

- Current behavior
- Target behavior
- Before and after examples
- Evidence that the new behavior is better

### Terminology And Philosophy

Use this section to protect project-specific meaning.

- Terms that should not be normalized away
- Language choices that are deliberate
- Design assumptions that shape decisions

## Language Patterns

The structure benefits from a consistent instruction style.

- Use imperative verbs when a step is executable
- Prefer binary checks when a decision must be made
- Name concrete artifacts instead of broad abstractions
- State evidence, not confidence
- Describe observed behavior, not only theory
- Mark unknowns explicitly
- Separate facts, assumptions, and notes

## Output Model

For analysis, review, or specification work, prefer outputs that separate:

- Facts
- Assumptions
- Unknowns
- Evidence
- Decision
- Next step

This improves traceability and reduces vague reasoning.

## Spec-Driven Development Benefit

This structure supports spec-driven development because it requires the model to define the problem and success conditions before implementation starts.

The most useful flow is:

1. Prove the problem
2. Define the scope
3. Write the acceptance criteria
4. Define the validation plan
5. Implement only after the spec is stable

## Anti-Patterns To Avoid

- Flat lists with no execution order
- Advice without stop conditions
- Conclusions without evidence
- Scope without non-goals
- Behavioral changes without before and after comparison
- Mixed facts and assumptions in the same statement

## Practical Use

Use this file when designing:

- agent instructions
- review workflows
- specification templates
- project guidance documents
- reusable prompt structures

## Repository Integration

In this repository, this structure is integrated as a default working model in:

- `AGENTS.md` for cross-repo agent behavior
- `tickets/README.md` for ticket-level execution flow
- `Profile.md` for personal AI collaboration expectations

This keeps analysis, planning, and implementation guidance aligned with spec-driven development.
