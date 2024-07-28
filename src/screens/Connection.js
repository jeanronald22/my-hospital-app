import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../styles/colors";
import CustomInput from "../components/CustomInput";
import { authenticateUser } from "../services/authService";
import CustomModal from "../components/CustomModal";


export default function Connection({router, navigation}) {
  // defintion des states
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  // fonction qui ce chargera d'afficher le modale si le mot de passe est erroner
  const toggleModal = () => {
    setIsCorrect(!isCorrect);
  }

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "padding"}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* definition de la vue  image */}
          <View style={styles.imgContainer}>
            <Image
              source={require("../assets/images/Login-rafiki.png")}
              style={styles.img}
            />
          </View>
          {/* definition des differents champs de connection */}
          <View style={styles.forms}>
            {/* definitions des inputs */}
            <View style={styles.inputContainer}>
              <CustomInput
                label="Nom utilisateur"
                placeholder="Nom utilisateur"
                value={userName}
                onChangeText={setUserName}
                style={styles.input}
                labelStyle={styles.labelStyle}
              />
              <CustomInput
                label="mot de passe"
                placeholder="********"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                labelStyle={styles.labelStyle}
                secureTextEntry={true}
              />
            </View>
            {/* definition du bouttons de validation */}
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={async () => {
                  try {
                    // connexion avec le service
                    const response = await authenticateUser(userName, password);
                    navigation.replace("Home Doctor", response);
                  } catch (error) {
                    toggleModal();
                  }
                }}
              >
                <Text style={styles.btnText}>Connexion</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <CustomModal
        isVisible={isCorrect}
        onClose={toggleModal}
        message="Mot de passe ou nom d'utilisateur invalide"
        imageSource={require("../assets/images/Feeling sorry-rafiki.png")}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.blanche,
  },
  scroll: {
    height: "100%",
  },
  imgContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.5,
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: 30,
  },
  forms: {
    height: Dimensions.get("window").height * 0.5,
    paddingHorizontal: 20,
  },
  inputContainer: {},
  labelStyle: {
    fontSize: 16,
    color: colors.label,
    fontFamily: "Roboto_400Regular_Italic",
  },
  btnContainer: {
    width: "100%",
    marginVertical: 20,
  },
  btn: {
    paddingVertical: 15,
    backgroundColor: colors.blue,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: colors.blanche,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto_400Regular_Italic",
  },
});
