import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ListScreen, NavigationScreen, PaginationScreen } from '../screens'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {



    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='List' component={ListScreen} />
                <Stack.Screen
                    name='Pagination'
                    component={PaginationScreen}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false
                    }} />
                <Stack.Screen
                    name='Navigation'
                    component={NavigationScreen}
                    options={{
                        animation: 'slide_from_right',
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})