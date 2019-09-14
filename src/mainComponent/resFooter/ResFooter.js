import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const ResFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>를 원하는군요!</Text>
      <Text style={styles.yesorno}>아님말고..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    fontSize: 50,
    marginBottom: 5
  },
  yesorno: {
    fontSize: 15,
    color: "gray"
  }
});

export default ResFooter;
