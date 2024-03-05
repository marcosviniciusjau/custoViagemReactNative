import AsyncStorage from "@react-native-async-storage/async-storage"
import { TRIP_TITLE_COLLECTION } from "@storage/storageConfig"

export async function tripsTitleGetAll() {
  try{
  const storage = await AsyncStorage.getItem(TRIP_TITLE_COLLECTION)

  const tripsTitle: object[]= storage ? JSON.parse(storage) : [];

  return tripsTitle;
  }
  catch(error){
    throw error;
  }
  
}