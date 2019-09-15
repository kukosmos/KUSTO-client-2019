import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window");

const ResFooter = ({ navigation }) => {
  const handlePress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.footer}>를 원하는 것 같아요!</Text>
        <Text style={styles.yesorno}>아님말고..</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>다시 고르기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    fontSize: width * 0.06,
    marginBottom: 5
  },
  yesorno: {
    fontSize: width * 0.025,
    marginBottom: 3,
    color: "gray"
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    flex: 1,
    width: width * 0.6,
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: "#ff9800",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.06
  }
});

export default ResFooter;
