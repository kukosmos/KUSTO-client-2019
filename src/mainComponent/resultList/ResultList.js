import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Result from "../result";

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
    fontSize: 50
  },
  loadText: {
    fontSize: 50
  },
  resultList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ResultList;
