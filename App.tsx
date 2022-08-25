import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen'
import { PhotosProvider } from '@context';
import { AppNavigation } from '@navigations';

const App = () => {

  useEffect(() => {

      SplashScreen.hide();
  }, [])
  return (
    <PhotosProvider>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </PhotosProvider>
  )
}

export default App;