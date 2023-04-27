import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ListScreen = ({ navigation }: any) => {

    const navigateToPaginationScreen = () => {
        navigation.navigate('Pagination')
    }

    const navigateToNavigationScreen = () => {
        navigation.navigate('Navigation')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={navigateToPaginationScreen}>
                <Text style={styles.text}>Pagination Screen</Text>
                <MaterialIcons name='chevron-right' size={20} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={navigateToNavigationScreen}>
                <Text style={styles.text}>Navigation Screen</Text>
                <MaterialIcons name='chevron-right' size={20} color={'black'} />
            </TouchableOpacity>
            <StatusBar backgroundColor={'transparent'} translucent />
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
    }
})