import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import Home from '../screens/Home';
import { NavigationAction } from '@react-navigation/native';
import Background from './Background';
import Register from './Register';


export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          email : '',
          password : '',
          check_textInputChange : false,
          secureTextEntry : true,
        };
      }
      InsertRecord=()=>{
        var email = this.state.email;
        var password = this.state.password;

        if((email.length==0) || (password.length==0)){
            alert("Required Field Is Missing!!!");
        } else {

            var Data ={
                email: email,
                password: password
              };
            
            var APIURL = "https://rvd0748.uta.cloud/login.php";

            var headers = {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            };

            fetch(APIURL,{
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data)
              })
            .then((Response)=>Response.json())
            .then((Response)=>{
                  alert(Response[0].Message)
                  if (Response[0].Message == "Success"){
                    console.log("true");
                    this.props.navigation.navigate("Home");
                  }
                  
                  console.log(Data);
                })
            
            .catch((error)=>{
            console.error("ERROR FOUND" + error);
          })

        }
    
      }

    toHome = () => {
        this.props.navigation.navigate("Home");
            };
    toRegister = () => {
        this.props.navigation.navigate("Sign-Up");
            };
            
    render(){
    return (

      <Background>
        <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 60,
          }}>
          Login
        </Text>
        <View
        style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: '#006A42', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <TextInput 
            style={styles.input} 
            placeholder="Email / Username"
            keyboardType={'email-address'} 
            onChangeText={email=>this.setState({email})}
          />
          <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry={this.state.secureTextEntry ? true : false}
          onChangeText={password=>this.setState({password})} 
          />
           <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: '#006A42', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
            <TouchableOpacity
          style={styles.btn}
          onPress={()=>{
            this.InsertRecord()
          }}
          >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={this.toRegister}>
            <Text style={{ color: '#006A42', fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
          


        </View>

        </View>



      </Background>
      
      /*
        <View style={styles.container}>
        <TextInput style={styles.input} 
        placeholder="Username"
        onChangeText={email=>this.setState({email})}
        />
        <TextInput style={styles.input} 
        placeholder="Enter Password"
        secureTextEntry={this.state.secureTextEntry ? true : false}
        onChangeText={password=>this.setState({password})}

        />
        <TouchableOpacity
          style={styles.btn}
          onPress={()=>{
            this.InsertRecord()
          }}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        </View> */
    )}
}


const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        padding: 16,
        paddingBottom: 100,
        },
    input: {
        //marginTop: 15,
        //marginBottom: 15,
        //height: 40,
        //borderColor: "#000000",
        //borderBottomWidth: 1,
        //paddingRight: 30,
        borderRadius: 100, 
        color: '#006A42', 
        paddingHorizontal: 10, 
        width: '78%', 
        backgroundColor: 'rgb(220,220, 220)', 
        marginVertical: 10
      },
    btn: {
        backgroundColor:"#006A42",
        //marginTop: 20,
        //marginBottom: 20,
        //marginRight:40,
        //marginLeft:40,
        //paddingTop:10,
        //paddingBottom:10,
        borderRadius:100,
        alignItems: 'center',
        width:"90%",
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10
        //borderWidth: 1,
        //borderColor: '#fff'
    },
    loginText:{
        color:'white',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }

        

})




