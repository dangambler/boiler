import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: '<firebase-api-key>',
  authDomain: '<firebase-auth-domain>',
  projectId: '<firebase-project-id>',
  storageBucket: '<firebase-storage-bucket>',
  messagingSenderId: '<firebase-messaging-sender-id>',
  appId: '<firebase-app-id>',
  measurementId: '<firebase-measurement-id>',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
