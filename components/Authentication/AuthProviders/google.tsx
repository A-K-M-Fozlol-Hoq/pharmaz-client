import React from 'react';
import { handleGoogleSignIn } from '../authManager';
export default function GoogleAuthProvider() {
  return (
    <div className="btn btn-primary py-4" onClick={handleGoogleSignIn}>
      LOGIN WITH GOOGLE
    </div>
  );
}
