import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";

const { width } = Dimensions.get("window");

const Select = ({ menuButtons, navigation }) => {
  const res = menuButtons.reduce((a, b) => a || b.clicked, false);
  const selectedMenus = menuButtons.filter(menuButton => menuButton.clicked);

  const handleSelectPress = menus =>
    navigation.navigate("Result", { menus: menus });

  return (
    <View style={styles.selectContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>오늘은</Text>
        <Text style={styles.selected}>
          {res
            ? selectedMenus.reduce((a, b) => a + " " + b.name, "")
            : "아무것도 안..."}
        </Text>
        <Text style={styles.text}>먹고싶다!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={res ? styles.validButton : styles.invalidButton}
          onPress={res ? () => handleSelectPress(selectedMenus) : () => {}}
        >
          <Text style={styles.buttonText}>메뉴추천받기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: width * 0.04
  },
  selected: {
    fontSize: width * 0.026,
    color: "#FF9800",
    marginTop: 3,
    marginBottom: 3
  },
  buttonContainer: {
    flex: 1,
    width: width * 0.6
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
    fontSize: width * 0.06
  }
});

export default Select;
