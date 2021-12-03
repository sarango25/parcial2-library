const firebaseConfig = {
    apiKey: "AIzaSyDnG1ddmqZc0paSYG0sh_zLunsGXlv9bpM",
    authDomain: "parcial-2-eda.firebaseapp.com",
    databaseURL: "https://parcial-2-eda-default-rtdb.firebaseio.com",
    projectId: "parcial-2-eda",
    storageBucket: "parcial-2-eda.appspot.com",
    messagingSenderId: "128121563981",
    appId: "1:128121563981:web:e50fecb72bc28a04986504"
  };

export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}