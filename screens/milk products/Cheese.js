import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Cheese extends React.Component {
    render(){
        return (
            <View style = {{backgroundColor: "pink" }}>
                    <TouchableOpacity 
                    style = {styles.backButton}
                    onPress = {() => {
                        this.props.navigation.navigate("Milk")
                    }}
                >
                    <Text style = {[styles.text, {fontSize: 4}]}>
                        Back
                    </Text>
                </TouchableOpacity>

            <View style = {styles.container}> 
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}> 
                        choose one cheese
                    </Text>
                </View>

                <View>
                        <Image 
                            source = {require('./image 5.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Mozzarella Cheese
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.allrecipes.com/recipe/254478/homemade-mozzarella-cheese/
                        </Text>

                        <Image 
                            source = {require('./image 6.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Cheddar Cheese
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.wikihow.com/Make-Cheddar-Cheese
                        </Text> 

                        
                        <Image 
                            source = {require('./image 7.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Parmesan Cheese
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://curd-nerd.com/hard-cheese-recipes/parmesan/
                        </Text> 

                        <Image 
                            source = {require('./image 8.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Cottage Cheese
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://housewifehowtos.com/cook/how-to-make-homemade-cottage-cheese/
                        </Text> 

                        <Image 
                            source = {require('./image 9.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Paneer Cheese
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.wikihow.com/Make-Paneer-(Indian-Cheese)
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
