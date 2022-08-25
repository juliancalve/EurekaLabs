import { CSSProperties } from "react";

export interface Photo {
    uri: string | undefined;
    altitude: number | null;
    latitude: number;
    longitude: number;
}

export interface ButtonProps {
    title: string;
    onPress: () => void;
    mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
    style?: CSSProperties
}

export interface CardProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    cancelButton?: {
        title: string;
        onPress: () => void
    };
    acceptButton?: {
        title: string;
        onPress: () => void
    },
    onPress?: () => void,
    size?: string
}