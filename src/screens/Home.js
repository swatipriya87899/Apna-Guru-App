import { View, ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Menu from "../components/Menu";

export default function Home(props) {
  return (
    <ScrollView>
      <View style={styles.home_component}>
        <View style={styles.home_image_container}>
          <ImageBackground
            style={styles.home_image}
            source={{
              uri: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
          />
           <View style={styles.company}>
            <Text style={styles.name}>Apna Guru</Text>
            <Text style={styles.company_quotes}>We need to bring Learning to people instead of people to learning</Text>
        </View>
        </View>
        <Text style={styles.home_heading}>Welcome To Apna Guru</Text>
        <Text style={styles.home_content}>
          {props.startUpName} is an initiative by professionals from different
          IT & Non-IT firms ​​for Preparing the technical geeks for better
          opportunities.
          
        </Text>
        <View style={styles.menu}>
          <Menu></Menu>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    company:{
        opacity:1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
  name: {
    fontSize: 40,
    color: "#194c38",
    textAlign: "center",
    fontWeight: "bold",
    color: 'white',
  },

  company_quotes:{
    fontSize: 20,
    color: "#194c38",
    textAlign: "center",
    paddingLeft:10,
    paddingRight:10,
    color: 'white',
  },
  home_image_container: {
    backgroundColor: "#064635",
    // opacity: 0.5
  },
  home_component: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  home_image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    alignSelf: "center",
    opacity: 0.3,
  },
  home_heading: {
    color: "#064635",
    fontSize: 28,
    marginTop: 10,
    textAlign: "center",
    // fontWeight: 'bolder'
  },
  home_content: {
    textAlign: "center",
    fontSize:"20px",
    padding:20
  },
  menu: {
    marginTop: 200,
  },
});