/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
export const initializeApp = () => ({});
export const getAuth = () => ({});
export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => { return Promise.resolve(); });
export class GoogleAuthProvider {}
export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => { return Promise.resolve(); });
export const updateProfile = jest.fn((currentUser, displayName) => { return Promise.resolve(); });
export const sendEmailVerification = jest.fn(() => { return Promise.resolve(); });
export const signOut = jest.fn(() => { return Promise.resolve(); });
