import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground , TouchableOpacity , Image, Block, theme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Background from './Background';




export default class Main extends Component {
    toLogin = () => {
        this.props.navigation.navigate("Login");
            };
    toRegister = () => {
        this.props.navigation.navigate("Sign-Up");
            };

    render(){
        
        return(
            <Background>
                 <View style={{ marginHorizontal: 40, marginVertical: 150 }}>
                 <Text style={{ color: 'white', fontSize: 50 ,fontWeight: 'bold'}}>PLANT DETECTION</Text>
                 <TouchableOpacity onPress={this.toLogin}>
                    <Text style={styles.login}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toRegister}>
                    <Text style={styles.signup}>Signup</Text>
                    </TouchableOpacity>
                 </View>
                
              
            </Background>
            
                    
             
    
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
      },
      logo:{
        width: 280,
        height: 280,
        marginLeft: '15%',
        marginTop: '10%'
      },
      login: {
        backgroundColor: 'white',
        color: '#2BB789',
        width: "75%",
        alignItems: 'center',
        borderRadius: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '35%',
        padding: "2%",
        fontSize:  27,
        marginTop: '80%',
        paddingVertical: 5,
        marginVertical: 10
      },
      signup: {
        backgroundColor: '#006A42',
        color: 'white',
        width: "75%",
        alignItems: 'center',
        borderRadius: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '35%',
        padding: "2%",
        fontSize:  27,
        marginTop: '10%',
        paddingVertical: 5,
        marginVertical: 10
      }

     
    
});