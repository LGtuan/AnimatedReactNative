import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ListScreen = ({ navigation }: any) => {

    const navigateToPaginationScreen = () => {
        navigation.navigate('Pagination')
    }

    return (
        <View>
            <TouchableOpacity onPress={navigateToPaginationScreen}>
                <Text>Pagination Screen</Text>
            </TouchableOpacity>
            <StatusBar backgroundColor={'transparent'} translucent />
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({})