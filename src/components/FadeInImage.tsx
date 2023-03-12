import React, { useState } from 'react'
import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
}

export const FadeInImage = ({ uri }: Props) => {
  // Hook useAnimation()
  const { opacity, fadeIn } = useAnimation();

  //State para utilizar un activity indicator
  const [isLoading, setIsLoading] = useState(true);

  // finish loading
  // para romper el loading.
  const finishLoading = () => {
    fadeIn();
    setIsLoading(false);
  };

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Preguntamos la condición */}
      {
        isLoading && <ActivityIndicator style={{ position: 'absolute' }} size={30} color='#5856D6' />
      }
      <Animated.Image
        source={{ uri }}
        // metodo de las imagenes
        // onloadEnd nos permite agregar efecto o controlar que pasara
        // una vez termine de cargarse la imagen
        // en este caso la utilizamos para pasar nuestro fadeIn
        // NOTA: el parámetro 2000 del fadeIn(2000) es el tiempo 
        // que se producirá el efecto gracias a la modificación 
        // que hicimos en pasar por parámetro la duración. 
        onLoadEnd={finishLoading}
        style={{
          width: '100%',
          height: 400,
          opacity
        }}
      />

    </View>
  );
};
