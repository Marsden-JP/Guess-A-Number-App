import react from "react";
import { Text, View, StyleSheet } from 'react-native';
import Colors from "../constants/Colors";

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

export const styles = StyleSheet.create ({
    header: {
        width: '100%',
        backgroundColor: Colors.background,
        paddingTop: 35,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: Colors.whiteTxt,
        fontSize: 30,
        fontFamily: 'JosefinSans-Regular',
    },
})

export default Header;