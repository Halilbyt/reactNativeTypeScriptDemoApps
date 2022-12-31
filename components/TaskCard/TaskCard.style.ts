import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const baseStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    text: {
        fontFamily: Fonts.defaultRegularFontFamily,
        fontSize: 17,
    }
})

export default StyleSheet.create({
    container: {
        ...baseStyle.container,
        backgroundColor: Colors.defaultGreenColor,
    },
    text: {
        ...baseStyle.text,
        color: Colors.defaultDarkColor,

    },
    complatedContainer: {
        ...baseStyle.container,
        backgroundColor: Colors.defaultGreyColor,
    },
    complatedText: {
        ...baseStyle.text,
        textDecorationLine: 'line-through',
        color: Colors.defaultTitleColor
    }
})