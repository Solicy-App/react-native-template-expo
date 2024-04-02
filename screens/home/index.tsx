import React from "react";
import { Text, View } from "react-native";

import { getStyles } from "./styles";

const Home = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
