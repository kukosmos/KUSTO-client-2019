import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window");

const Select = ({ menuButtons }) => {
  const res = menuButtons.reduce((a, b) => a || b.clicked, false);
  return (
    <View style={styles.selectContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>오늘은</Text>
        <Text style={styles.selected}>
          {res
            ? menuButtons
                .filter(menuButton => menuButton.clicked)
                .reduce((a, b) => a + " " + b.name, "")
            : "아무것도 안..."}
        </Text>
        <Text style={styles.text}>먹고싶다!</Text>
      </View>
      <View style={res ? styles.validButton : styles.invalidButton}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>메뉴추천받기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    flex: 1,
    width: width * 0.6
  },
  textContainer: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 30
  },
  selected: {
    fontSize: 29,
    color: "#FF9800",
    marginTop: 3,
    marginBottom: 3
  },
  validButton: {
    flex: 1,
    backgroundColor: "#ff9800",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderRadius: 10
  },
  invalidButton: {
    flex: 1,
    backgroundColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontSize: 50
  }
});

export default Select;
