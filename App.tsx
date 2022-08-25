import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { PhotosProvider } from '@context';
import { AppNavigation } from '@navigations';

const App = () => {

  return (
    <PhotosProvider>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </PhotosProvider>
  )
}

export default App;