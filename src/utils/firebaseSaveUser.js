import { getDatabase, ref, update } from "firebase/database";
import firebaseApp from "./firebase";

export default function firebaseSaveUser(user, username) {
  const db = getDatabase(firebaseApp);
  // console.log("firebaseSaveUser before set user    ", user);
  // console.log("                            mail    ", user.email);
  // console.log("                            username", username);

  update(ref(db, "users/" + user.uid), {
    email: user.email,
    username: username,
  });
}
