import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  
  const Menu = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.menu_style}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Course");
          }}
        >
          <View>
            <Image
              style={styles.menu_logo}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4762/4762311.png",
              }}
            />
            <Text>Course</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          <View>
            <Image
              style={styles.menu_logo}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/189/189664.png",
              }}
            />
            <Text>About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Contact");
          }}
        >
              <View>
            <Image
              style={styles.menu_logo}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2343/2343694.png",
              }}
            />
            <Text>Contact Us</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Menu;
  
  const styles = StyleSheet.create({
    menu_style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    menu_logo: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
  });