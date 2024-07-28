import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import Colors from "../styles/colors";
import colors from "../styles/colors";


/**
 *
 * @returns un modal personnaliser en fonction des props renseigner
 */
const CustomModal = ({ isVisible, onClose, message, imageSource }) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.modalContainer}>
                {imageSource && <Image source={imageSource} style={styles.image} />}
                <Text style={styles.message}>{message}</Text>
                <TouchableOpacity onPress={onClose} styles={styles.button}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
};



const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: Colors.blanche,
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    message: {
        fontFamily: "Roboto_400Regular_Italic",
        fontSize: 16,
        color: colors.label,
        textAlign: 'center',
        marginBottom: 20  
    },
    button: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: colors.noir,
        fontSize: 16,
        fontFamily: "Roboto_400Regular_Italic",
    }
});
export default CustomModal;