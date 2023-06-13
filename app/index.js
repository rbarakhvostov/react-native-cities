import { useState, useEffect } from 'react'
import { Link } from "expo-router"
import { Pressable, StyleSheet, Text, Image, View, FlatList } from "react-native"
import Animated,
{ 
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay
} from 'react-native-reanimated'
import cities from "../data/cities"


const CityItem = ({ item }) => (
  <Link href={`/${item.name}`} asChild>
    <Pressable style={styles.city}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.name}>{item.name}</Text>
    </Pressable>
  </Link>
)

export const CityItemSkeleton = () => {
  const opacity = useSharedValue(1)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withDelay(500, withRepeat(withTiming(opacity.value, {duration: 700}), -1, true))
    }
  })

  useEffect(() => {
    opacity.value = 0.3
  }, [])

  return (
    <View style={styles.city}>
      <Animated.View style={[styles.image, animatedStyles]} />
      <Animated.View style={[{
          width: '50%',
          height: 20,
          backgroundColor: 'gainsboro',
        }, animatedStyles]}
      />
    </View>
  )
}

const CityGrid = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  if (loading) {
    return (
      <FlatList 
        data={Array(10)}
        renderItem={() => <CityItemSkeleton />}
        numColumns={2}
      />
    )
  }

  return (
    <FlatList
      data={cities}
      renderItem={({item}) => <CityItem item={item} />}
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
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: 'gainsboro'
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
})

export default CityGrid
