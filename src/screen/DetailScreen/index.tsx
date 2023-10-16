import React from 'react';
import {Screen} from '../../component/screen/screen';
import {RecipeImage} from '../../component/Image';
import {Character, RootDetailParamList} from '../../Interface';
import {detailProperties} from '../../Constant';
import {ItemProperty} from '../../component/characterDetail';
import {Row} from '../../component/row/row';
import {useDispatch, useSelector} from 'react-redux';
import {changeLike} from '../../redux/liked-slice';
import {updateLikedData} from '../../redux/search-slice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RootState} from '../../redux/store';
import {styles} from '../../Styles';

export const DetailScreen = ({route}: {route: RootDetailParamList}) => {
  const item: Character = route.params.param;
  const dispatch = useDispatch();
  const liked = useSelector((state: RootState) => state.liked);

  const handleLikeClick = (id: number) => {
    dispatch(changeLike(id));
    dispatch(updateLikedData(id));
  };

  return (
    <Screen withoutScroll style={styles.detailScreenPadding}>
      <Row style={styles.rowDetailScreen}>
        <RecipeImage imageUrl={item.image} style={styles.imgDetailScreen} />
        <AntDesign
          onPress={() => handleLikeClick(item?.id)}
          name={
            liked.findIndex(item1 => item1 === item.id) > -1 ? 'star' : 'staro'
          }
          size={40}
          color="#CC0000"
        />
      </Row>

      {item &&
        detailProperties(item).map((property, index) => (
          <ItemProperty
            style={styles.txtDetailScreen}
            key={index}
            label={property.label}
            value={property.value}
          />
        ))}
    </Screen>
  );
};
