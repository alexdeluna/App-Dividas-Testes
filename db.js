import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { app } from "./firebase-config.js";

const db = getFirestore(app);

export async function carregarBancoUsuario(uid) {
  const ref = doc(db, "usuarios", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return {
      dividasFixas: [],
      cartoes: [],
      comprasCartao: [],
      rendas: []
    };
  }

  const dados = snap.data();

  return {
    dividasFixas: Array.isArray(dados.dividasFixas) ? dados.dividasFixas : [],
    cartoes: Array.isArray(dados.cartoes) ? dados.cartoes : [],
    comprasCartao: Array.isArray(dados.comprasCartao) ? dados.comprasCartao : [],
    rendas: Array.isArray(dados.rendas) ? dados.rendas : []
  };
}

export async function salvarBancoUsuario(uid, banco) {
  await setDoc(doc(db, "usuarios", uid), {
    dividasFixas: banco.dividasFixas || [],
    cartoes: banco.cartoes || [],
    comprasCartao: banco.comprasCartao || [],
    rendas: banco.rendas || []
  });
}