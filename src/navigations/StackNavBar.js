import { Image } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Connection from "../screens/Connection";
import Patients from "../screens/screensDoctor/Patients";
import Consultations from "../screens/screensDoctor/Consultations";
import RendezVous from "../screens/screensDoctor/RendezVous";
import Prescription from "../screens/screensDoctor/Prescription";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../styles/colors";
import AddNewPatients from "../components/AddNewPatients";

export default function StackNavBar() {
  // !------------------------------definition de fonction--------------------------------//
  const header = () => {
    return <Image source={require("../assets/images/logo.png")} />;
  };
  // !--------------------------------definition des pile de naviagtion et du tabs-------------------//
  const Stack = createStackNavigator(); //creation de la pile de navigation
  const Tab = createBottomTabNavigator();
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            color = focused ? colors.blue : color;
            size = focused ? 30 : 24; // taille de l'icone en fonction de son etat focused
            let iconeName; //nom de notre image
            // dans cette condition on determine le nom de l'image en fonction de la route et de son etat focused
            switch (route.name) {
              case "Patients":
                iconeName = "groups";
                break;
              case "Rendez-Vous":
                iconeName = "event";
                break;
              case "Consultations":
                iconeName = "medical-services";
                break;
              case "Prescriptions":
                iconeName = "receipt-long";
                break;
              default:
                break;
            }
            // on retourne l'iconne
            return <MaterialIcons name={iconeName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Patients"
          component={Patients}
        />
        <Tab.Screen name="Consultations" component={Consultations} />
        <Tab.Screen name="Rendez-Vous" component={RendezVous} />
        <Tab.Screen name="Prescriptions" component={Prescription} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: header,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Connection" component={Connection} />
        {/* <Stack.Screen name = "Home Doctor" component={HomePage}/> */}
        <Stack.Screen name="Home Doctor" component={HomeTabs} />
        <Stack.Screen name="Ajouter un patient" component={AddNewPatients}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
