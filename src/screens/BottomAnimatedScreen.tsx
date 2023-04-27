import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
} from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import {
    BottomTabBarButtonProps,
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const BottomTab = createBottomTabNavigator()
const TABBAR_HEIEGHT = 60

interface ButtonTab {
    route: string,
    label: string,
    activeIcon: string,
    inActiveIcon: string,
    backgroundColor: string,
    badge?: number
}

const tabArr: ButtonTab[] = [
    {
        route: '1',
        label: 'Screen 1',
        activeIcon: 'lens',
        inActiveIcon: 'lens',
        backgroundColor: 'blue',
        badge: 0
    },
    {
        route: '2',
        label: 'Screen 2',
        activeIcon: 'basket',
        inActiveIcon: 'basket-outline',
        backgroundColor: 'yellow',
        badge: 1
    },
    {
        route: '3',
        label: 'Screen 3',
        activeIcon: 'view-dashboard',
        inActiveIcon: 'view-dashboard-outline',
        backgroundColor: 'red',
        badge: 1
    },
    {
        route: '4',
        label: 'Screen 4',
        activeIcon: 'happy',
        inActiveIcon: 'happy-outline',
        backgroundColor: 'pink',
        badge: 1
    },
]

interface TabBarButtonProps {
    buttonProps: BottomTabBarButtonProps,
    item: ButtonTab
}

const TabBarButton: React.FC<TabBarButtonProps> = (props) => {

    const { item } = props
    const { onPress, accessibilityState } = props.buttonProps
    const focused = accessibilityState?.selected

    const animated = useRef(new Animated.Value(0)).current

    const translateY = animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -16]
    })
    const scaleBg = animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    const scaleBtn = animated.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.2]
    })
    const opacity = animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    useEffect(() => {
        if (focused) {
            Animated.timing(animated, {
                duration: 300,
                toValue: 1,
                useNativeDriver: true,
            }).start()
        } else {
            Animated.timing(animated, {
                duration: 300,
                toValue: 0,
                useNativeDriver: true,
            }).start()
        }
    }, [focused])

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Animated.View
                style={{
                    backgroundColor: focused ? 'blue' : 'transparent',
                    position: 'absolute',
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    transform: [
                        { translateY },
                        { scale: scaleBg }
                    ],
                    opacity,
                }}
            />
            <Animated.View
                style={{
                    borderRadius: 40,
                    transform: [
                        { translateY },
                        { scale: scaleBtn }
                    ]
                }}>
                {(item.badge != 0 && !focused) && <View style={{
                    position: 'absolute',
                    borderRadius: 15,
                    backgroundColor: 'blue',
                    zIndex: 10,
                    width: 18,
                    height: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 0,
                    right: 0
                }}>
                    <Text style={{ color: 'white' }}>{item.badge}</Text>
                </View>}
                <TouchableOpacity activeOpacity={0} style={{ padding: 10 }} onPress={onPress}>
                    <MaterialIcons
                        name={focused ? item.activeIcon : item.inActiveIcon}
                        color={focused ? 'white' : 'blue'}
                        size={30}
                    />
                </TouchableOpacity>
            </Animated.View>
            <Animated.Text style={{
                color: 'blue',
                position: 'absolute',
                bottom: -15,
                fontWeight: '700',
                transform: [{
                    translateY
                }, { scale: scaleBg }],
                fontSize: 13
            }}>{item.label}</Animated.Text>
        </View>
    )
}

const BottomAnimatedScreen = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: TABBAR_HEIEGHT,
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                position: 'absolute',
                backgroundColor: 'white'
            }
        }}
        >
            {tabArr.map((item) => (
                <BottomTab.Screen
                    key={item.route}
                    name={item.route}
                    component={() => (
                        <View style={{
                            flex: 1,
                            backgroundColor: item.backgroundColor
                        }}>

                        </View>
                    )}
                    options={{
                        tabBarButton: (props) => (
                            <TabBarButton buttonProps={props} item={item} />
                        ),
                        tabBarShowLabel: false,
                    }}
                />
            ))}
        </BottomTab.Navigator>
    )
}

export default BottomAnimatedScreen

const styles = StyleSheet.create({})