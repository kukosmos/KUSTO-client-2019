import React from "react";
import { StyleSheet, View } from "react-native";
import Result from "../result";

const ResultList = () => {
  return (
    <View style={styles.resultList}>
      <Result />
      <Result />
      <Result />
    </View>
  );
};

const styles = StyleSheet.create({
  resultList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ResultList;
