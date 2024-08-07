import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyATgcvem8XVd_Au44mcR2FKjKctx1MmZsQ",
  authDomain: "produl.firebaseapp.com",
  projectId: "produl",
  storageBucket: "produl.appspot.com",
  messagingSenderId: "77023582951",
  appId: "1:77023582951:web:5fd60105e5b08cda366042",
  measurementId: "G-G6X2VN52QK"
};
// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarMapel() {
  const refDokumen = collection(db, "matapelajaran");
  const kueri = query(refDokumen, orderBy("hari"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      hari: dok.data().hari,
      jamke: dok.data().jamke,
      kelas: dok.data().kelas,
      mapel: dok.data().mapel,
      namagurumapel:dok.data().namagurumapel,
      waktu: dok.data().waktu,
      mp: dok.data().mp,

    });
  });



  return hasil;
}