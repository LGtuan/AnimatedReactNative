import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WINDOW_WIDTH } from '../../utils'

interface Props {
    items: string[],
    animated: Animated.Value
}

const CirclePagination: React.FC<Props> = ({ items, animated }) => {



    return (
        <View style={styles.container}>
            {
                items.map((item, index) => (
                    <View
                        key={index}
                        style={{ paddingHorizontal: 5 }}>
                        <Animated.View
                            style={[styles.dot,
                            {
                                transform: [
                                    {
                                        scaleX: animated.interpolate({
                                            inputRange: [(index - 1) * WINDOW_WIDTH, index * WINDOW_WIDTH, (index + 1) * WINDOW_WIDTH],
                                            outputRange: [1, 1.9, 1],
                                            extrapolate: 'clamp'
                                        })
                                    }
                                ],
                                opacity: animated.interpolate({
                                    inputRange: [(index - 1) * WINDOW_WIDTH, index * WINDOW_WIDTH, (index + 1) * WINDOW_WIDTH],
                                    outputRange: [0.4, 1, 0.4],
                                    extrapolate: 'clamp'
                                })
                            }]} />
                    </View>
                ))
            }
        </View>
    )
}

export default CirclePagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '60%',
        alignSelf: 'center',
        zIndex: 5,
        flexDirection: 'row'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    }
})