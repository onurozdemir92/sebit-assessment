import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../Theme/Colors';

const { width, height } = Dimensions.get('window')

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,


    },
    subContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: Colors.white,
        padding: 10

    },
    imageContainer: {
        width: width * .6,
        height: height * .2,
        marginRight: 5
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    titleText: {
        marginBottom: 4
    }




})

export default Styles;