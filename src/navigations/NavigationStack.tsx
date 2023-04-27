import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ListScreen, NavigationScreen, PaginationScreen } from '../screens'
import BottomAnimatedScreen from '../screens/BottomAnimatedScreen'

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='BottmNavigation' component={BottomAnimatedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack

const styles = StyleSheet.create({})