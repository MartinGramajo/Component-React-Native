import React, { createContext, useReducer } from 'react';
import { themeReducer, ThemeState, LightTheme } from './themeReducer';


// 4- creamos la interface para saber que props tiene nuestro context
//interface para determinar como va a lucir nuestro context
// Contiene un theme y dos funciones para cambiar el theme.
interface ThemeContextProps {
  // Ahora que tenemos el reducer creado 
  // podemos definir el tipo del theme(asi lucirá nuestro state)
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}



// 1-Creamos el context 
// Tenemos que pasar como queremos que luzca nuestra info por parámetros, es decir , 
// como tienen que lucir todos los componentes de mi app.
export const ThemeContext = createContext({} as ThemeContextProps);


// 2-Creamos el provider
// jsx que va a PROVEER la info a cada uno de mi components 

export const ThemeProvider = ({ children }: any) => {
  // theme(el cual va a salir de nuestro reducer)
  const [theme, dispatch] = useReducer(themeReducer, LightTheme); //TODO: Leer el tema global...


  // creamos las funciones 
  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' })
    console.log('setDarkTheme')
  }

  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' })
    console.log('setLightTheme')
  }

  return (
    //3- Proveemos de los value del provider a nuestros Themecontext.
    <ThemeContext.Provider value={{
      // el theme 
      theme,
      // Ambas funciones la importamos en el value
      setDarkTheme,
      setLightTheme,

    }}>
      {children}
    </ThemeContext.Provider>

  )

}