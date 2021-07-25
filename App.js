import React from 'react'
import { View, Text, SafeAreaView, StyleSheet,Image ,TouchableOpacity} from 'react-native'
import Button from './src/components/Button';
export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <View style = {{marginTop: 40, marginHorizontal: 24}}>
          
          <View style = {styles.menu}>
          <Image source = {require("./assets/menu.png")} style = {{height: 30, width:30, tintColor: "white"}} />
          <Image source = {require("./assets/menu.png")} style = {{height: 30, width:30, tintColor: "white"}}/>
          </View>

          <View style = {styles.titleContainer}>
            <View>
              <Text style = {styles.titles}>COVID 19</Text>
            </View>

            <TouchableOpacity style = {styles.countryButton}>
              <View style = {styles.countryButtonWrapper}>
                <Image source = {require("./assets/menu.png")} style = {{height: 30, width:30, tintColor: "black",  }} />
                <Text style = {styles.USA}>USA</Text>
                <Image source = {require("./assets/menu.png")} style = {{height: 30, width:30, tintColor: "black"}} />
              </View>
            </TouchableOpacity>

          </View>

          <View style ={{marginTop: 40}}>
              <Text 
              style={{
                color:"white",
                fontSize:20,

              }}>
              Are You Feeling Sick
              </Text>
              <Text
              style={{
                color:"white",
                fontSize:14,
                marginTop:12,
                lineHeight:18,
              }}>
              IF you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.

              </Text>
              <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-around"}}>
                  <Button 
                  icon={require("./assets/menu.png")} 
                  title ="Call Now"
                  backgroundColor = "#FF4D58"  
                  />
                  <Button 
                  icon= {require("./assets/menu.png")}
                  title = "Send SMS" 
                  backgroundColor = "#4D79FF"/>
              </View>
          </View>
       
        </View>
      </View>
      <View style = {{padding:20}}>
          <Text style = {{fontSize: 20, color: "black", }}>Prevention</Text>
          <View style = {{flexDirection:"row", justifyContent:"space-evenly"}}>
            <View style = {styles.prevention}>
              <Image style = {{width:60, height:60, }} source= {require("./assets/menu.png")}/>
              <Text>Avoid close contact</Text>
            </View>
            <View style = {styles.prevention}>
              <Image style = {{width:60, height:60, }} source= {require("./assets/menu.png")}/>
              <Text>Clean your hand often</Text>
            </View>
            <View style = {styles.prevention}>
              <Image style = {{width:60, height:60, }} source= {require("./assets/menu.png")}/>
              <Text>Wear a mask</Text>
            </View>
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1
  },

  header:{
    backgroundColor: "#473F97",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius : 40,
   
  },

  menu:{
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  titles:{
    fontSize: 24,
    lineHeight:26,
    color: "white",
  },

  countryButton:{
    height: 40,
    width: 116,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 50,
  },

  countryButtonWrapper:{
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },

  USA: {
    fontSize:14,
    lineHeight:15,
    marginRight: 8,
    marginLeft:8,
  },

  prevention:{
    flexDirection: "column",
    justifyContent:"space-between",
    alignItems:"center",

  }

});
