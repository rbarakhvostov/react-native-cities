import { Link } from "expo-router"
import { Pressable, StyleSheet, Text, Image } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import cities from "../data/cities"

const CityGrid = () => {
  const RenderItem = ({ item }) => (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
      </Pressable>
    </Link>
  )

  return (
    <FlatList 
      data={cities}
      renderItem={RenderItem}
      keyExtractor={(item) => item.name}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  city: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 4/5,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
})

export default CityGrid
