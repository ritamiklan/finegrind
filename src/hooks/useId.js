import { useEffect, useState } from "react";
import config from "../utils/config";

// extracted hook logic to find cafes by ID

export default (id) => {
  const [coffeeDetail, setCoffeeDetail] = useState({
    attributes: {
      name: "",
      description: "",
      address: "",
      roasteries: [{}],
      image: "../../assets/coffee.jpg",
      openinghours: {
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "",
        sat: "",
        sun: "",
      },
      loc: {
        lat: 0,
        long: 0,
      },
    },
  });

  useEffect(() => {
    fetch(config.API_URL + id)
      .then((response) => response.json())
      .then((dt) => setCoffeeDetail(dt.data))
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return [coffeeDetail];
};
