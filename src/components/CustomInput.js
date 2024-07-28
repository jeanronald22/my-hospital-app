import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import colors from "../styles/colors";
import DateTimePicker from "@react-native-community/datetimepicker";

/**
 *
 * @returns ce composant retoune un input personnaliser en fonction des props renseigner
 */
const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
  labelStyle,
  onTouchStart,
}) => {
  // ! etat
  const [date, setDate] = useState(new Date());
  const [, setShow] = useState(false);
  // !fonction
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setTextInputValue(currentDate.toDateString());
  };

  return (
    <View style={styles.container}>
      {/*si le label a ete renseigner alors on l'affiche */}
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      {/* definition du inout */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, style]}
        onTouchStart={onTouchStart}
      />
      {onTouchStart && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: colors.ligthgris,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: "Roboto_400Regular_Italic",
  },
});

export default CustomInput;
