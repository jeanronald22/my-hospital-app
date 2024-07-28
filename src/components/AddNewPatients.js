import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import CustomInput from "./CustomInput";
import colors from "../styles/colors";

const AddNewPatients = ({ route }) => {
  //! definition des state
  const [birdDate, setBirdDate] = useState("");
  const [sexe, setSexe] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [poids, setPoids] = useState(0);
  const [taille, setTaille] = useState(0);
  const [tension, setTension] = useState(0);
  // ! definition des fonctions

  //! valeur de retour
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "height" : "padding"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.blanche }}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>{route.name}</Text>
        </View>
        {/* formulaire d'insertion */}
        <View style={styles.forms}>
          {/* code du formulaire */}
          <CustomInput
            label="Date de naissance"
            value={birdDate}
            onChangeText={setBirdDate}
            style={styles.input}
            labelStyle={styles.labelStyle}
            placeholder="jj/mm/aaaa"
          />
          <CustomInput
            label="sexe"
            value={sexe}
            onChangeText={setSexe}
            style={styles.input}
            labelStyle={styles.labelStyle}
            placeholder="M/F"
          />
          <CustomInput
            label="Temperature"
            value={temperature}
            onChangeText={setTemperature}
            style={styles.input}
            labelStyle={styles.labelStyle}
            keyboardType="numeric"
            placeholder="10 °C"
          />
          <CustomInput
            label="Poids"
            value={poids}
            onChangeText={setPoids}
            style={styles.input}
            labelStyle={styles.labelStyle}
            keyboardType="numeric"
            placeholder="70 kg"
          />
          <CustomInput
            label="Taille"
            value={taille}
            onChangeText={setTaille}
            style={styles.input}
            labelStyle={styles.labelStyle}
            keyboardType="numeric"
            placeholder="180 cm"
          />
          <CustomInput
            label="Tension arterielle"
            value={tension}
            onChangeText={setTension}
            style={styles.input}
            labelStyle={styles.labelStyle}
            keyboardType="numeric"
            placeholder="120/80 mmHg"
          />
          <CustomInput
            label="Tension arterielle"
            value={tension}
            onChangeText={setTension}
            style={styles.input}
            labelStyle={styles.labelStyle}
            keyboardType="numeric"
            placeholder="120/80 mmHg"
          />
          <CustomInput
            label="Tension arterielle"
            value={tension}
            onChangeText={setTension}
            style={styles.input}
            labelStyle={styles.labelStyle}
            keyboardType="numeric"
            placeholder="120/80 mmHg"
          />
          <CustomInput
            label="Tension arterielle"
            value={tension}
            onChangeText={setTension}
            style={styles.input}
            labelStyle={styles.labelStyle}
            keyboardType="numeric"
            placeholder="120/80 mmHg"
          />
          <CustomInput
            label="Tension arterielle"
            value={tension}
            onChangeText={setTension}
            style={styles.input}
            labelStyle={styles.labelStyle}
            keyboardType="numeric"
            placeholder="120/80 mmHg"
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNewPatients;
//!definitions des styles
const styles = StyleSheet.create({
  header: {
    height: Dimensions.get("window").height * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    width: "100%",
    textAlign: "center",
  },
  forms: {
    // backgroundColor: 'blue',
    height: "auto",
    padding: 20,
  },
  btnContainer: {
    marginVertical: 20,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: colors.blue,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  btnText: {
    color: colors.blanche,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto_400Regular",
  },
});
