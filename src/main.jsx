import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from './Translations/es/global.json'
import global_en from './Translations/en/global.json'
import theme from './Theme/theme.js'

i18next.init({
  interpolation:{ escapeValue: false},
  lng:"EN",
  resources:{
    ES:{
      global: global_es
     },
    EN:{
      global: global_en
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <I18nextProvider i18n={i18next}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
         <App />
    </I18nextProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
