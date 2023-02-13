import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PokedexScreen } from "../screens/PokedexScreen";
import { PokemonScreen } from "../screens/PokemonScreen";

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pokedex"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Pokedex" component={PokedexScreen} />
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
