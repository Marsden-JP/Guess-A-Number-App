import react from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";


const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

export const styles = StyleSheet.create ({
    card: {
        padding: 15,
        paddingHorizontal: 40,
        elevation: 10,
        backgroundColor: Colors.cardPrimary,
        borderRadius: 10
    },
})

export default Card;