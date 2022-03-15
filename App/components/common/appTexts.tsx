import React from "react";
import { Text } from "react-native";

export const textStyles = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontSize: 16,
  lineHeight: 22.4,
  color: "black"
};

const { Provider, Consumer } = React.createContext(textStyles);

export const MyAppText = ({style, ...props}) => (
  <Consumer>
    {(contextStyle) => {
      const mergedStyle = style
        ? {...contextStyle, ...style}
        : contextStyle;

      return (
        <Text {...props} style={mergedStyle} />
      );
    }}
  </Consumer>
);

export const StyleText = ({style, children}) => (
   <Consumer>
    {(contextStyle) => (
      <Provider value={{...contextStyle, ...style}}>
        {children}
      </Provider>
    )}
  </Consumer>
);