import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../styles/colors";

const CustomEmtyView = ({ imageSource, title, subTitile }) => {
  const text = `si le problème perciste contacter votre administrateur`;
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {`${subTitile}`}
                  <Text style={styles.defaulteText}>{text}</Text>
        </Text>
      </View>
    </View>
  );
};

export default CustomEmtyView;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  imgContainer: {
    width: "100%",
    height: "80%",
    // backgroundColor: "blue",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    // backgroundColor: "red",
    height: "20%",
    alignItems: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    textTransform: "none",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
  },
  defaulteText: {
    color: colors.blue,
    fontFamily: "Roboto_100Thin_Italic",
  },
});
