import { Button } from "react-native";
import { Colors } from "../../styles/colors"


export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackgrkound,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 8
    },
    buttonText: {
        color: colors.text,
        fontWeight: "500"
    },
    buttonPrimary: {
        backgroundColor: colors.primary
    },
    buttonSecondary: {
        backgroundColor: colors.secondary
    }
})