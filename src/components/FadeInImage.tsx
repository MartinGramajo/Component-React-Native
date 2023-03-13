import React, { useState } from 'react'

import { ActivityIndicator, Animated, StyleProp, View, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

//Enviar estilos desde el padre al hijo
// 1- agregar en la interface style? como objecto.
// 2- tenemos que esparcir el style en el elemento donde la usaremos 
// en este caso en el animated.image.
// 3- en el infiniteScroll Component en el fadeInImage agregamos el style width y height 
// Pero sucede un problema no me deja o no me aparecen otras propiedades para agregar a la imagen 
// Esto se debe al tipado por ello debemos cambiar: 
// style?: Object por esto style?: Object; style?: StyleProp<ImageStyle>
// lo sacamos al tipado dejando el cursor encima de style del component image en infinite Scroll.
// 4- ...style nos tira un error porque es un object y no podemos esparcirlo 
// para solucionarlo agregamos un as any.
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({ uri, style }: Props) => {
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
          ...style as any,
          // width: '100%',
          // height: 400,
          opacity
        }}
      />

    </View>
  );
};
