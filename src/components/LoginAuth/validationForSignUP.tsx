import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from "yup";
export const signUpschema=Yup.object({
    email:Yup.string().email("Email Invallid!").required("Please Enter email"),
    password:Yup.string().min(8,"Password must be more than 8 digits").required("Please Enter password")
})

