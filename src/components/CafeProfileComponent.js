// import React from "react";
// import { View, Text } from "react-native";
// import useId from "../hooks/useId";
// import { globalStyles } from "../styles/global";
// import { useCafeId } from "../context/CafeIdContext";

// // component to organize details on coffee detail screen

// export default function CafeProfile() {
//   const { cafeId } = useCafeId();

//   const [coffeeDetail] = useId(cafeId);

//   return (
//     <View style={globalStyles.container}>
//       <View style={globalStyles.details}>
//         <Text>Hours:</Text>
//         <Text>Mon: {coffeeDetail.attributes.openinghours.mon}</Text>
//         <Text>Tue: {coffeeDetail.attributes.openinghours.tue}</Text>
//         <Text>Wed: {coffeeDetail.attributes.openinghours.wed}</Text>
//         <Text>Thu: {coffeeDetail.attributes.openinghours.thu}</Text>
//         <Text>Fri: {coffeeDetail.attributes.openinghours.fri}</Text>
//         <Text>Sat: {coffeeDetail.attributes.openinghours.sat}</Text>
//         <Text>Sun: {coffeeDetail.attributes.openinghours.sun}</Text>
//       </View>
//     </View>
//   );
// }
