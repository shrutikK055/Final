import { View, Text, Button, StyleSheet } from 'react-native';

export default function FoodItem({ item }) {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>${item.price}</Text>
      <Button title="Add to Cart" onPress={() => alert(`${item.name} added to cart`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  name: { fontSize: 16, fontWeight: '600' },
});
