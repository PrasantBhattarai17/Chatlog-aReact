import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';

export default function Login() {
  return (
    <View style={styles.FormBox}>
      <View>
      <Text>WELCOME</Text>
      <Text>Sign In to your Account!</Text>
      </View>
      <Formik
       initialValues={{ email: '', password: '' }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <View>
          <TextInput placeholder='Email or Phone Number' style={styles.Inputtxt}/>
          <TextInput placeholder='Password' secureTextEntry={true} style={styles.Inputtxt}/>
          <TouchableOpacity>
          <Text style={styles.ButtonTxt}>Login</Text>
          </TouchableOpacity>
          
          <Text>New in Connectify?Sign Up</Text>


          </View>       )}
     </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  FormBox:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:360,
    height:500,
    backgroundColor:"antiquewhite"

  },
  Inputtxt:{
    width:250,
    height:50,
    margin:10,
    borderWidth:2,
    borderColor:"black",
    borderRadius:7,
    paddingHorizontal:7
  },
  ButtonTxt:{
    height:40,
    width:90,
   borderWidth:0.7,
   borderColor:"white",
   textAlign:"center",
  alignSelf:"center",
  paddingTop:4,
  borderRadius:5,
  fontWeight:"bold",
  fontSize:20,
  color:"white",
  backgroundColor:"blueviolet"
  }
})