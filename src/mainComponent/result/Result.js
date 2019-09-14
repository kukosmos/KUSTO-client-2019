import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const source =
  "https://img1.yna.co.kr/etc/inner/KR/2019/07/13/AKR20190713045100005_01_i_P2.jpg";

const Result = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: source }} />
      <Text style={styles.title}>무르무르</Text>
      <View style={styles.score}>
        <Image style={styles.star} source={{ uri: source }} />
        <Text style={styles.rate}>4.5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: height * 0.2,
    borderWidth: 3,
    borderColor: "#eeeeee",
    borderRadius: 7,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  thumbnail: {
    flex: 2,
    width: width * 0.15,
    height: height * 0.18,
    marginLeft: 10
  },
  title: {
    flex: 2,
    fontSize: 50,
    color: "#aaaaaa",
    marginLeft: width * 0.05
  },
  score: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  star: {},
  rate: {}
});

export default Result;
