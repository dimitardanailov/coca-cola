1)
Author: Dimitar

Message:
I'd like to check with you why service account key creation is disabled.

2)
Author: James

Message:
Service Account Key creation is disabled by default in Google Cloud. This is to prevent the use of long-lived, high-risk credentials.

3)
Author: Dimitar

Message:
I've a question what's your recommendation. We've a new project / new target. The target should be outside from the primary repo: promo-plus. The main target of the new project / repo is to be responsible to migrate from AWS records to Google Cloud.

In this case what's your recommendation. Do you think, again we need to use: Workflow identity federation for access Firestore ?

The project doesn't required to be deployed on this stage. The idea is the migration to be executed from our local workstations.

4)
Author: James

Message:
I'm not understanding your question.

You have a new GCP Project.
- Has this project been bootstrapped?
- What will be the purpose of this project? What will this project contain?
- What are you trying to do/set up that involves this project?
- Will there be any GitHub repositories that will need access to deploy to this project?

5)
Author: Dimitar

Message:
The purpose of the project is to migrate the records from AWS to Google Cloud. On this stage the project / repo doesn't required to be deployed on Google Cloud. The script could be executed from our local machines.

6)
Author: James

Message:
What infrastructure will sit in this new project and how will it be provisioned?

You would like to run a script on your local michine to migrate data from AWS to GCP, correct? If that's the case you are asking for my suggestion in gaining the necessary credentials to the GCP Project, correct?

Normally when a new project is created:
It first needs to be bootstrapped before anything else is done. Bootstrapping Documentation: https://wiki.coke.com/confluence/spaces/GCDS/pages/296859742/Consumer+Foundations#ConsumerFoundations-BootstrapModule
Any infrastructure created in a project is required to be provisioned via IaC (terraform), thus the need for a repository to contain the terraform code, as that repository will then be grated access to deploy to the project to create the infrastructure.

7)
Author: Dimitar

Message:
Yes we want to run scripts to migrate wallets, participations and other entities between Amazon and Google. The project is bootstrapped already. Our blocker so far. We want to connect to Firestore via JSON secret credential. The method is forbidden. My question is what's the recommendation in this case if JSON secret key authorization is disabled.

8)
Author: James

Message:
Who bootstrapped the project?
How is the Firestore being provisioned?

To answer your question I suggest impersonating a service account as it is the most secure way and you are not using long term keys. https://docs.cloud.google.com/docs/authentication/use-service-account-impersonation

Vijay Goli, can you provide your input here.

9)
Auhor: Dimitar

a) What do you mean with this question: Who bootstrapped the project?
b)
How is the Firestore being provisioned?
We tried with secret JSON key.

If you want we could jump in a short call to show you

The service account configurations are:

```bash
PROJECT_ID="poc-missions-reqpoc00289"
SA_NAME="promo-plus-migration"
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
```

```bash
gcloud iam service-accounts create "$SA_NAME" \
  --project="$PROJECT_ID" \
  --display-name="Promo Plus Firestore Migration"
```

```bash
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/datastore. User"
```

I've been using for this current iteration our temp project poc-missions-reqpoc00289. In the next days: We're going to migrate to alpha project.

10)
Auhor: James

Message:
So the project is the POC Missions Project. I believe I was the one that bootstrapped the project. When the project was bootstrapped, the following github service account was created:
- poc-missions-gh-sa@poc-missions-reqpoc00289.iam.gserviceaccount.com

This service account is used by github actions to deploy code from a github repository to the gcp project. The current repositories that have access to deploy to the POC Missions Project via the service account are
- promo-plus
- promo-plus-core-infrastructure

The Firestore that you are trying to connect to should be created via Infrastructure as Code (in a repository) and then deployed to the project via the github actions service account. It seems like you are creating the firestore via gcp cli (gcloud).

Given that this is a POC account, I don't see a problem with the infrastructure being created via gcp cli (gcloud).  - Confirm please Vijay Goli However, when this is done in NGPS Alpha/Beta/Gamma/Prod, this will need to be done via Infrastructure as Code and deployed from a GitHub Repository.

The service account that you have pasted (promo-plus-migration) is created via gcp cli (gcloud) and it should
- Have the necessary permissions to the firestore - it looks like you got that
- Be able to be impersonated by your script to gain short-term access to the firestore. Most secure way. - Vijay Goli if you could provide your thoughts here that would be great.
