import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/HomeScreens';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="HomeScreens" component={HomeScreens} />
        </Stack.Navigator>
    );
}