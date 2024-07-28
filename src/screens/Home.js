import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import colors from "../styles/colors";

const Home = ({ route, navigation }) => {
  // definition de la fonction de navigation
  const naviagateTo = () => {
    navigation.replace("Connection");
  };

  return (
    <View style={styles.container}>
      {/* definition de la vue pour notre image de bien venue */}
      <View style={styles.ImageContainer}>
        <Image
          source={require("../assets/images/Online Doctor-rafiki.png")}
          style={styles.img}
        />
      </View>
      {/* definiton de a vue pour le texte relative */}
      <View style={styles.textContainer}>
        {/* zone du texte en question */}
        <View style={styles.text}>
          <Text style={styles.text1}>
            bienvenue dans votre application de gestion
          </Text>
          <Text style={styles.text2}>
            Gérez plus efficacement tous les aspects de votre établissement de
            santé. du suivi des patiets, aux ressources.
          </Text>
        </View>
        {/* definition de la vue du boutton touchableOpacity */}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}
            onPress={naviagateTo}
          >
            <Text style={styles.btnText}>Commencer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// definition des styles relative a cette ecran
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.blanche,
    alignItems: "center",
  },
  ImageContainer: {
    width: Dimensions.get("window").width - 5,
    height: Dimensions.get("window").height * 0.6,
    // backgroundColor: "red",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    // backgroundColor: "yellow",
    width: Dimensions.get("window").width - 5,
    height: Dimensions.get("window").height * 0.4,
    alignItems: "center",
  },
  text: {
    width: "100%",
    alignItems: "center",
    height: "50%",
    // backgroundColor: "green",
  },
  text1: {
    fontSize: 22,
    textTransform: "capitalize",
    textAlign: "center",
    color: colors.blue,
    fontWeight: "bold",
    marginVertical: 10,
    fontFamily: "Roboto_900Black_Italic",
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
    color: colors.noir,
    fontFamily: "Roboto_100Thin_Italic",
  },
  btnContainer: {
    width: Dimensions.get("window").width - 5,
    height: Dimensions.get("window").height * 0.3,
    // backgroundColor: 'lightblue',
    alignItems: "center",
  },
  btn: {
    backgroundColor: colors.blue,
    width: "90%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    fontFamily: "Roboto_400Regular_Italic",
  },
  btnText: {
    color: colors.blanche,
    fontSize: 22,
    fontWeight: "bold",
  },
});
export default Home;
