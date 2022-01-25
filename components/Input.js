// React Componants Imports
import React from "react";
import { TextInput, Text, StyleSheet } from "react-native";
// Componant, Styles & Constants Imports
import Colors from "../constants/Colors";

const Input = (props) => {
    return (
        <TextInput {...props} style={{ ...styles.defaultInput, ...props.style }} />
    );
};

export const styles = StyleSheet.create ({
    defaultInput: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
})

export default Input;