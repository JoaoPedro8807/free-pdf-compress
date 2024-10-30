import React, {useState, createContext, useContext} from 'react';
import "@radix-ui/themes/styles.css";

interface ITheme{
    color: 'light' | 'dark' | 'inherit'
  }
  
  const ThemeContext = createContext<{
    theme: ITheme;
    setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
  } | undefined>(undefined);
  
  export const ThemeProvider: React.FC<{ children: React.ReactNode}> = ( { children } ) =>{
    const [theme, setTheme] = useState<ITheme>({color: 'dark'})
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    )
  }
  
  export const useTheme = () =>{
    const context = useContext(ThemeContext)
    if (!context){
      throw new Error('Não foi possível pegar o context')
    }
    return context
  }