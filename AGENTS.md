# Implementation Plan for AI Control Dashboard

This document outlines the step‑by‑step approach for building a Next.js SaaS starter template. The template integrates Stripe billing, Firebase authentication, Shadcn UI components, and Google Pub/Sub streaming for AI responses powered by Gemini. No code is provided here; these are instructions to guide development.

## 1. Base Setup
1. **Create a new Next.js project** using the App Router (`create-next-app` with `--typescript`).
2. Enable **React Server Components** in the `/app` directory.
3. Initialize a git repository and commit the starter template.

## 2. UI Library
1. Install **Tailwind CSS** via `npx tailwindcss init -p`.
2. Integrate **Shadcn** components (`npx shadcn-ui@latest init`).
3. Organize UI components under `/components/ui`.

## 3. Authentication (Firebase Auth)
1. Create a Firebase project and enable desired auth providers.
2. Install `firebase` and `firebase-admin` packages.
3. Configure client-side Firebase in `/lib/firebase/client.ts` and server-side admin in `/lib/firebase/admin.ts`.
4. Implement authentication hooks and context provider for sign-in/out.

## 4. Stripe Integration
1. Install `stripe` and `@stripe/stripe-js` packages.
2. Create server actions or API routes for Stripe checkout and webhook handling.
3. Manage subscription status in Firestore or your preferred DB.

## 5. Google Pub/Sub & Gemini API
1. Install `@google-cloud/pubsub` for Pub/Sub communication.
2. Install `@google/generative-ai` or relevant Gemini SDK.
3. Create server actions that:
   - Accept user prompts.
   - Append a system prompt.
   - Send the request to Gemini.
   - Generate Pub/Sub topic + credentials and return them to the caller.
4. When Gemini responds, stream data into Pub/Sub instead of returning it directly.

## 6. API Flow
1. A React Server Component action receives an AI prompt.
2. The action calls Gemini with an attached system message.
3. Immediately respond to the client with Pub/Sub connection keys.
4. On Gemini completion, push tokens/content to Pub/Sub for real-time updates.
5. Client listens on Pub/Sub to stream results.

## 7. Project Structure
```
/app          - Next.js app router (React Server Components)
/components   - Shadcn UI components
/lib          - Firebase, Pub/Sub, and Gemini helper modules
/app/api      - Route handlers for Stripe, Pub/Sub auth, etc.
```

## 8. Deployment & Environment
1. Store secrets in `.env.local` (Stripe keys, Firebase config, Pub/Sub credentials, Gemini key).
2. Use a CI/CD solution to deploy (Vercel or your choice).

## 9. Testing and CI
1. Every feature (auth, billing, Pub/Sub, Gemini integration) should include unit and integration tests.
2. Use Jest and React Testing Library for frontend components and server actions.
3. Add API tests to verify Pub/Sub message flow and Stripe webhooks.
4. Configure a GitHub Actions workflow that installs dependencies and runs all tests on each push and pull request.

---
Follow these steps to progressively build the SaaS dashboard with real-time AI streaming and Stripe billing.
