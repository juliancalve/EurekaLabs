import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface Props {
    onTakePicture: any
}

export const useCamera: any = ({ onTakePicture }: any) => {

    const openCamera = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5,
        }, (resp) => {
            onTakePicture(resp);
        });
    }

  return [openCamera];
}