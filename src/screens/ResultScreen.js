import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ResultList, ResFooter, ResTitle } from "../mainComponent";
import { getMenu } from "../api/api";

const { width, height } = Dimensions.get("window");

class ResultScreen extends Component {
  state = {
    loading: true,
    res: []
  };

  kor2eng = name => {
    const table = {
      한식: "korean",
      중식: "china",
      일식: "japan",
      양식: "american",
      분식: "school",
      디저트: "desert",
      소수민족: "guitar",
      야식: "night",
      패스트푸드: "fast"
    };
    return table[name];
  };

  results = async () => {
    const { menus } = this.props.navigation.state.params;
    const eng = menus
      .filter(menu => menu.clicked)
      .map(menu => this.kor2eng(menu.name));
    try {
      const data = await getMenu(eng);
      const top3 = data.slice(0, 3);
      const recommends = top3.reduce(
        (a, b) =>
          a.concat({
            rating: b.rating,
            restaurant: b.restaurant
          }),
        []
      );

      this.setState({
        loading: false,
        res: recommends
      });
    } catch (e) {
      console.log("loading api just failed");
      console.log(e);
    }
  };

  componentDidMount() {
    this.results();
  }

  render() {
    const { navigation } = this.props;
    const { loading, res } = this.state;
    return loading ? (
      <View style={styles.load}>
        <Text style={styles.loadText}>로딩 중..</Text>
      </View>
    ) : (
      <View style={styles.container}>
        <ResTitle />
        <ResultList ress={res} />
        <ResFooter navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  load: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadText: {
    fontSize: width * 0.05,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ResultScreen;
