import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About (){
  return (
    <View style={styles.about}>
      <Text style={styles.about_us}>About Us</Text>
      <Text style={styles.sub_heading}> Apna Guru is an initiative by professionals from different IT & Non-IT firms ​​for Preparing the technical geeks for better opportunities.</Text>
      <Text style={styles.content}> Here we provide:</Text>
     
      <Text style={styles.content}> Live short term training via online/offline Bootcamps.</Text>
      <Text style={styles.content}> Mentorship/TAship to tech geeks.</Text>
      <Text style={styles.content}> Financial support for students, to participate in different national competitions.</Text>
      <Text style={styles.content}> Project based curriculum to grab best Internship/Job opportunities.</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  about:{
    padding:15
  },
  about_us:{
        fontSize:40,
        color:'#013437',
        textAlign:'center',
        fontFamily:'italic'
    },
    sub_heading:{
      fontSize:20
    },
    content:{
      fontSize:18
    }
})