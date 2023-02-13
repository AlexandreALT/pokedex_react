import { useNavigation } from "@react-navigation/native";
import { Dimensions, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const Item = ({ props }: { props }) => {
  const navigation = useNavigation();

  return (
    <Card
      style={styles.container}
      onPress={() => navigation.navigate("Pokemon", { props: props })}
    >
      <Card.Cover source={{ uri: props.sprite }} style={styles.cover} />
      <Card.Title
        title={props.pokedexId + " - " + props.name}
        style={styles.title}
      />
    </Card>
  );
};

var width = Dimensions.get("window").width / 2.5;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: width,
    backgroundColor: "#EC7063",
  },
  cover: {
    backgroundColor: "#EC7063",
  },
  title: {
    backgroundColor: "#E74C3C",
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
  },
});
