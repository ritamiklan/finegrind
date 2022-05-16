import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from "./firebase";

export default function firebaseRegisterUser(user, username) {
  const db = getDatabase(firebaseApp);

  set(ref(db, "users/" + user.uid), {
    email: user.email,
    username: username,
    favs: {},
  });
}
