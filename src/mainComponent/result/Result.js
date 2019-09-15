import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const thumbnail =
  "https://img1.yna.co.kr/etc/inner/KR/2019/07/13/AKR20190713045100005_01_i_P2.jpg";
const star = "https://t1.daumcdn.net/cfile/tistory/24555E4E530F37470C";

const Result = ({ res }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: thumbnail }} />
      <Text style={styles.title}>{res.restaurant}</Text>
      <View style={styles.score}>
        <Image style={styles.star} source={{ uri: star }} />
        <Text style={styles.rate}>{res.rating}</Text>
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
    flex: 1,
    width: width * 0.15,
    height: height * 0.18,
    marginLeft: 10
  },
  title: {
    flex: 1,
    fontSize: 40,
    color: "#aaaaaa",
    marginLeft: width * 0.05
  },
  score: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  star: {
    width: width * 0.06,
    height: width * 0.06
  },
  rate: { fontSize: 30 }
});

export default Result;
