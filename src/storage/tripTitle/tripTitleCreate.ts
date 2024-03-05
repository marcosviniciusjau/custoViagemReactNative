import AsyncStorage from "@react-native-async-storage/async-storage"

import { tripsTitleGetAll } from "./tripsTitleGetAll"

import { TRIP_TITLE_COLLECTION } from "@storage/storageConfig"
import { AppError } from "@utils/AppError";

export async function tripTitleCreate(title:string)
   {
  try {
    const storedTrips = await tripsTitleGetAll()

    const tripAlreadyExists = storedTrips.includes(title)
    
    if (tripAlreadyExists) {
      throw new AppError("Essa viagem já existe")
    }

    const updatedTripsTitle = [...storedTrips, title]

    const storage = JSON.stringify(updatedTripsTitle)
    console.log(storage)
    
    await AsyncStorage.setItem(TRIP_TITLE_COLLECTION, storage)
    
  } catch (error) {
    throw error
  }
}
