import { useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {

  const [state, setState] = useState(initState);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setState({
      ...state,
      [field]: value
    });
  }

  return {
    ...state,
    form: state,
    onChange,
  }

}

// soluciones al value en el component
// const onChange= (value: string | boolean, field: keyof T)
// agregar al onChange={(value :any) => onChange(value, 'isSubscribed')}
// la solución presente que la de clase.
