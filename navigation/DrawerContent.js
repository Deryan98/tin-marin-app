import React from 'react'
import { StyleSheet } from 'react-native'
import {DrawerContentScrollView} from "@react-navigation/drawer"
import {Drawer, Avatar} from "react-native-paper"


const DrawerContent = (props) => {
    const {navigation} = props
    
    return (
        <DrawerContentScrollView style={styles.drawer}>
            <Drawer.Section style={styles.image}>
                <Avatar.Image backgroundColor={"#4E73DF"} size={100}  source={require('../assets/logo.gif')}/>
            </Drawer.Section>
            <Drawer.Section >
                <Drawer.Item
                    style={styles.second}
                    label="Menu Principal"
                    onPress={()=> navigation.navigate("home")}
                    icon="home"
                />
                <Drawer.Item
                    label="Exhibiciones"
                    onPress={()=> navigation.navigate("exhibits")}
                    icon="camera"
                />
                <Drawer.Item
                    label="Eventos"
                    onPress={()=> navigation.navigate("events")}
                    icon="gift"
                    
                />
                <Drawer.Item
                    label="Recomendaciones Covid-19"
                    onPress={()=> navigation.navigate("covid")}
                    icon="check"
                />
                <Drawer.Item
                    label="Informacion de contacto"
                    onPress={()=> navigation.navigate("contact")}
                    icon="phone"
                />
                <Drawer.Item
                    label="Sugerencias"
                    onPress={()=> navigation.navigate("comments")}
                    icon="mail"
                />
                <Drawer.Item
                    label="Donaciones"
                    onPress={()=> navigation.navigate("donations")}
                    icon="heart"
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        alignItems: "center",
        backgroundColor: "#4E73DF"
    },
    second:{
        color: "#fff",
    },
    drawer:{
        backgroundColor: "#4E73DF"
    }
})



export default DrawerContent
