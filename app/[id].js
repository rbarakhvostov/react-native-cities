import React from 'react'
import { useSearchParams, useRouter } from 'expo-router'
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import cities from '../data/cities'

const CityDetails = () => {
  const { id } = useSearchParams()
  const router = useRouter()

  const city = cities.find((c) => c.name === id)

  const handlePressBack = () => {
    router.back()
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: city.image }}
      />
      <Text style={styles.name}>
        {city.name}
      </Text>
      <Text style={styles.detailsTitle}>Details:</Text>
      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus
          euismod, vestibulum dolor a, pulvinar odio. Nunc suscipit felis eget
          est consequat, ac consequat metus aliquet. Vivamus faucibus libero sit
          amet semper molestie. Sed euismod ligula sit amet urna maximus
          dignissim. Praesent aliquam, nunc vel interdum dignissim, risus neque
          dignissim elit, id posuere mauris tortor at quam. Duis euismod
          lobortis enim, vel sollicitudin purus bibendum eu. Pellentesque luctus
          leo id elit congue faucibus. Morbi vel nulla enim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus
          euismod, vestibulum dolor a, pulvinar odio. Nunc suscipit felis eget
          est consequat, ac consequat metus aliquet. Vivamus faucibus libero sit
          amet semper molestie. Sed euismod ligula sit amet urna maximus
          dignissim. Praesent aliquam, nunc vel interdum dignissim, risus neque
          dignissim elit, id posuere mauris tortor at quam. Duis euismod
          lobortis enim, vel sollicitudin purus bibendum eu. Pellentesque luctus
          leo id elit congue faucibus. Morbi vel nulla enim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus
          euismod, vestibulum dolor a, pulvinar odio. Nunc suscipit felis eget
          est consequat, ac consequat metus aliquet. Vivamus faucibus libero sit
          amet semper molestie. Sed euismod ligula sit amet urna maximus
          dignissim. Praesent aliquam, nunc vel interdum dignissim, risus neque
          dignissim elit, id posuere mauris tortor at quam. Duis euismod
          lobortis enim, vel sollicitudin purus bibendum eu. Pellentesque luctus
          leo id elit congue faucibus. Morbi vel nulla enim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus
          euismod, vestibulum dolor a, pulvinar odio. Nunc suscipit felis eget
          est consequat, ac consequat metus aliquet. Vivamus faucibus libero sit
          amet semper molestie. Sed euismod ligula sit amet urna maximus
          dignissim. Praesent aliquam, nunc vel interdum dignissim, risus neque
          dignissim elit, id posuere mauris tortor at quam. Duis euismod
          lobortis enim, vel sollicitudin purus bibendum eu. Pellentesque luctus
          leo id elit congue faucibus. Morbi vel nulla enim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus
          euismod, vestibulum dolor a, pulvinar odio. Nunc suscipit felis eget
          est consequat, ac consequat metus aliquet. Vivamus faucibus libero sit
          amet semper molestie. Sed euismod ligula sit amet urna maximus
          dignissim. Praesent aliquam, nunc vel interdum dignissim, risus neque
          dignissim elit, id posuere mauris tortor at quam. Duis euismod
          lobortis enim, vel sollicitudin purus bibendum eu. Pellentesque luctus
          leo id elit congue faucibus. Morbi vel nulla enim.
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={handlePressBack}>
        <Ionicons name="ios-arrow-back" size={36} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    margin: 12,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 12,
    marginBottom: 8
  },
  detailsContainer: {
    marginHorizontal: 12
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 12,
  },
})

export default CityDetails
