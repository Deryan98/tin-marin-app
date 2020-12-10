import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import { StyleSheet, Text, View } from 'react-native'
import {IconButton} from "react-native-paper";

//Screens
import HomeScreen from "../screens/HomeScreen"
import ExhibitsScrn from '../screens/ExhibitsScreen';
import EventsScreen from "../screens/EventsScreen";
import CovidScreen from "../screens/CovidScreen";
import ContactScreen from "../screens/ContactScreen";
import SugerenceScreen from "../screens/SugerenceScreen";
import DonationScreen from "../screens/DonationScreen"


const Stack = createStackNavigator();
export default function StackNavigation (props){
    const {navigation} = props
    const buttonLeft = () =>{
        return (
            <IconButton
                icon="menu"
                onPress={()=>navigation.openDrawer()}
            />
        )
       
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: '',
                    headerLeft: ()=> buttonLeft(),
                    
                }}
            />
            <Stack.Screen
                name="exhibits"
                component={ExhibitsScrn}
                options={{
                    title: '',
                    headerLeft: ()=> buttonLeft()
                }}
            />
            <Stack.Screen
                name="events"
                component={EventsScreen}
                options={{
                    title: '',
                    headerLeft: ()=> buttonLeft()
                }}
            />
            <Stack.Screen
                name="covid"
                component={CovidScreen}
                options={{
                    title: '',
                    headerLeft: ()=> buttonLeft()
                }}
            />
            <Stack.Screen
                name="contact"
                component={ContactScreen}
                options={{
                    title: '',
                    headerLeft: ()=> buttonLeft()
                }}
            />
            <Stack.Screen
                name="comments"
                component={SugerenceScreen}
                options={{
                    title: '',
                    headerLeft: ()=> buttonLeft()
                }}
            />
            <Stack.Screen
                name="donations"
                component={DonationScreen}
                options={{
                    title: '',
                    headerLeft: ()=> buttonLeft()
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    
})
