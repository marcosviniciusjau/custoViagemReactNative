import AsyncStorage from '@react-native-async-storage/async-storage';


import { groupsGetAll } from "./tripsGetAll"

import { TRIP_COLLECTION } from '@storage/storageConfig';


export async function tripCreate(newTrip:string) {
  try{
    const storedTrips = await groupsGetAll();
    
    const storage = JSON.stringify([...storedTrips, newTrip])

    await AsyncStorage.setItem(TRIP_COLLECTION, storage)


  }catch(error){
    throw error;
  }


}
