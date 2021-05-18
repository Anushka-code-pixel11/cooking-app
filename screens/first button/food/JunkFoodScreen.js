import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class JunkFoodScreen extends React.Component {
    render(){
        return (
            <View style = {{backgroundColor: "pink" }}>
                    <TouchableOpacity 
                    style = {styles.backButton}
                    onPress = {() => {
                        this.props.navigation.navigate("FooD")
                    }}
                >
                    <Text style = {[styles.text, {fontSize: 4}]}>
                        Back
                    </Text>
                </TouchableOpacity>

                <View style = {styles.container}> 
                    <View style = {styles.textContainer}>
                        <Text style = {styles.text}> 
                            choose one option
                        </Text>
                    </View>

                    <View>
                        <Image 
                            source = {require('./image 1.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Hakka Noodles
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.indianhealthyrecipes.com/hakka-noodles-recipe/
                        </Text>

                        <Image 
                            source = {require('./image 2.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Samosa
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.indianhealthyrecipes.com/samosa-recipe-make-samosa/
                        </Text>

                        <Image 
                            source = {require('./image 3.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Vada Pav
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.vegrecipesofindia.com/vada-pav-how-to-make-wada-pav/
                        </Text>

                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = {() => {
                                this.props.navigation.navigate("pizza")
                            }}>
                            <Text style = {styles.buttonText}>
                                pizza
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
        alignContent: "center",
        alignSelf: "center",
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
