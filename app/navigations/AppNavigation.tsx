
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GalleryScreen, PictureScreen } from '@screens';
import { PATHS } from '@constants';

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerStyle: {
              elevation: 0,
            },
            cardStyle: {
              backgroundColor: 'white',
            },
            headerTitleAlign: 'center'
          }}
          initialRouteName='Gallery'>
            <Stack.Screen name={PATHS.GALLERY} component={GalleryScreen} />
            <Stack.Screen name={PATHS.PICTURE} component={PictureScreen} />
          </Stack.Navigator>

      </NavigationContainer>
      );
}