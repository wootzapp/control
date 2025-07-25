import { getApps, initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const app =
  getApps()[0] ||
  initializeApp({
    credential: applicationDefault(),
  });

export const adminAuth = getAuth(app);
