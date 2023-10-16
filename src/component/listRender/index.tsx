import * as React from 'react';
import {MyRenderItemProps} from '../../Interface';
import {TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RecipeImage} from '../Image';
import {itemProperties} from '../../Constant';
import {ItemProperty} from '../characterDetail';
import {StyleSheet} from 'react-native';
import {styles} from '../../Styles';
export const MyRenderItem = ({item, type, onPress}: MyRenderItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        type === 'grid' ? stylesInternal.cardGrid : stylesInternal.cardList
      }>
      <View
        style={
          type === 'grid'
            ? stylesInternal.imageContainerGrid
            : stylesInternal.imageContainerList
        }>
        <RecipeImage imageUrl={item?.image} style={styles.image} />
        {type === 'grid' && (
          <AntDesign
            name={item?.isLiked ? 'star' : 'staro'}
            size={18}
            color="#CC0000"
          />
        )}
      </View>
      <View style={stylesInternal.textContainer}>
        {item &&
          itemProperties(item).map((property, index) => (
            <ItemProperty
              key={index}
              label={property.label}
              value={property.value}
            />
          ))}
      </View>
      {type !== 'grid' && (
        <AntDesign
          name={item?.isLiked ? 'star' : 'staro'}
          size={18}
          color="#CC0000"
        />
      )}
    </TouchableOpacity>
  );
};

const stylesInternal = StyleSheet.create({
  cardList: {
    borderRadius: 8,
    margin: 8, // Adjust spacing
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardGrid: {
    borderRadius: 8,
    margin: 8, // Adjust spacing
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '95%', // Adjust item width
  },
  imageContainerGrid: {
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
  },
  imageContainerList: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: 8, // Adjust spacing
  },
});
