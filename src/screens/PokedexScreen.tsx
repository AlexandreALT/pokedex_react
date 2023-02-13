import { useQuery } from "@tanstack/react-query";
import { FlatList, ImageBackground, SafeAreaView, View } from "react-native";
import { Text, Searchbar } from "react-native-paper";
import { Item } from "../components/Item";
import Constants from "expo-constants";
import React from "react";

async function fetchData() {
  const result = await fetch(
    "https://pokebuildapi.fr/api/v1/pokemon/generation/1"
  );
  const json = await result.json();
  return json;
}

export const PokedexScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["pokedex"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <ImageBackground
      source={require("../../assets/pokedex.png")}
      resizeMode="cover"
    >
      <View style={styles.searchbarContainer}>
        <Searchbar
          placeholder="Rechercher"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => {
            if (searchQuery === "") return <Item props={item} />;
            else if (searchQuery !== "" && item.name.indexOf(searchQuery) === 0)
              return <Item props={item} />;
          }}
          columnWrapperStyle={{ justifyContent: "space-around" }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = {
  container: {
    paddingTop: Constants.statusBarHeight + 245,
    paddingBottom: 25,
    height: "100%",
  },
  searchbarContainer: {
    position: "absolute",
    width: "100%",
    top: "18%",
    alignItems: "center",
  },
  searchbar: {
    width: "80%",
  },
};
