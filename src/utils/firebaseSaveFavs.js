import { getDatabase, ref, update } from "firebase/database";
import firebaseApp from "./firebase";

export function firebaseSaveFavs(user, favs, uid) {
  const db = getDatabase(firebaseApp);

  update(ref(db, "users/" + uid), {
    favs: favs,
  });
}

export function firebaseRemoveFavs(user, favs, uid) {
  const db = getDatabase(firebaseApp);

  remove(ref(db, "users/" + uid), {
    favs: favs,
  });
}
