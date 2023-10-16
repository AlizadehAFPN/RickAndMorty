import React, {useRef, useState} from 'react';
import {useInfiniteQuery} from 'react-query';
import {testFinByte} from '../../services';
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {Character, ListScreenProps, listStateProps} from '../../Interface';
import {baseURL} from '../../services/axiosConfig';
import {Screen} from '../../component/screen/screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {updateListData} from '../../redux/search-slice';
import {RootState} from '../../redux/store';
import DropDownPicker from 'react-native-dropdown-picker';
import {dropDownOptions} from '../../Constant';
import {MyRenderItem} from '../../component/listRender';
import {colors} from '../../Styles/colors';
import {styles} from '../../Styles';

const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {listData} = useSelector((state: RootState) => state.search);
  const liked = useSelector((state: RootState) => state.liked);
  const flashListRef = useRef<FlashList<Character> | null>(null);
  const [listState, setListState] = useState<listStateProps>({
    open: false,
    showingMode: 'list',
    searchQuery: '',
  });
  const [status, setStatus] = useState<string>('');

  const {fetchNextPage, isFetchingNextPage, hasNextPage} = useInfiniteQuery(
    ['getCharacter', listState.searchQuery, status],
    ({pageParam = baseURL}) =>
      testFinByte(pageParam, listState.searchQuery, status),
    {
      retry: false,
      getNextPageParam: lastPage => lastPage.info.next,
      onError: (error: any) => {
        Alert.alert(error?.response?.data?.error || 'An error occurred.');
        dispatch(updateListData([]));
      },
      onSuccess: fetchedData => {
        const listDataResult = (
          fetchedData?.pages?.map(page =>
            updateIsLikedProperty(page.results),
          ) || []
        ).flat() as Character[];
        dispatch(updateListData(listDataResult));
        if (!isFetchingNextPage) {
          BacktoTopList();
        }
      },
    },
  );

  const BacktoTopList = () => {
    flashListRef?.current?.scrollToOffset({animated: true, offset: 0});
  };

  const updateIsLikedProperty = (characters: Character[]) => {
    // Iterate through each character and add the "isLiked" property
    return characters.map((itemCharacter: Character) => {
      // Here, you can check if this character is liked or not and set the property accordingly
      const isLiked = liked.findIndex(item => item === itemCharacter.id) > -1;
      return {...itemCharacter, isLiked};
    });
  };

  const onEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = ({item}: {item: Character}) => {
    return (
      <MyRenderItem
        type={listState.showingMode === 'grid' ? 'grid' : 'list'}
        item={item}
        onPress={() => navigation.navigate('detail', {param: item})}
      />
    );
  };

  return (
    <Screen withoutScroll>
      <View style={stylesInternal.headerWrapper}>
        <TextInput
          placeholder="Search Character..."
          value={listState.searchQuery}
          onChangeText={searchQuery =>
            setListState({...listState, searchQuery})
          }
          style={stylesInternal.input}
        />
        <DropDownPicker
          open={listState.open}
          value={status}
          placeholder="All"
          items={dropDownOptions}
          setOpen={() => setListState({...listState, open: !listState.open})}
          setValue={setStatus}
          containerStyle={stylesInternal.containerDropDown}
        />
        <AntDesign
          onPress={() =>
            setListState({
              ...listState,
              showingMode: listState.showingMode === 'grid' ? 'list' : 'grid',
            })
          }
          name={listState.showingMode === 'grid' ? 'appstore-o' : 'bars'}
          size={18}
          color="#CC0000"
        />
      </View>

      <FlashList
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ref={flashListRef}
        numColumns={listState.showingMode === 'grid' ? 2 : 1}
        renderItem={renderItem}
        onEndReached={onEndReached}
        estimatedItemSize={100}
        keyExtractor={item => String(item.created)}
        data={listData}
        key={listState.showingMode}
      />
      <TouchableOpacity onPress={BacktoTopList} style={styles.backToTop}>
        <AntDesign name={'up'} size={18} color="white" />
      </TouchableOpacity>
    </Screen>
  );
};

export {ListScreen};

const stylesInternal = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.gray3,
    borderRadius: 8,
    width: '50%',
    paddingHorizontal: 8,
    height: 50,
  },
  containerDropDown: {width: '35%'},
  headerWrapper: {
    zIndex: 1,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
