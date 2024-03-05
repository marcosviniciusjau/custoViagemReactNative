import AsyncStorage from "@react-native-async-storage/async-storage"

import { tripsGetAll } from "./tripsGetAll"

import { TRIP_COLLECTION } from "@storage/storageConfig"
import { AppError } from "@utils/AppError";
import {tripTitleCreate} from "../tripTitle/tripTitleCreate"

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

    const tripAlreadyExists = storedTrips.includes((trip: { title: string })=> trip.title === trip.title)
    
    if (tripAlreadyExists) {
      throw new AppError("Essa viagem ja existe")
    }

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
