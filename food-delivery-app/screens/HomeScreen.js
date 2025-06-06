import { View, FlatList, Text, StyleSheet } from 'react-native';
import restaurants from '../data/restaurants';
import RestaurantCard from '../components/RestaurantCard';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RestaurantCard restaurant={item} onPress={() => navigation.navigate('Restaurant', { restaurant: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
