import React from 'react'
import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50,
        paddingHorizontal: 25,
        marginVertical: 25,
    },
    btnText:{
        fontSize:16,
        color: "white",
        marginLeft: 8,
    },
    btnImg:{
        height: 30,
        width: 30,
    }
})

export default function Button({icon,title,backgroundColor}) {
    return (
        <TouchableOpacity style = {[styles.container,{backgroundColor}]}>
            <Image style={styles.btnImg} source={icon} />
            <Text style = {styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}
