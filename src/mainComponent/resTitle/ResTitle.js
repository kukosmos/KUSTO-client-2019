import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const ResTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>제 생각에 당신은..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 50
  }
});

export default ResTitle;
