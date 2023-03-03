import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation()


    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity,
                transform: [{
                    translateX: position
                }]
            }} />

            <View style={{ marginBottom: 20 }}>
                <Button
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