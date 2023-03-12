import { useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimation = () => {
    // ANIMATED API para hacer animation.
    // Nota: no todas las propiedades son animables.
    // Se encierran en <Animated.view>.
    const opacity = useRef(new Animated.Value(0)).current;

    // creamos otro useRef para la animacion easing-bounce. 
    // esta tendra por valor 'position'. 
    const position = useRef(new Animated.Value(0)).current;

    // en el fadeIn podemos mandar por argumento la duración 
    // con la cual se va a producir el fadeIn.
    // Esto nos permitirá en donde usemos nuestro custom hook
    // enviarle nosotros que tiempo o duración queremos para la animación
    // ejemplo como lo utilizamos en el component <FadeInImage />
    const fadeIn = (duration: number = 300) => {
        // Posee 2 argumentos:
        // Timing function: dispara una animación por tiempo.
        Animated.timing(
            opacity,
            // Timing Animation configuration 
            {
                toValue: 1,
                duration,
                useNativeDriver: true,
            }
            // .start() para que la animación empiece. 
            // .start( recibe un callback como argumento es opcional)
            // el endCallback es una function que se dispara 
            // cuando termine la animación.
            // ejemplo el log que dice "animación termino".
            // ).start(() => console.log('animación termino'));
        ).start();


    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();
    }

    const startMovingPosition = (initPosition: number, duration: number = 300) => {
        // value initial position 
        position.setValue(initPosition);

        // Easing - Bounce Animation 
        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // animation easing Bounce
                // se puede pasar por parametro las veces del rebote: Easing.bounce(5)
                // easing: Easing.bounce
                // Easing importamos de react-native.
            }
        ).start();

    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition,
    }
}
