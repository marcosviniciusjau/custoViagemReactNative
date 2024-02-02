import { useState, useCallback } from "react"
import { useNavigation,useFocusEffect } from "@react-navigation/native"
import { tripsTitlesGetAll } from "@storage/tripTitle/tripsTitlesGetAll"
import {  Container } from "./styles"
import { Alert, FlatList } from "react-native"
import {TripCard} from "@components/TripCard"
import { ListEmpty } from "@components/ListEmpty"
import { TripDetails } from "./TripDetail"
import { tripsGetAll } from "@storage/trip/tripsGetAll"
import { tripDelete } from "@storage/trip/tripDelete"

export function List() {
  const [trips, setTrips] = useState<object[]>([])

  const navigation = useNavigation()

  async function handleRemoveTrip(title:string) {
    try {
      await tripDelete(title);
      fetchTrips();

    } catch (error) {
      console.log(error)
      Alert.alert('Remover Viagem', 'Não foi possivel remover')
    }
  }

  async function fetchTrips() {
    try {
      const data = await tripsGetAll()
      setTrips(data)
    } catch (error) {
      console.log(error)
    }
  }

  
function handleOpenTrip(title:string) {
    try {
      navigation.navigate("edit", { title })
    } catch (error) {
      console.log(error)
    }
}


  useFocusEffect(useCallback(()=>{
    fetchTrips();
  },[]));

  return (
    <Container>
        <FlatList
          data={trips}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item,index }) => (
            <TripCard
             title={item[0]}
             onPress={() => handleOpenTrip(item)}
             onRemove={()=> handleRemoveTrip(item)}
             />
          )}
          contentContainerStyle={trips.length===0 && {flex:1}}
          ListEmptyComponent={()=>
             <ListEmpty message="Que tal cadastrar a primeira viagem?"/>}
        />
    </Container>
  )
}
