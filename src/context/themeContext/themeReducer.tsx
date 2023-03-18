// Repaso, que es reducer?
// una function pura que recibe el state y
//recibe una acción y retorna algo del mismo state.

import { Theme } from "@react-navigation/native";



// type del action
// colocamos 2 actions: una para setear el light y la otra para el dark 
//NOTA: si en algún momento necesito re utilizar el código 
// con agregar una action podemos tener un un theme personalizado: 
// | { type: 'set_personal_theme'}
type ThemeAction =
  | { type: 'set_light_theme' }
  | { type: 'set_dark_theme' }


// Ahora, como luce mi state? 
// extendemos al Theme que nos proporciona "@react-navigation/native"
// Pero porque quiero extenderlo? Porque necesito poseer todas las propiedades 
// que tiene el Theme. Y adicionalmente colocar mis propiedades personalizadas 
// por ejemplo: el dividerColor
export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark',
  btn: 'red' | '#5856D6',
  input: 'white'
  dividerColor: string;
}

// Creamos el lightTheme definiendo todos los colores que va a tener nuestra app
export const LightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  btn: '#5856D6',
  input: 'white',
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
}

// Creamos el DarkTheme definiendo todos los colores que va a tener nuestra app
export const DarkTheme: ThemeState = {
  currentTheme: 'dark',
  btn: 'red',
  dark: true,
  input: 'white',
  dividerColor: 'white',
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
}
// agregamos que el state y el tipo de mi reducer sean de ThemeState
export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

  // Evaluación switch 
  // para determinar que action se aplicara según el caso 
  switch (action.type) {
    case 'set_light_theme':
      return { ...LightTheme }

    case 'set_dark_theme':
      return { ...DarkTheme }
    default:
      return state;
  }
}