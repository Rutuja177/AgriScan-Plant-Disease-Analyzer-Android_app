import react ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  const [image,setImage]=useState(null)
  const [name, setName] = useState([]);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing:false
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      filename = result.assets[0].uri.split('/').pop();
    }
      console.log(filename);
      let formData = new FormData();
      formData.append('file', { uri: result.assets[0].uri, name: filename,type:'image/png' });   
      
    return await fetch('http://34.173.89.170:5000/detect', {
    method: 'POST',
    body: formData,
    header: {
      'content-type': 'multipart/form-data',
    },
  }).catch((error) => console.warn("fetch error:", error))
  .then((response) => response.json())
  .then((responseJson) => {
      console.log(responseJson['prediction']);
      alert(responseJson['prediction']);
 }); 
   

  };



  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <TouchableOpacity
          style={styles.btn}
          onPress={pickImage}
          >
          <Text style={styles.loginText}>Upload Image</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      {image && <Image source={{uri:image}} style={{width: 300, height: 300}} />}
      {name.map((data) => {
        return (
            data
        )
      })}
      
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  btn: {
    backgroundColor:"#006A42",
    borderRadius:90,
    alignItems: 'center',
    width:"45%",
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 20
},
loginText:{
  color:'white',
  textAlign:'center',
  paddingLeft : 10,
  paddingRight : 10,
  marginTop: 8
}

})