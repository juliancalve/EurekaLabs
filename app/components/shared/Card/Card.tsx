import React from 'react'
import { Card as NativeCard } from 'react-native-paper';
import { CardProps } from '@interfaces';
import { Button } from '@components';
import { SIZES } from '@constants';

const MapSize = {
  [SIZES.SM]: { width: 110, borderRadius: 3, margin: 2 },
  [SIZES.LG]: { flex: 1 }
  }

const Card: React.FC<CardProps> = ({ children, title, subtitle, cancelButton, acceptButton, onPress, size = SIZES.LG }) => {
  return (
    <NativeCard style={MapSize[size]} onPress={onPress}>
      { (title || subtitle) && <NativeCard.Title title={title} subtitle={subtitle} />}
      <NativeCard.Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
        {children}
      </NativeCard.Content>
      { (cancelButton || acceptButton) && <NativeCard.Actions>
        {cancelButton?.title && <Button title={cancelButton.title} onPress={cancelButton.onPress}/>}
        {acceptButton?.title && <Button title={acceptButton.title} onPress={acceptButton.onPress}/>}
      </NativeCard.Actions>}
    </NativeCard>
  )
}

export default Card;