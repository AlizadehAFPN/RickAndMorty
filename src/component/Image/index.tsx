import * as React from 'react';
import {styles} from '../../Styles';
import {createImageProgress} from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import * as Progress from 'react-native-progress';
import {StyleProp} from 'react-native';
const Image = createImageProgress(FastImage);

export const RecipeImage = ({
  imageUrl,
  style,
}: {
  imageUrl: string;
  style?: StyleProp<any>;
}) => (
  <Image
    style={[styles.image, {...style}]}
    resizeMode="cover"
    indicator={Progress.Circle}
    source={{uri: imageUrl}}
  />
);
