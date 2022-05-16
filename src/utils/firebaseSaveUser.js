import { getDatabase, ref, update } from "firebase/database";
import firebaseApp from "./firebase";

export default function firebaseSaveUser(user, username) {
  const db = getDatabase(firebaseApp);

  update(ref(db, "users/" + user.uid), {
    email: user.email,
    username: username,
  });
}
