import { Stack } from "expo-router"

export default Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'cities',
          headerStyle: {
            backgroundColor: '#98A8F8',
          },
          headerTintColor: 'white'
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
    </Stack>
  )
}
 