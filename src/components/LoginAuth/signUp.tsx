import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { signUpschema } from "../Helper/validationForSignUP";
import { router } from "expo-router";
import { FIREBASE_AUTH } from "../../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_APP } from "../../../firebase.config";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log("Firebase App initialized:", FIREBASE_APP);
  console.log("Firebase Auth initialized:", FIREBASE_AUTH);

  const handleSignUp = async (email:string, password:string) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = userCredential.user;
      // Navigate to main screen after sign-up
      console.log("User created successfully:", user);
      router.navigate("/(drawer)/(tabs)/Main");
      console.log("Navigated to Main");
    } catch (error:any) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.vBox}>
      <View style={styles.FormBox}>
        <View>
          <Text>WELCOME TO CONNECTIFY!</Text>
          <Text>Create New Account!</Text>
        </View>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={(values, { setSubmitting }) => {
            handleSignUp(values.email, values.password);
            setSubmitting(false);
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
                placeholder="Full Name"
                value={values.name}
                maxLength={20}
                onChangeText={handleChange("name")}
                style={styles.Inputtxt}
              />
              {errors.name && (
                <Text style={styles.ErrorMsg}>{errors.name}</Text>
              )}
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
              {errorMessage ? (
                <Text style={styles.ErrorMsg}>{errorMessage}</Text>
              ) : null}
              <TouchableOpacity style={styles.BtnBox} onPress={()=>handleSubmit}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.ButtonTxt}>Sign Up</Text>
                )}
              </TouchableOpacity>
              <View style={styles.changePage}>
                <Text>Already have an account?</Text>
                <Pressable onPress={() => router.navigate("/")}>
                  <Text style={{ fontWeight: "bold" }}> Sign In</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vBox: {
    flex: 1,
    height: 900,
  },
  changePage: {
    flexDirection: "row",
    justifyContent: "center",
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
    marginHorizontal: 10,
  },
  BtnBox: {
    margin: 5,
  },
});
