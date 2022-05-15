import { getDatabase, ref, set, push, update } from "firebase/database";
//import { set } from "react-native-reanimated";
import firebaseApp from "./firebase";

export default function firebaseSaveFavs(user, favs, uid) {
  const db = getDatabase(firebaseApp);

  console.log("firebaseSaveFav user  = ", user);
  console.log("                favs = ", favs);
  console.log("                uid   = ", uid);

  set(ref(db, "users/" + uid), {
    favs: favs,
  });
}
