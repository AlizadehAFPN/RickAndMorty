import {Character} from '../Interface';

export const dropDownOptions = [
  {label: 'All', value: ''},
  {label: 'Alive', value: 'alive'},
  {label: 'Dead', value: 'dead'},
  {label: 'Unknown', value: 'unknown'},
];

export const itemProperties = (item: Character) => {
  return [
    {label: 'Name', value: item?.name},
    {label: 'Status', value: item?.status},
    {label: 'Species', value: item?.species},
    {
      label: 'Length',
      value: item?.episode ? `${item.episode.length}` : 'N/A',
    },
    {label: 'Gender', value: item?.gender},
    {label: 'Origin', value: item?.origin.name},
  ];
};

export const detailProperties = (item: Character) => {
  return [
    {label: 'Name', value: item?.name},
    {label: 'Status', value: item?.status},
    {label: 'Species', value: item?.species},
    {
      label: 'Length',
      value: item?.episode ? `${item.episode.length}` : 'N/A',
    },
    {label: 'Gender', value: item?.gender},
    {label: 'Origin name', value: item?.origin?.name},
    {label: 'Last location', value: item?.location?.name},
    {
      label: 'Last seen episode',
      value: `\n${(item?.episode)[item?.episode?.length - 1]}`,
    },
  ];
};
