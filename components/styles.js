
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    background:{
        flex:1,
        //backgroundColor:"#f2deff",
    },
    
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth:"1rem",
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        elevation:10,
      },
      searchInput: {
        flex: 1,
        color:"black",
        fontSize: 20,
        marginRight: 10,
        fontWeight:"bold",
      },
      weatherContainer: {
        maxWidth: "1rem",
        margin:20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation:10,
        alignItems:"center",
        
        
      },
      textCity:{
        fontSize:40,
        fontWeight:"bold",
        alignSelf:"center",
        color:"#674188"
      },
      textWeather:{
        fontSize:26,
        fontWeight:"bold",
        color:"black"
      },
      textTemperature:{
        fontSize:25,
        fontWeight:"700",
        color:"black"
      },
      textHumidity:{
        fontSize:24,
        fontWeight:"700",
        color:"black"
      },
      icon:{
        width:50,
        height:50,
      },
      weatherIcon:{
        fontSize:200,
      },
      weatherIconBox:{
        backgroundColor:"white",
        alignItems:"center",
        elevation:10,
        borderRadius:20,
        margin:40,
        padding:10,
        borderColor: 'black',
        borderWidth:1,
        
      },
      footer: {
        alignItems: 'center', 
        paddingVertical: 100,
      },
      footerText: {
        fontSize: 12,
        color: '#888', 
        fontWeight:"bold",
      },
      container: {
        flex: 1,
       
      },
      backgroundImage: {
        ...StyleSheet.absoluteFillObject, 
        height: '100%',
        resizeMode: 'cover',
        
      },
      overlay: {
        flex: 1,
      
        //justifyContent: 'space-between', 
      },
      backgroundImage2: {
        ...StyleSheet.absoluteFillObject, 
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius:10, 
      },
})

export default styles;