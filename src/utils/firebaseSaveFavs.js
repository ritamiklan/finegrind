import { getDatabase, ref, update } from "firebase/database";
import firebaseApp from "./firebase";

export default function firebaseSaveFavs(user, favs, uid) {
  const db = getDatabase(firebaseApp);

  update(ref(db, "users/" + uid), {
    favs: favs,
  });
}
