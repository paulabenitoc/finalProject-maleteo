import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot'; 
import '../../pages/Usuario/DialogStyles.css'

const theme = {
    background: '#fff',
    fontFamily: 'Noto Sans',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hola, muchas gracias por escoger mi hall para guardar tu maleta. Estaré encantada de cuidar de tu equipaje. Mi teléfono es 634723485.',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    end: true,
  },
];

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default ThemedExample;
