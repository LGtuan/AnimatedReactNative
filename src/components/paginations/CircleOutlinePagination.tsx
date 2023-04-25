import { StyleSheet, Animated, View } from 'react-native'
import React from 'react'
import { WINDOW_WIDTH } from '../../utils'

interface Props {
    items: string[],
    animated: Animated.Value
}

const CircleOutlinePagination: React.FC<Props> = ({ items, animated }) => {
    return (
        <View style={styles.container}>
            {
                items.map((item, index) => (
                    <View key={index} style={{ paddingHorizontal: 5 }}>
                        <Animated.View style={[styles.dot, {
                            opacity: animated.interpolate({
                                inputRange: [(index - 1) * WINDOW_WIDTH, index * WINDOW_WIDTH, (index + 1) * WINDOW_WIDTH],
                                outputRange: [0.4, 1, 0.4],
                                extrapolate: 'clamp'
                            })
                        }]} />
                    </View>
                ))
            }
            <Animated.View style={[styles.outline,
            {
                transform: [
                    {
                        translateX: animated.interpolate({
                            inputRange: [0, WINDOW_WIDTH * items.length],
                            outputRange: [0, 20 * items.length],
                            extrapolate: 'clamp'
                        })
                    }
                ]
            }]} />
        </View>
    )
}

export default CircleOutlinePagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '40%',
        alignSelf: 'center',
        zIndex: 5,
        flexDirection: 'row'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    outline: {
        borderColor: 'white',
        width: 20,
        height: 20,
        position: 'absolute',
        borderWidth: 1,
        borderRadius: 10,
        top: -5
    }
})