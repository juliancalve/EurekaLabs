import React from 'react';
import { Button as NativeButton } from 'react-native-paper';
import { ButtonProps } from '@interfaces';

const Button: React.FC<ButtonProps> = ({ title, onPress, mode = 'contained', style }) =>
(<NativeButton style={style} mode={mode} onPress={onPress}>{title}</NativeButton>)

export default Button;