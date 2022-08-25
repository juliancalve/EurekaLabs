import React, { useState, createContext } from 'react'
import { Photo } from '@interfaces';

export interface PhotoContextProps {
    photos: Photo[];
    addPhoto: (newPhoto: Photo) => void;
    removePhoto: (removePhoto: Photo) => void;
}

export const PhotosContext = createContext({} as PhotoContextProps );

export const PhotosProvider = ({ children }: { children: JSX.Element }) => {

    const [photos, setPhotos] = useState<Photo[]>([]);
    
    const addPhoto = (newPhoto: Photo) => {
        const currentPhotos = [...photos];
        currentPhotos.push(newPhoto);
        setPhotos(currentPhotos)
    };
    const removePhoto = (photoToRemove: Photo) => {
        const auxPhotos = [...photos];
        auxPhotos.splice(auxPhotos.indexOf(photoToRemove), 1);
        setPhotos(auxPhotos);
    };

    return (
        <PhotosContext.Provider value={{
            photos,
            addPhoto,
            removePhoto,
        }}>
            {children}
        </PhotosContext.Provider>
    )
}