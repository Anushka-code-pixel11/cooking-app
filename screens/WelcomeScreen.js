import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class WelcomeScreen extends React.Component {
    render(){
        return (
            <View style = {styles.container}> 
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}> 
                        Welcome!!
                    </Text>
                </View>

                <View>
                    <TouchableOpacity style = {styles.button}>
                        <Text 
                            style = {styles.buttonText}
                            onPress = {() => {
                                this.props.navigation.navigate("Decision")
                            }}>
                            Already know something about cooking
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {() => {
                            this.props.navigation.navigate("Info")
                        }}>
                        <Text style = {styles.buttonText}>
                            Beginner
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },

    textContainer:{
      backgroundColor: "blue",
      marginTop: 10,
    },

    text: {
      color: "black",
      padding: RFValue(20),
      fontSize: RFValue(22),
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "Comic Sans MS",
    },
    button: {
        width: RFValue(300),
        height: RFValue(60),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "purple",
        padding: RFValue(10),
        marginTop: 100,
      },
      buttonText: {
        color: "#ffff",
        fontWeight: "200",
        fontSize: RFValue(15),
        fontFamily: "Comic Sans MS",
      }
  });
