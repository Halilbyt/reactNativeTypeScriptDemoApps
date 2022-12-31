import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const deviceSize = Dimensions.get('window');


export default StyleSheet.create({
    modelContainer: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    innerContainer: {
        backgroundColor: Colors.defaultGreyColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: deviceSize.height / 2.5,
        padding: 10,
    },

    title: {
        marginTop: 5,
        color: Colors.defaultTitleColor,
        fontFamily: Fonts.defaultRegularFontFamily,
        textAlign: 'center',
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.defaultTitleColor,
        marginTop: 30,
        color: Colors.defaultTitleColor,
    },
    buttonContainer: {
        backgroundColor: Colors.defaultGreenColor,
        borderRadius: 50,
        justtifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 10,
    },
    buttonPlaceholder: {
        color: Colors.defaultDarkColor,
        fontFamily: Fonts.defaultRegularFontFamily,
        fontSize: 15,
    }
})