import { StyleSheet, View, Animated } from 'react-native'
import React from 'react'
import { WINDOW_WIDTH } from '../../utils'

interface Props {
    items: string[],
    animated: Animated.Value
}

const LinePagination: React.FC<Props> = ({ items, animated }) => {
    return (
        <View style={[styles.container,
        {
            width: items.length * 20,
            height: 5,
            backgroundColor: '#ffffff58',
        }]}>
            <Animated.View style={[styles.rectangle,
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

export default LinePagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '50%',
        alignSelf: 'center',
        zIndex: 3,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    rectangle: {
        width: 20,
        height: 5,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 4
    }
})