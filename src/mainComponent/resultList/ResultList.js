import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Result from "../result";

const { width, height } = Dimensions.get("window");

const ResultList = ({ ress }) => {
  return (
    <View style={styles.resultList}>
      {ress.map(res => (
        <Result key={res.restaurant} res={res} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  load: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: width * 0.05
  },
  loadText: {
    fontSize: width * 0.05
  },
  resultList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ResultList;
