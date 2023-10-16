import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleProp, ViewStyle} from 'react-native';

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type ListScreenProps = NativeStackScreenProps<
  NavigatorParamList,
  'list'
>;

export interface listStateProps {
  open: boolean;
  searchQuery: string;
  showingMode: string;
}

export interface MyRenderItemProps {
  item: Character;
  type: string;
  onPress: () => void;
}

export interface ResponseData {
  info: Info;
  results: Character[];
}
export interface Character {
  param: Character;
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  isLiked: boolean; // New property
}

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export type NavigatorParamList = {
  navigate(arg0: string): void;
  list: undefined;
  detail: {param: Character}; // Modify this line for the "detail" screen
};

export interface DividerProps {
  style?: StyleProp<ViewStyle>;
  height?: number;
  isSelected?: boolean; // Add isSelected prop
}

export type RootDetailParamList = {
  params: {param: Character};
};
