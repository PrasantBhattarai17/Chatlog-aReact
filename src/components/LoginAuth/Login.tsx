import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { signUpschema } from "../Helper/validationForSignUP";
import { router } from "expo-router";
export default function Login() {
  const [isSign,setIsSign] = useState(false);
  const toggleSign = () => {
    setIsSign(!isSign);
  };

  return (
    <View style={styles.vBox}>
      {isSign ? (
        <>
          <View style={styles.FormBox}>
            <View>
              <Text>WELCOME TO CONNECTIFY!</Text>
              <Text>Create New Account!</Text>
            </View>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
              validationSchema={signUpschema}
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
                  <TextInput
                    placeholder="Email or Phone Number"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    style={styles.Inputtxt}
                  />
                  {errors.email && (
                    <Text style={styles.ErrorMsg}>{errors.email}</Text>
                  )}
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    style={styles.Inputtxt}
                  />
                  {errors.password && (
                    <Text style={styles.ErrorMsg}>{errors.password}</Text>
                  )}
                  <TouchableOpacity onPress={()=>handleSubmit()}>
                    <Text style={styles.ButtonTxt}>Sign Up</Text>
                  </TouchableOpacity>
                  <View style={styles.changePage}>
                  <Text>Already have an account?</Text>
                    <Pressable onPress={()=>toggleSign()}><Text style={{fontWeight:"bold"}}> Sign In</Text></Pressable>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </>
      ) : (
        <View style={styles.FormBox}>
          <View>
            <Text>WELCOME TO CONNECTIFY!</Text>
            <Text>Sign In to your Account!</Text>
          </View>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                router.navigate("/(drawer)/(tabs)/Main")
                setSubmitting(false);
              }, 400);
            }}
            validationSchema={signUpschema}
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
                <TextInput
                  placeholder="Email or Phone Number"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  style={styles.Inputtxt}
                />
                {errors.email && (
                  <Text style={styles.ErrorMsg}>{errors.email}</Text>
                )}
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  style={styles.Inputtxt}
                />
                {errors.password && (
                  <Text style={styles.ErrorMsg}>{errors.password}</Text>
                )}
                <TouchableOpacity onPress={() => handleSubmit()}>
                  <Text style={styles.ButtonTxt}>Login</Text>
                </TouchableOpacity>
                <View style={styles.changePage}>
                <Text>New in Connectify?</Text>
                <Pressable onPress={()=>toggleSign()}><Text  style={{fontWeight:"bold"}}> Sign up</Text></Pressable>
                </View>
              </View>
            )}
          </Formik>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  vBox: {
    flex: 1,
  },
  changePage:{
    flexDirection:"row",
    justifyContent:"center"
  
  },
    FormBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 500,
    backgroundColor: "antiquewhite",
  },
  Inputtxt: {
    width: 250,
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 7,
    paddingHorizontal: 7,
  },
  ButtonTxt: {
    height: 40,
    width: 90,
    borderWidth: 0.7,
    borderColor: "white",
    textAlign: "center",
    alignSelf: "center",
    paddingTop: 4,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "blueviolet",
  },
  ErrorMsg: {
    color: "red",
  },
});
