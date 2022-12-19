import React from 'react'
import {View, Text, Image, ImageBackground,Button,  StyleSheet,TextInput,TouchableOpacity} from 'react-native'



const Profile = ({navigation}) =>{
    const afterLogout = () => {
        navigation.navigate("Login");
            
    };
 
    return (
        <View >
            <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:10,
                   paddingHorizontal:20,
                   marginHorizontal:30,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                <Text style={{

                }}><Text></Text>Hi! Test Farmer{'\n'}{'\n'}
                Email: farmer@gmail.com {'\n'}{'\n'}
                Address: 1006, University Village {'\n'}{'\n'}
                Phone: 6823339090 {'\n'}{'\n'}
                </Text>
               </View>
            <TouchableOpacity
          style={styles.btn}
          onPress={afterLogout}
          
          >
          <Text style={styles.loginText}>Logout</Text>
        </TouchableOpacity>

        </View>
    )
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        padding: 16,
        paddingBottom: 100,
        },
    
    btn: {
        backgroundColor:"#006A42",
        marginTop: 20,
        //marginBottom: 20,
        //marginRight:50,
        marginLeft:40,
        //paddingTop:10,
        //paddingBottom:10,
        borderRadius:50,
        alignItems: 'center',
        width:"80%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 100,
        //borderWidth: 1,
        //borderColor: '#fff'
        flexDirection:"row"
    },
    loginText:{
        color:'white',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
})