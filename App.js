import Navigation from "./src/navigations/StackNavBar";
import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto"; //importation des differents polices robototo

export default function App() {
  // utilisation du hooks useFont (chargement des polices)
  const [fontsLoaded] = useFonts({
    //fontsLoaded: false par defaut
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  // on utilise Apploading pour sassurer que tous les polices sont charger avant de lancer l'app
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />;
  }
}
