import { TouchableOpacity } from "react-native";
import { styles } from './styles'
import { Button } from './src/components/Button';




export function Button() {

    return (
        <TouchableOpacity style={
            styles.button
        }>
            <Text styles={styles.buttonText}>
                Clique aqui
            </Text>
        </TouchableOpacity>
    )

}