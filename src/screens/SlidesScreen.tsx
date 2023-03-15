import React from 'react';

import Carousel from 'react-native-snap-carousel';


import { HeaderTitle } from '../components/HeaderTitle'
import { Dimensions, ImageSourcePropType, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native';

// Utilizamos Dimensions para trabajar con el ancho de cada dispositivo

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  },
]

export const SlidesScreen = () => {

  //Function para renderizar cada uno de los items
  const renderItem = (item: Slide) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center'
      }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            //para centrar las imagenes
            resizeMode: 'center'
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    )
  }

  return (
    //Utilizamos el safeareaview para protegernos del notch
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50
      }}
    >
      <Carousel
        // ref: es para hacer el carousel automático.
        // ref={(c) => { this._carousel = c; }}

        // data: mandamos nuestro arreglo de items.
        data={items}

        //renderItem: nos permite crear un jsx para personalizar 
        // el estilo de cada item de la data.
        renderItem={({ item }: any) => renderItem(item)}

        //sliderWidth= ancho del slider
        sliderWidth={screenWidth}

        //Itemwidth= ancho de cada uno de los items del slider
        itemWidth={screenWidth}

        //layout= lo dejamos en default.
        layout="default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6'
  },
  subTitle: {
    fontSize: 16,
  }
});