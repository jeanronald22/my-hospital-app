import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import globalStyles from "../../styles/globalStyles";
import colors from "../../styles/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getPatients } from "../../api/dataService";
import { differenceInYears } from "date-fns";
import CustomEmtyView from "../../components/CustomEmtyView";

const HomePage = ({ route, navigation }) => {
  //!----------------------------------definition des hooks et naviagtions -------------------------------------------------------//
  const [search, setSearch] = useState(""); //hooks de recherche
  const [patients, setPatients] = useState([]); // hooks de patients
  // const navigation = useNavigation();
  const fetchData = async () => {
    try {
      const data = await getPatients();
      return data;
    } catch (error) {
      console.error("erruer lors de la recuperation ders patients:", error);
    }
  };
  //!----------------------------------definition de la fonction useEffet---------------------------------------//

  useEffect(() => {
    // recuperation des patients
    const data = async () => {
      const result = await fetchData();
      setPatients(result);
    };
    navigation.setOptions({
      tabBarBadge: patients.length,
    });
    data();
    //modification des elelments de navigarions
  }, []);

  //!----------------------------------definition des fonctions--------------------------------------------------//
  // derterminer l'age du patient
  const getAge = (dateNais) => {
    const birtDate = new Date(dateNais);
    const currentDate = new Date();
    return differenceInYears(currentDate, birtDate);
  };
  // definiton du profile
  const profile = ({ item }) => {
    return (
      <TouchableOpacity style={styles.profile}>
        <View style={styles.profileImg}>
          <MaterialIcons name="person" color="white" size={60} />
        </View>
        <View style={styles.body}>
          <Text style={styles.patientName}>{item.personne.id}</Text>
          <Text style={styles.patientLastName}>fff</Text>
          <Text style={styles.patientNais}>
            {`${getAge(item.personne.date_naissance)} Ans`}
          </Text>
          <Text style={styles.patientNais}>
            {(item.personne.sexe = "M" ? "Masculin" : "Feminin")}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  // naviagation vers la vue d'ajout d'un patient
  const AddPatients = () => {
    navigation.navigate("Ajouter un patient");
  };
  //!-----------------------------------valeur de retour ---------------------------------------------------------//
  return (
    <View style={globalStyles.globalContainer}>
      <View style={styles.header}>
        <CustomHeader title={route.name} />
        <TouchableOpacity style={styles.iconContainer} onPress={AddPatients}>
          <MaterialIcons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={search}
          placeholder="Rechercher un patient ici "
          style={styles.input}
          onChangeText={setSearch}
        />
      </View>
      {patients.length > 0 ? (
        <FlatList
          data={patients}
          renderItem={profile}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <CustomEmtyView
          imageSource={require("../../assets/images/Medical care-rafiki.png")}
          title="Oups! Aucun patient trouvé"
          subTitile="Veuillez vérifier plus tard ou ajouter de nouveaux patients "
        />
      )}
    </View>
  );
};

//!--------------------------------------definition des styles---------------------------------------------------//
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginVertical: 10,
    height: 35,
    justifyContent: "center",
    marginBottom: 25,
  },
  input: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderRadius: 9,
    paddingLeft: 20,
    borderColor: colors.ligthgris,
    paddingVertical: 23,
    color: "black",
  },
  iconContainer: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  profile: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  profileImg: {
    backgroundColor: colors.ligthgris,
    width: 70,
    height: 70,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  patientName: {
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
  },
  patientLastName: {
    fontFamily: "Roboto_300Light",
    fontSize: 15,
  },
  patientNais: {
    fontFamily: "Roboto_100Thin",
  },
  body: {
    borderBottomWidth: 1,
    width: "100%",
    borderColor: colors.ligthgris,
  },
});
export default HomePage;
