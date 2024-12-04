import {
    getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, onAuthStateChanged,
    signOut
} from "firebase/auth";
import { firebaseApp } from "@/firebaseConfig"; // Asegúrate de que la ruta sea correcta

// Utilizar la instancia de firebaseApp para inicializar Auth
const auth = getAuth(firebaseApp);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut };
