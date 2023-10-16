import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {TextProps} from './text.props';
import {colors} from '../../Styles/colors';
// import { translate } from "../../i18n"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export const Text = (props: TextProps) => {
  // grab the props
  const {text, children, style: styleOverride, ...rest} = props;

  const content = text || children;

  const styles = [
    {
      color: props.color ? props.color : colors.text,
      fontSize: props.size,
      marginHorizontal: props.mx,
      fontWeight: props.bold ? 'bold' : 'normal', // Use 'bold' or 'normal'
    },
    styleOverride,
  ];

  return (
    //@ts-ignore
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  );
};
