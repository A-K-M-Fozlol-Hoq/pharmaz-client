import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const handleGoogleSignIn = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log({ token }, user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const handleLogin = async (email:string, password:string) => {
 // step 1: match email and password and get token from firebase
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log('Signed in successfully', res.user);
      console.log(res.user.emailVerified)
      // step 2: Get the user profile in the database
    })
    .catch((err) => {
      console.log('error --> ', err);
    })
}
export const handleSignUp = async (name:string, email:string, password:string) => {
  try{
    // step 1: Create a new user
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
    // step 2: Create the user profile in the database
    if(result){
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}user/createUser`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `tokenSecret ${process.env.NEXT_PUBLIC_USER_TOKEN_KEY}`
      },
      body: JSON.stringify({ name: name, userType:'consumer', email: email})
    });
    const data = await res.json();
    return data;
    }
    }catch(err) {
      toast('Maybe user already exists! Please try with different email.', {
        autoClose: 2000,
        type: 'error',
      });
    }
}