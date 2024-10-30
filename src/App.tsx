import React, {createContext, useContext} from 'react';
import { AppRoutes } from './Routes';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/userPersistedState';
import { AppProvider, DashboardLayout } from '@toolpad/core';
import AppLogo from './components/Header/logoApp';
import { Home } from '@mui/icons-material';
import { FileDownload } from '@mui/icons-material'
import { Group } from '@mui/icons-material'


const ThemeContext = createContext({
  thema: light, 
  toggleTheme: () => {}
});



export const useTheme = () => {
  const context = useContext(ThemeContext)
  if(!context){
    throw new Error('erro ao pegar o context')
  }
  return context
}

const App: React.FC = () =>  {
    const [thema, setTheme] = usePersistedState<DefaultTheme>('theme', light) // thema = viewTheme, not styled theme

    const toggleTheme = () => { 
      setTheme(thema.title === 'light' ? dark : light)
    }

    return (  
      <AppProvider
      branding={{
        title: 'PDF Compress',
        logo: <AppLogo/>
      }}

      window={window}
      navigation={[
        {
          segment: 'home',
          title: 'Inicio',
          icon: <Home />,
        },
        {
          kind: 'divider'
        },
        {
          segment: 'compress',
          title: 'Comprimir',
          icon: <FileDownload />

        },
        {
          segment: 'about',
          title: 'Sobre',
          icon: < Group/>
        },
      ]}


      >
        <DashboardLayout>
          <ThemeProvider theme={thema}>
            <ThemeContext.Provider value={{ thema, toggleTheme }}>
                <AppRoutes />
              </ThemeContext.Provider>
          </ThemeProvider>
        </DashboardLayout>
      </AppProvider>
  );
}

export default App;
