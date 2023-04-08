import { getDatabase, ref, update } from "firebase/database";
import firebaseApp from "./firebase";

export function firebaseSaveFavs(favs, uid) {
  const db = getDatabase(firebaseApp);

  update(ref(db, "users/" + uid), {
    favs: favs,
  });
}

export function firebaseRemoveFavs(uid, favID) {
  const db = getDatabase(firebaseApp);

  let newEntry = {};
  newEntry[`users/${uid}/favs/${favID}`] = null;

  update(ref(db), newEntry);
}
