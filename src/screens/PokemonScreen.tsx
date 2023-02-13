import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Text, View, Image } from "react-native";
import Constants from "expo-constants";
import { Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

export const PokemonScreen = ({ route }) => {
  const pokemon = route.params.props;
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/pokedex.png")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Button onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Button>
        <Text style={styles.name}>
          {pokemon.pokedexId + " - " + pokemon.name}
        </Text>
        <View style={styles.typesContainer}>
          {pokemon.apiTypes.map((type) => {
            return <Image source={{ uri: type.image }} style={styles.type} />;
          })}
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: pokemon.image,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = {
  container: {
    paddingTop: Constants.statusBarHeight + 100,
    height: "100%",
    alignItems: "center",
  },
  back: {
    position: "absolute",
    left: "0.5%",
    top: "8%",
  },
  imageContainer: {
    backgroundColor: "cyan",
    borderColor: "#566573",
    borderRadius: 20,
    borderWidth: 5,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    marginBottom: 85,
  },
  typesContainer: {
    backgroundColor: "white",
    paddingTop: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    position: "absolute",
    top: "50%",
    left: "2%",
    justifyContent: "space-between",
    zIndex: 5,
  },
  type: {
    width: 30,
    height: 30,
    marginBottom: 15,
  },
};
