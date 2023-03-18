// orden del import 
//1- react 
import React, { useContext } from 'react';

//2- dependencias 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//3- context
import { ThemeContext } from '../context/themeContext/ThemeContext';

//4- Screens ordenados alfabéticamente
import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { HomeScreens } from '../screens/HomeScreens';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';


const Stack = createStackNavigator();

export const Navigator = () => {
    // usamos el context para dar traer nuestro themeContext
    // y poder darle color a distintas parte de nuestra app
    const { theme } = useContext(ThemeContext)


    return (
        <NavigationContainer
            // Utilizamos la const customTheme
            theme={theme}
        >
            <Stack.Navigator screenOptions={{
                headerShown: false,
                // Podemos modificar el style de nuestra app 
                // cardStyle: {
                //     backgroundColor: 'white',
                // }

            }}>
                <Stack.Screen name="HomeScreens" component={HomeScreens} />
                <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
                <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
                <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                <Stack.Screen name="AlertScreen" component={AlertScreen} />
                <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
                <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
                <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
                <Stack.Screen name="ModalScreen" component={ModalScreen} />
                <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
                <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}