import React from "react";
import { View, StyleSheet } from "react-native";

class SeparatorH extends React.Component {
  render() {
    return <View style={styles.separator} />;
  }
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default SeparatorH;
