import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";
export default StyleSheet.create({
    container:{
        position:'absolute',
        backgroundColor:Colors.defaultGreenColor,
        borderRadius:50,
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        right:50,
        bottom:50,
}, 
icon:{
    fontSize:35,
    color:Colors.defaultDarkColor,
    fontFamily:Fonts.defaultRegularFontFamily,
    textAlign:'center',
    padding:5,
},
});

 