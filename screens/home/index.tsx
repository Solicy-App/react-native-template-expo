import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { getStyles } from "./styles";
import Colors from "../../constants/Colors";

const Home = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
