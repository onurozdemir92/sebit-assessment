import { StyleSheet } from 'react-native'
import { Colors } from '../../Theme/Colors';

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        width: '100%',
        height: '70%',
        padding: 10,
        backgroundColor: Colors.white
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        width: '70%',
        backgroundColor: Colors.buttonGreen,
        flexDirection: 'row',
        height: '20%',
        borderRadius: 5
    },
    containerInButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 18

    },
    downloadContainerInButton: {
        borderLeftWidth: 2,
        borderLeftColor: Colors.white
    }


})

export default Styles;

