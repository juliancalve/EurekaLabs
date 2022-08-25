import React from 'react'
import {ImagePickerResponse, launchCamera} from 'react-native-image-picker';

interface Props {
    onTakePicture: (e: ImagePickerResponse) => void
}

export const useCamera = ({ onTakePicture }: Props) => {

    const openCamera = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5,
        }, (resp: ImagePickerResponse) => {
            onTakePicture(resp);
        });
    }

  return [openCamera];
}