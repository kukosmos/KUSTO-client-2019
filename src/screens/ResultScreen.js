import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ResultList, ResFooter, ResTitle } from "../mainComponent";

const { width, height } = Dimensions.get("window");

class ResultScreen extends Component {
  render() {
    const { menus } = this.props.navigation.state.params;
    const names = menus.reduce((a, b) => a.concat(b.name), []);

    return (
      <View style={styles.container}>
        <ResTitle />
        <ResultList names={names} />
        <ResFooter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ResultScreen;
