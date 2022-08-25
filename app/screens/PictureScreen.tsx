import React, { useContext } from 'react'
import { Image, View, Share } from 'react-native'
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { Button, Card } from '@components';
import { PhotosContext } from '@context';
import { PATHS } from '@constants';

const PictureScreen = ({ route }: any) => {

  const navigator: any = useNavigation();
  const { removePhoto } = useContext( PhotosContext );
  const photo = route.params.photo;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Share your Photos with your friends !!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
    }
  };

  const onRemovePhoto = () => {
    removePhoto(photo);
    navigator.navigate(PATHS.GALLERY);
  }

  return (
    <View style={{ flex: 1, padding: 20,
      height: 100, justifyContent: 'space-between' }}>
      <Card>
          <Image source={{ uri: photo.uri }} style={{ width: '80%', height: '80%' }}/>
          <View style={{ marginTop: 10 }}>
            <Text>Altitude: {photo.altitude}</Text>
            <Text>Longitude: {photo.longitude}</Text>
            <Text>Latitude: {photo.latitude}</Text>
          </View>
      </Card>
        <Button mode='outlined' title='Remove Photo' onPress={onRemovePhoto}/>
        <Button style={{ marginBottom: 5, marginTop: 5 }} title='Share Photo' onPress={onShare}/>
    </View>
  )
}

export default PictureScreen