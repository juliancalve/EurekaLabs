import React, { useContext } from 'react'
import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useCamera, useLocation } from '@hooks';
import { Button, Card, NoPhotos } from '@components';
import { PhotosContext } from '@context';
import { Photo } from '@interfaces';
import { PATHS, SIZES } from '@constants';

const GalleryScreen = () => {

  const navigator: any = useNavigation();
  const { photos, addPhoto } = useContext( PhotosContext );
  const [getGeolocation] = useLocation();
  const [openCamera] = useCamera({
    onTakePicture: async (data: any) => {
      const ph = data?.assets?.[0];
      if(ph) {
        const location = await getGeolocation();
        const { latitude, longitude, altitude } = location;
        addPhoto({uri: ph.uri, latitude, longitude, altitude})
      }
    }});

  return (
    <View style={{
      flex: 1,
      padding: 20,
      height: 100,
      justifyContent: 'space-between',
    }}>
      {photos.length > 0 ?<View style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>

        { photos.map( (photo: Photo, index) => <Card key={index} size={SIZES.SM} onPress={() => navigator.navigate(PATHS.PICTURE, {
          photo
        })}>
          <Image source={{uri: photo.uri}} style={{ height: 100, width: 100, borderRadius: 1 }}/>
        </Card>)}       
      </View> : <NoPhotos />}
      <Button title='Take Picture' onPress={openCamera} />
    </View>
  )
}

export default GalleryScreen;