import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/HomeScreen';
import { AppContext, appReducer, initialState } from './src/context/AppContext';

export default function App() {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <PaperProvider theme={theme}>
        <HomeScreen />
      </PaperProvider>
    </AppContext.Provider>
  );
}

const theme = {
  ...DefaultTheme,
};
