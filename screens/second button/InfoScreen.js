import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class InfoScreen extends React.Component {
    render(){
        return (
            <View style = {{backgroundColor: "pink" }}>
                    <TouchableOpacity 
                    style = {styles.backButton}
                    onPress = {() => {
                        this.props.navigation.navigate("Welcome")
                    }}
                >
                    <Text style = {[styles.text, {fontSize: 4}]}>
                        Back
                    </Text>
                </TouchableOpacity>

                <View style = {styles.container}> 
                    <View style = {styles.textContainer}>
                        <Text style = {styles.text}> 
                            Some Info
                        </Text>
                    </View>

                    <View>
                        <Text style = {[styles.buttonText, {marginTop: 50}]}>
                            Cooking or cookery is the art, science, and craft of using heat 
                            to prepare food for consumption. Cooking techniques and 
                            ingredients vary widely across the world, from grilling 
                            food over an open fire to using electric stoves, to baking 
                            in various types of ovens, reflecting unique environmental, 
                            economic, and cultural traditions and trends.
                        </Text>

                        <Text style = {[styles.buttonText, 
                                    {marginTop: 100, alignSelf: "center"}]}>
                        ARE YOU READY TO LEARN SOME COOKING??
                        </Text>

                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = {() => {
                                this.props.navigation.navigate("DecisionS")
                            }}> 
                            <Text style = {styles.buttonText}>
                                Click here to start
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },

    textContainer:{
      backgroundColor: "magenta",
    },

    text: {
      color: "white",
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
        alignSelf: "center",
        borderRadius: RFValue(25),
        backgroundColor: "red",
        padding: RFValue(10),
        marginTop: 100,
      },
      buttonText: {
        color: "#ffff",
        fontWeight: "200",
        fontSize: RFValue(15),
        fontFamily: "Comic Sans MS",
        alignSelf: "center",
      },
      backButton: {
        width: RFValue(30),
        height: RFValue(10),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "blue",
        padding: RFValue(10),
        marginTop: 30,
        marginLeft: 20,
      }
  });
