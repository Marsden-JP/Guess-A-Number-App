import react from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const NumberOutput = (props) => {
    return (
        <View style={styles.numOutputContainer}>
            <Text style={styles.numOutputTxt}>{props.children}</Text>
        </View>
    );
};

export const styles = StyleSheet.create ({
    numOutputTxt: {
        fontSize: 70,
        padding: 20,
        paddingHorizontal: 30,
        color: Colors.whiteTxt,
    },
    numOutputContainer: {
        borderRadius: 5,
        backgroundColor: Colors.cardAccent,
        elevation: 20,
        margin: 10,
        marginBottom: 20,
    },
})

export default NumberOutput;