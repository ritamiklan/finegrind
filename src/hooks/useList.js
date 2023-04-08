import { useEffect, useState } from "react";
import config from "../utils/config";

// extracted hook for the listing of cafes

export default () => {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch(config.API_URL)
      .then((response) => response.json())
      .then((dt) => setCoffeeList(dt.data))
      .catch((err) => console.log(err));
  }, []);

  return [coffeeList];
};
