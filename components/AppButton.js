import react from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const AppButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={{...styles.appButton, ...props.style}}>
            <Text style={styles.appButtonTxt}>{props.children}</Text>
        </TouchableOpacity>
    )
};

export const styles = StyleSheet.create ({
    // AppButton Components
    appButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        height: 37,
        borderRadius: 10,
        width: 120,
        borderRadius: 20,
        elevation: 10,
    },
    appButtonTxt: {
        textTransform: 'uppercase',
        fontWeight: '900',
    },
})

export default AppButton;