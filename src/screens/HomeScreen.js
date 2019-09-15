import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Menu, Title, Select } from "../mainComponent";

const HomeScreen = ({ navigation }) => {
  const menus = [
    "한식",
    "중식",
    "일식",
    "양식",
    "분식",
    "디저트",
    "소수민족",
    "야식",
    "패스트푸드"
  ];
  const menuButton = menus.map(menu => ({
    name: menu,
    clicked: false
  }));
  const [menuButtons, useMenuButtons] = useState(menuButton);

  const handleMenuPress = i => {
    useMenuButtons(() => {
      const targetMenu = {
        name: menuButton[i].name,
        clicked: !menuButtons[i].clicked
      };
      const newClicked = menuButtons
        .slice(0, i)
        .concat(targetMenu)
        .concat(menuButtons.slice(i + 1, menuButtons.length));

      return newClicked;
    });
  };

  return (
    <View style={styles.container}>
      <Title />
      <Menu menus={menuButtons} onClick={handleMenuPress} />
      <Select menuButtons={menuButtons} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
