import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>당신의 메뉴에게 투표하세요!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: width * 0.06
  }
});

export default Title;
