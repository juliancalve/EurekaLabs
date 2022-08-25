import React, { useEffect } from 'react'
import { PermissionStatus, Platform } from 'react-native';
import { check, PERMISSIONS, request } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export const useLocation: any = () => {

    const checkLocationPermission = async () => {

        let permissionStatus: PermissionStatus | any;

        if( Platform.OS === 'ios' ) {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

    }

    const getGeolocation = async () => {
        return new Promise( (res, rej) => {
            Geolocation.getCurrentPosition(
                (position) => {
                    const { coords } = position;
                    res(coords);
                },
                (error) => {
                  // See error code charts below.
                  rej({code: error.code, message: error.message});
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        });
    }

    useEffect(() => {
        checkLocationPermission();
    }, []);

  return [getGeolocation];
}