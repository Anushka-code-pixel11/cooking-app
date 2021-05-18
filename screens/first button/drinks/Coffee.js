import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Coffee extends React.Component {
    render(){
        return (
            <View style = {{backgroundColor: "pink" }}>
                    <TouchableOpacity 
                    style = {styles.backButton}
                    onPress = {() => {
                        this.props.navigation.navigate("decision")
                    }}
                >
                    <Text style = {[styles.text, {fontSize: 4}]}>
                        Back
                    </Text>
                </TouchableOpacity>
            <View style = {styles.container}> 
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}> 
                        choose one 
                    </Text>
                </View>

                <View>
                    <Image 
                        source = {require('./images/image 1.jpg')}
                        style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                    />
                    <Text style = {styles.text}>
                        Cappacino
                    </Text>
                    <Text style = {styles.text}>
                        Copy and Paste the link in a browser
                    </Text>
                    <Text style = {styles.text}>
                        https://www.thespruceeats.com/how-to-make-cappuccinos-766116
                    </Text> 

                    <Image 
                        source = {require('./images/image 3.jpg')}
                        style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                    />
                    <Text style = {styles.text}>
                        Expresso
                    </Text>
                    <Text style = {styles.text}>
                        Copy and Paste the link in a browser
                    </Text>
                    <Text style = {styles.text}>
                        https://www.tasteofhome.com/recipes/easy-espresso/
                    </Text> 

                    <Image 
                        source = {require('./images/image 2.jpg')}
                        style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                    />
                    <Text style = {styles.text}>
                        CAFFÈ LATTE
                    </Text>
                    <Text style = {styles.text}>
                        Copy and Paste the link in a browser
                    </Text>
                    <Text style = {styles.text}>
                        https://www.thespruceeats.com/how-to-make-caffe-latte-765372
                    </Text> 
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
      color: "purple",
      padding: RFValue(20),
      fontSize: RFValue(19),
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
        color: "purple",
        fontWeight: "200",
        fontSize: RFValue(15),
        fontFamily: "Comic Sans MS",
        alignItems: "center",
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
