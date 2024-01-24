import { useTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes(){
  const {colors} = useTheme()

  return(
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  )
}
