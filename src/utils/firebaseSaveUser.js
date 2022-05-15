import { getDatabase, ref, set, update } from "firebase/database";
import firebaseApp from "./firebase";

export default function firebaseSaveUser(user, username) {
  const db = getDatabase(firebaseApp);

  set(ref(db, "users/" + user.uid), {
    email: user.email,
    username: username,
  });
}
