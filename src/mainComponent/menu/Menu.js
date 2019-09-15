import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";

const { width } = Dimensions.get("window");

const MenuButton = ({ menu, clicked, onClick, index }) => {
  return (
    <TouchableOpacity
      style={clicked ? styles.buttonUnPressed : styles.buttonPressed}
      onPress={() => onClick(index)}
    >
      <Text style={styles.content}>{menu}</Text>
    </TouchableOpacity>
  );
};

const Menu = ({ menus, onClick }) => {
  return (
    <View style={styles.buttonContainer}>
      {menus.map((menu, i) => (
        <MenuButton
          key={menu.name}
          menu={menu.name}
          index={i}
          clicked={menu.clicked}
          onClick={onClick}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: width * 0.63,
    height: width * 0.65,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonUnPressed: {
    width: width * 0.2,
    height: width * 0.2,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#CCCCCC",
    marginRight: 1,
    marginBottom: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPressed: {
    width: width * 0.2,
    height: width * 0.2,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#EEEEEE",
    marginRight: 1,
    marginBottom: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    fontSize: width * 0.04,
    color: "white",
    textShadowColor: "#585858",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  }
});

export default Menu;
