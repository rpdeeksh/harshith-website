// Firebase Firestore service & Reactive Live-Sync Adapter
// When Firebase credentials are provided, it connects to Firestore.
// Otherwise, it seamlessly falls back to real-time BroadcastChannel + localStorage.

export const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// Check if Firebase is configured
export const isFirebaseConfigured = () => {
  return Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId);
};

// Cross-tab / Local Real-time sync bus
const channel = typeof window !== "undefined" && window.BroadcastChannel 
  ? new BroadcastChannel("nidhi_harshith_wedding_sync") 
  : null;

export const broadcastEvent = (eventType, payload) => {
  if (channel) {
    channel.postMessage({ type: eventType, payload, timestamp: Date.now() });
  }
};

export const subscribeToSyncEvents = (callback) => {
  if (!channel) return () => {};
  const handler = (e) => {
    if (e.data && callback) callback(e.data);
  };
  channel.addEventListener("message", handler);
  return () => channel.removeEventListener("message", handler);
};
