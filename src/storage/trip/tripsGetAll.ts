import AsyncStorage from "@react-native-async-storage/async-storage"
import { TRIP_COLLECTION } from "@storage/storageConfig"

export async function tripsGetAll() {
  try{
  const storage = await AsyncStorage.getItem(TRIP_COLLECTION)

  const trips: object[]= storage ? JSON.parse(storage) : [];

  return trips;
  }
  catch(error){
    throw error;
  }
  
}