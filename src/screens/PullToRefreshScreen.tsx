import React, { useState } from 'react';
import { View, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle, styles } from '../components/HeaderTitle';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  // este elemento funciona para : 
  // scrollview: carga todo con el component.
  // flatlist : carga lenta o perezosa con el component.

  // const { top } = useSafeAreaInsets();

  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState<string>();

  // Método para cargar el refresh
  const onRefresh = React.useCallback(() => {
    // state para comenzar la carga.
    setRefreshing(true);
    // tiempo en el que se va a ejecutar el refresh.
    setTimeout(() => {
      console.log('Terminamos')
      setRefreshing(false);
      // Terminado el refresh podemos mostrar data 
      setData('Hola Mundo')
    }, 2000);
  }, []);

  return (
    <ScrollView
      // estilizar el scrollview: 
      // style={{
      //   marginTop: refreshing ? top : 0
      // }}
      // la usamos para dejar el spinner refresh bien ubicado en ios
      // contentContainerStyle={{ marginTop: refreshing ? top : 0 }}
      // La magia del Refresh se produce por esta propiedad refreshControl={}
      // necesita 2 argumentos:
      // 1-refreshing
      // 2-método onRefresh (cuando se hace el refresh, método para cargar los datos)
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          // En que parte de la pantalla aparece el spinner refresh. 
          // ya resuelve el problema en ambas plataformas.
          progressViewOffset={10}
          // Propiedades solo android
          // background color del spinner refresh
          progressBackgroundColor="#5856D6"
          // manejo de colores del spinner refresh
          colors={['white', 'black', 'white', 'black']}

          // Propiedades IOS
          //backgroundColor
          style={{ backgroundColor: '#5856D6' }}
          //tintColor del spinner refresh
          tintColor="white"
          // titulo debajo del spinner refresh
          title="refreshing"
          // color del texto del titulo
          titleColor="white"
        />

      }>

      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {
          data && <HeaderTitle title={data} />
        }

      </View>
    </ScrollView>


  );
};

// const refreshScreen = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });