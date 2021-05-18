import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class MenuScreenForFood extends React.Component {
    render(){
        return (
            <View style = {{backgroundColor: "pink" }}>
                    <TouchableOpacity 
                    style = {styles.backButton}
                    onPress = {() => {
                        this.props.navigation.navigate("Decision")
                    }}
                >
                    <Text style = {[styles.text, {fontSize: 4}]}>
                        Back
                    </Text>
                </TouchableOpacity>

                <View style = {styles.container}> 
                    <View style = {styles.textContainer}>
                        <Text style = {styles.text}> 
                            choose one dish
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = {() => {
                                this.props.navigation.navigate("Milk");
                            }}>
                            <Text 
                                style = {styles.buttonText}>
                                Milk Products
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = {() => {
                                this.props.navigation.navigate("JunkFood")
                            }}>
                            <Text style = {styles.buttonText}>
                                Junk Food
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = {() => {
                                this.props.navigation.navigate("Fruit")
                            }}>
                            <Text style = {styles.buttonText}>
                                Fruit Salads
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
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
    },

    textContainer:{
      backgroundColor: "brown",
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
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "black",
        padding: RFValue(10),
        marginTop: 100,
      },
      buttonText: {
        color: "#ffff",
        fontWeight: "200",
        fontSize: RFValue(15),
        fontFamily: "Comic Sans MS",
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
