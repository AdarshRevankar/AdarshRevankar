// Copy to firebase-init.js for local testing. This file is gitignored.
// In production, GitHub Actions generates firebase-init.js from repository secrets.
//
// GitHub Secrets to add (Settings -> Secrets and variables -> Actions):
//   FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID

firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "G-XXXXXXXXXX"
});
firebase.analytics();
