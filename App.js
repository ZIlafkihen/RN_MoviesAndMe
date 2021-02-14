import React from "react";
import Search from "./Components/Search";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Search />
      </SafeAreaProvider>
    );
  }
}
