import AsyncStorage from "@react-native-async-storage/async-storage"

import { tripsGetAll } from "./tripsGetAll"

import { TRIP_COLLECTION } from "@storage/storageConfig"

export async function tripCreate(
    title:string,
    origin: string,
    destiny: string,
    distance: number,
    efficiency: number,
    fuel: number,
    tolls: { local: string; cost: number }[]
  )
   {
  try {
    const storedTrips = await tripsGetAll()

    const newTrip = {title,origin, destiny, distance, efficiency, fuel, tolls}
    const updatedTrips = [...storedTrips, newTrip]

    const storage = JSON.stringify(updatedTrips)
    console.log(storage)
    

    await AsyncStorage.setItem(TRIP_COLLECTION, storage)
    
  } catch (error) {
    console.log("Deu ruim")
    throw error
  }
}
