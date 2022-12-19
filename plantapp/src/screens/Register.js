import React, { Component, useState } from 'react';
//import useState from 'react-hook-use-state';
import { Button, Keyboard, Platform, StyleSheet, Text, TextInput, View , TouchableOpacity} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Home from '../screens/Home';
import Background from './Background';



export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          firstname : '',
          lastname : '',
          phone : '',
          address : '',
          email : '',
          password : '',
          check_textInputChange : false,
          secureTextEntry : true,
          confirmSecureTextEntry : true
        };
      }

      InsertRecord=()=> {

        var firstname = this.state.firstname;
        var lastname = this.state.lastname;
        var phone = this.state.phone;
        var address = this.state.address;
        var email = this.state.email;
        var password = this.state.password;

        var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

        if ((firstname.length==0) || (lastname.length==0) || (phone.length==0) ||(address.length==0) || (email.length==0) || (password.length==0)){
            alert("Required Field Is Missing!!!");
        } else if (!(checkEmail).test(email)){
            alert("invalid email!!!")
        } else if (password.length<8){
            alert("Minimum 8 characters required!!!");
        } else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(password))){
            alert("Use atleast 1 special character!!!");
        }  else {

        var Data ={
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            address: address,
            email: email,
            password: password
            
          };

        var InsertAPIURL = "https://rvd0748.uta.cloud/signup.php";   //API to render signup

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            };

        // Fetch function    
        fetch(InsertAPIURL,{
                method:'POST',
                headers:headers,
                body: JSON.stringify(Data) //convert data to JSON
            })
            .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
            .then((response)=>{
                alert("Registration completed!")
                console.log(response);       // If data is in JSON => Display alert msg
                this.props.navigation.navigate("Login"); //Navigate to next screen if authentications are valid
              })
              .catch((error)=>{
                alert("Error Occured" + error);
            })
        }

      }

      updateSecureTextEntry(){
        this.setState({
            ...this.state,
            secureTextEntry: !this.state.secureTextEntry
        });
      }
    
      updateConfirmSecureTextEntry(){
        this.setState({
            ...this.state,
            confirmSecureTextEntry: !this.state.confirmSecureTextEntry
        });
    }
    toLogin = () => {
        this.props.navigation.navigate("Login");
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
                        marginTop: 60,
                    }}>
                    Register
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 19,
                        fontWeight: 'bold',
                        marginBottom: 60,
                    }}>
                    Create a new account
                </Text>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 700,
                        width: 460,
                        borderTopLeftRadius: 130,
                        paddingTop: 50,
                        alignItems: 'center',
                    }}>
                <TextInput style={styles.input} 
                    placeholderTextColor={'#006A42'}
                    placeholder="First Name"
                    onChangeText={firstname => this.setState({firstname})}/>
                <TextInput style={styles.input} 
                    placeholderTextColor={'#006A42'}
                    placeholder="Last Name"
                    onChangeText={lastname => this.setState({lastname})}/>
                <TextInput style={styles.input}
                    placeholderTextColor={'#006A42'}
                    placeholder="Address"
                    onChangeText={address => this.setState({address})}/>
                <TextInput style={styles.input} 
                    placeholderTextColor={'#006A42'}
                    keyboardType={'number'}
                    placeholder="Phone"
                    onChangeText={phone => this.setState({phone})}/>
                <TextInput 
                    style={styles.input} 
                    placeholderTextColor={'#006A42'}
                    keyboardType={'email-address'}
                    placeholder="Email" 
                    id = "email" 
                    onChangeText={email => this.setState({email})}/>
                <TextInput style={styles.input} 
                    placeholderTextColor={'#006A42'}
                    placeholder="Password"
                    secureTextEntry={this.state.secureTextEntry ? true : false}
                    onChangeText={password => this.setState({password})} />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>{
                        this.InsertRecord()
                    }}
                    >
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
                <View
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    }}>
                <Text 
                    style={{fontSize: 16, fontWeight: 'bold'}}>
                    Already have an account ?{' '}
                </Text>
                <TouchableOpacity
                    onPress={this.toLogin}>
                <Text
                    style={{color: '#006A42', fontWeight: 'bold', fontSize: 16}}>
                    Login
                </Text>
                </TouchableOpacity>
            </View>              
            </View>
            </View>
            </Background>
            
            /*
            <View style={styles.container}>
            
            <View style={styles.inputTextWrapper}>
            <TextInput style={styles.input} 
            placeholder="First Name"
            onChangeText={firstname => this.setState({firstname})}/>
            </View>

            <View style={styles.inputTextWrapper}>
            <TextInput style={styles.input} 
            placeholder="Last Name"
            onChangeText={lastname => this.setState({lastname})}/>
            </View>

            <View style={styles.inputTextWrapper}>
            <TextInput style={styles.input}
            placeholder="Address"
            onChangeText={address => this.setState({address})}/>
            </View>

            <View style={styles.inputTextWrapper}>
            <TextInput style={styles.input} placeholder="Phone"
            onChangeText={phone => this.setState({phone})}/>
            </View>
            
            <View style={styles.inputTextWrapper}>
            <TextInput 
            style={styles.input} 
            placeholder="Email" 
            id = "email" 
            onChangeText={email => this.setState({email})}/>
            </View>

            <View style={styles.inputTextWrapper}>
            <TextInput style={styles.input} 
            placeholder="Password"
            secureTextEntry={this.state.secureTextEntry ? true : false}
            onChangeText={password => this.setState({password})}
            />
            </View>
            <TouchableOpacity
                style={styles.btn}
                
                onPress={()=>{
                    this.InsertRecord()
                }}
                underlayColor='#fff'>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
            </View> */
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 100,
        },
    input: {
        borderRadius: 100,
        paddingHorizontal: 10, 
        width: '75%',
        backgroundColor: 'rgb(220,220, 220)', 
        marginVertical: 15,
        color: '#006A42',
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
        width:"60%",
        paddingVertical: 5,
        marginVertical: 10,
        paddingHorizontal: 10
        //borderWidth: 1,
        //borderColor: '#fff'
    },
    loginText:{
        color:'white',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    inputTextWrapper: {
        marginBottom: 24,
      },


})

  