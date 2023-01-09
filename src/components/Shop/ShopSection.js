import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "./Card";
import RecentCard from "./RecentCard";

const ShopSection = ({ header, subHeader, next, items, navigation , recent=false }) => {
  return (
    <View style={styles.container}>
          <Text style={styles.header}>{header ? header : "Header"}</Text>
      <ScrollView horizontal style={styles.itemsContainer}>
        {
            items?
            items.map((item, index) => {
                return recent? (<RecentCard key={item.id} product={item} navigation={navigation} backgroundColor={(index%2 === 0)? 'rgba(207, 0, 144, 0.2)': 'rgba(77, 10, 142, 0.2)'} />):
                (<Card key={item.id} product={item} navigation={navigation} />)
            }):
            <Text>No Products</Text>
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    color: "#343A40",
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 18,
  },
  itemsContainer: {
    marginLeft: 16,
  },
});

export default ShopSection;
