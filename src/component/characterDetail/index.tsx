import * as React from 'react';
import {styles} from '../../Styles';
import {Text} from '../../component/text/text';
import {StyleProp, TextStyle} from 'react-native';

interface MyCharacterProps {
  style?: StyleProp<TextStyle>;
  label: string;
  value: string;
}

export const ItemProperty: React.FC<MyCharacterProps> = ({
  label,
  value,
  style,
}) => {
  return (
    <Text style={style}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </Text>
  );
};
