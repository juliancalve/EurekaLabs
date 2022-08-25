export interface Photo {
    uri: string;
    altitude: string;
    latitude: string;
    longitude: string;
}

export interface ButtonProps {
    title: string;
    onPress: any;
    mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
    style?: any
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