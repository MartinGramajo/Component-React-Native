import React, { useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  //state inicial de elementos para mostrar en nuestro infinite scroll.
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])


  // function para cargar mas elementos
  const loadMore = () => {
    const newArray: number[] = [];
    // bucle for en el cual vamos incrementando en +1 nuestro array
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    // function de tiempo 
    // esto nos permite esperar 1.5 (segundo y medio)
    // para visualizar la siguiente carga de imagenes.
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  }

  // Function para renderizar los elementos del scroll.
  // Para renderizar imagenes utilizamos esta api (banco de imagenes )
  // https://picsum.photos/

  const renderItem = (item: number) => {
    return (
      <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />

    );
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
    //   style={{
    //     width: '100%',
    //     height: 400
    //   }}
    // />
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        renderItem={({ item }) => renderItem(item)}
        //Function importante 
        // cuando llegamos a la unidad que indicamos en la function onEndReachedThreshold={}
        // se va a dispara esta function.
        onEndReached={loadMore}

        //es opcional pero es importante 
        // con esta function nos permite aclarar 
        // que tanto espacio desde el fondo (en unidades) nosotros ocupamos, 
        // en donde el 0.5 es la mitad del punto de vista, usualmente esta unidad, 
        // se la utiliza para disparar la función onEndReached().
        onEndReachedThreshold={0.5}

        //Footer de carga 
        // La linea de abajo del listfooterComponent 
        // nos permite retornar el spinner de carga o de actividad 
        // pero esta pegado para estilizar usaremos lo mismo pero retonarnando un jsx. 
        // ListFooterComponent={<ActivityIndicator size={20} color='#5856D6' />}
        ListFooterComponent={() => (
          <View style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ActivityIndicator size={50} color='#5856D6' />
          </View>
        )}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   textItem: {
//     backgroundColor: 'green',
//     height: 150,
//   },
// });