import { Platform } from "react-native"
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs"

import { useTheme } from "native-base"
import { Home } from "@screens/Home"
import { List } from "@screens/List"
import HomeSvg from "@assets/home.svg"
import ListSvg from "@assets/list-solid.svg"
import { NewTrip } from "@screens/NewTrip"
import { TripDetails } from "@screens/TripDetail"
import { EditTrip } from "@screens/EditTrip"

type AppRoutes = {
  home: undefined
  trips: undefined
  new: undefined
  edit:undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  const iconSize = sizes[6]
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.orange[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[6],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="trips"
        component={List}
        options={{
          tabBarIcon: ({ color }) => (
            <ListSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="new"
        component={NewTrip}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="edit"
        component={EditTrip}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  )
}
