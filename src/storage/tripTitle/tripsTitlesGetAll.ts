import AsyncStorage from "@react-native-async-storage/async-storage"
import { TRIP_TITLE_COLLECTION } from "@storage/storageConfig"

export async function tripsTitlesGetAll() {
  try{
  const storage = await AsyncStorage.getItem(TRIP_TITLE_COLLECTION)

  const tripsTitle: string[]= storage ? JSON.parse(storage) : [];

  return tripsTitle;
  }
  catch(error){
    throw error;
  }
  
}