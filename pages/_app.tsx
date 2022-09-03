import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'pharmaz-web.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: 'pharmaz-web.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
