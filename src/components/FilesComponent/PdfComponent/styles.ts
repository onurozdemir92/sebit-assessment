import { StyleSheet } from 'react-native';
import { Colors } from '../../../Theme/Colors';


const Styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,


    },
    subContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        padding: 10

    },
    imageContainer: {
        width: 60,
        height: 60,

    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        flex: 1,
        marginLeft: 5,
        justifyContent: 'space-around'
    }


})

export default Styles;