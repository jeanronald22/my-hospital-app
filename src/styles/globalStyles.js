import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors";

const globalStyles = StyleSheet.create({
  globalContainer: {
    backgroundColor: colors.blanche,
    flexGrow: 1,
    padding: 10,
  },
  globalTitleContainer: {
    height: Dimensions.get("window").height * 0.05,
  },
  globalTitle: {
    fontSize: 30,
    height: "100%",
    fontFamily: "Roboto_700Bold",
  },
});

export default globalStyles;