import React from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = ""; // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: [],
      isLoading: false,
    };
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true }); // Lancement du chargement
      getFilmsFromApiWithSearchedText(this.searchedText).then((data) => {
        this.setState({
          films: data.results,
          isLoading: false, // Arrêt du chargement
        });
      });
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text; // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Titre du film"
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadFilms()}
        />
        <Button
          color="#bea064"
          title="Rechercher"
          onPress={() => this._loadFilms()}
        />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: "#bea064",
    paddingLeft: 5,
    backgroundColor: "#EEEEEE",
  },
  mainContainer: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#3fbfff",
    justifyContent: "space-between",
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;
