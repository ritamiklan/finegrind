import { getDatabase, ref, update, remove } from "firebase/database";
import firebaseApp from "./firebase";

export function firebaseSaveFavs(user, favs, uid) {
  const db = getDatabase(firebaseApp);

  update(ref(db, "users/" + uid), {
    favs: favs,
  });
}

export function firebaseRemoveFavs(uid, favID) {
  const db = getDatabase(firebaseApp);

  remove(`users/${uid}/favs/${favID}`);
}
