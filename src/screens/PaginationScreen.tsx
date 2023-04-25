import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../utils'
import { CircleOutlinePagination, CirclePagination } from '../components'
import LinePagination from '../components/paginations/LinePagination'

let data = [
    '#2bca2b',
    '#3636cd',
    '#e09f26',
    'brown',
    '#ef516c',
    '#15c7c7',
    '#d52626',
    'purple']

const PaginationScreen = () => {

    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={data}
                pagingEnabled
                horizontal
                renderItem={({ item, index }) => (
                    <View style={{
                        backgroundColor: item,
                        width: WINDOW_WIDTH,
                        height: WINDOW_HEIGHT
                    }} />
                )}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }], { useNativeDriver: true }
                )}
            />
            <CircleOutlinePagination items={data} animated={scrollX} />
            <CirclePagination items={data} animated={scrollX} />
            <LinePagination items={data} animated={scrollX} />
        </View>
    )
}

export default PaginationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})