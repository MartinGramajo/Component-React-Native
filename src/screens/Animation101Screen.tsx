import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation()

    const { theme: { colors, btn } } = useContext(ThemeContext)

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                marginBottom: 20,
                opacity,
                transform: [{
                    translateX: position
                }]
            }} />

            <View style={{ marginBottom: 20 }}>
                <Button
                    color={btn}
                    title='fadeIn'
                    // De esta forma llamamos varias funciones
                    onPress={() => {
                        fadeIn();
                        startMovingPosition(100, 700);
                    }}
                />
            </View>

            <View >
                <Button
                    color={btn}
                    title='fadOut'
                    onPress={fadeOut}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    },
});