import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence
  }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { app } from "./firebase-config.js";

export const auth = getAuth(app);

export async function login(email, senha){

  await setPersistence(auth, browserLocalPersistence);

  return signInWithEmailAndPassword(auth, email, senha);

}

export function registrar(email,senha){
return createUserWithEmailAndPassword(auth,email,senha);
}

export function resetSenha(email){
return sendPasswordResetEmail(auth,email);
}

export async function loginGoogle(){

  await setPersistence(auth, browserLocalPersistence);

  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);

}

export function logout(){
  return signOut(auth);
}

export function observarSessao(callback){
  onAuthStateChanged(auth,callback);
}
