import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";

type Styles = {
  container: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      display: "flex",
    },
  });
};
