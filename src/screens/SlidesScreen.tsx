import React, { useState, useRef } from 'react';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Dimensions, ImageSourcePropType, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';


// Utilizamos Dimensions para trabajar con el ancho de cada dispositivo
const { width: screenWidth } = Dimensions.get('window');


// Extraemos el navigation para la navegación del onPress
//NOTA: mejor solución para la navegación. Utilizamos todos desde los props
interface Props extends StackScreenProps<any, any> { };
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

export const SlidesScreen = ({ navigation }: Props) => {

  //state para volver a cargar el elemento con cada indicador en su posición
  const [activeIndex, setActiveIndex] = useState(0);

  //para navegar a la pagina del home
  // const { navigate } = useNavigation();

  //useAnimation: para generar la animación del botón entrar
  const { fadeIn, opacity } = useAnimation();

  //state para controlar cuando 'aparece' físicamente el botón.
  // Esto es para evitar que el usuario haga click en el botón que no esta visible 
  // y haga efecto su acción.
  // const [isVisible, setIsVisible] = useState(false);

  //3ra Solución para restringir el onPress
  // de esta forma el usuario no podrá dar click al elemento invisible.
  const isVisible = useRef(false);

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

        //onSnapToItem= nos permite extraer el valor (number)
        // de la posición actual del item.
        // lo utilizamos para mover el indicador de elementos
        // junto con un state que creamos para ir variando ese number.
        onSnapToItem={(index) => {
          setActiveIndex(index)
          //Condición para hacer aparecer el botón de entrar
          if (index === 2) {
            // setIsVisible(true);
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>
        <Pagination
          //dotsLength: sirve para indicar cuanto elementos tengo en mi slide
          dotsLength={items.length}

          //activeDotIndex: indicador del item actual del slide
          //AGREGAMOS:el state de los indicadores activos.
          activeDotIndex={activeIndex}

          //dotColor: cambia el color del indicador
          // dotColor="red"

          //dotStyle: agrega estilos al dot
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#5856D6'
          }}
        />

        <Animated.View style={{
          opacity
        }} >
          <TouchableOpacity style={styles.touchableBtn}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreens')
              }
            }}
          >
            <Text style={{ fontSize: 20, color: 'white' }}> Entrar</Text>
            <Icon
              name="chevron-forward-outline"
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView >
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
  },
  touchableBtn: {
    flexDirection: 'row',
    backgroundColor: '#5856d6',
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

{/* <View style={{ flex: 1 }} /> */ }
{/* {activeIndex === 2 && <TouchableOpacity style={{
          flexDirection: 'row',
          backgroundColor: '#5856d6',
          width: 140,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}
          activeOpacity={0.8}
          onPress={() => navigate('HomeScreens')}
        >
          <Text style={{ fontSize: 20, color: 'white' }}> Entrar</Text>
          <Icon
            name="chevron-forward-outline"
            color="white"
            size={30}
          />
        </TouchableOpacity>} */}
{/* {
          isVisible && (
            <Animated.View style={{
              opacity
            }} >
              <TouchableOpacity style={{
                flexDirection: 'row',
                backgroundColor: '#5856d6',
                width: 140,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
                activeOpacity={0.8}
                onPress={() => navigate('HomeScreens')}
              >
                <Text style={{ fontSize: 20, color: 'white' }}> Entrar</Text>
                <Icon
                  name="chevron-forward-outline"
                  color="white"
                  size={30}
                />
              </TouchableOpacity>
            </Animated.View>)
        } */}