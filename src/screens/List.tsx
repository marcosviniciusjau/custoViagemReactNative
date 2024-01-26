import { useState, useEffect } from "react"
import { useNavigation,useFocusEffect } from "@react-navigation/native"
import { groupsGetAll } from "@storage/trip/tripsGetAll"
import { Center, Container, Text, VStack } from "native-base"
import { FlatList } from "react-native"
import { GroupCard } from "@components/TripCard"
import { Header } from "@components/header"

export function List() {
  const [trips, setTrips] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewTrip() {
    try {
      navigation.navigate("new")
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchTrips() {
    try {
      const data = await groupsGetAll()
      setTrips(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchTrips();
  },[])

  return (
    <VStack>
      <Header showBackButton/>
      <Center flex={1}>
        <FlatList
          data={trips}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <GroupCard title={item} />}
        />
      </Center>
    </VStack>
  )
}
