import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Pizza extends React.Component {
    render(){
        return (
            <View style = {{backgroundColor: "pink" }}>
                    <TouchableOpacity 
                    style = {styles.backButton}
                    onPress = {() => {
                        this.props.navigation.navigate("JunkFood")
                    }}
                >
                    <Text style = {[styles.text, {fontSize: 4}]}>
                        Back
                    </Text>
                </TouchableOpacity>
            <View style = {styles.container}> 
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}> 
                        choose one pizza
                    </Text>
                </View>

                <View>
                        <Image 
                            source = {require('./images/image 1.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Margherita pizza
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.vegrecipesofindia.com/margherita-pizza-recipe/
                        </Text>

                        <Image 
                            source = {require('./images/image 2.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Peperroni Pizza
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.simplyrecipes.com/recipes/homemade_pepperoni_pizza/
                        </Text> 

                        
                        <Image 
                            source = {require('./images/image 3.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Corn Pizza
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://recipes.timesofindia.com/recipes/golden-corn-pizza/rs59863239.cms
                        </Text> 

                        <Image 
                            source = {require('./images/image 4.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Paneer Pizza
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://www.vegrecipesofindia.com/paneer-pizza-recipe/
                        </Text> 

                        <Image 
                            source = {require('./images/image 5.jpg')}
                            style = {{width: 150, height: 150, alignSelf: "center", marginTop: 20}} 
                        />
                        <Text style = {styles.text}>
                            Home Made Mushroom Pizza
                        </Text>
                        <Text style = {styles.text}>
                            Copy and Paste the link in a browser
                        </Text>
                        <Text style = {styles.text}>
                            https://damndelicious.net/2016/11/06/white-mushroom-pizza/
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
