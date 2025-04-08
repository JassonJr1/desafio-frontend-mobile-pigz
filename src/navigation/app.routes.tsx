import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Login from "../screens/Login"
import { Entrega } from "../screens/Entrega"
import TabRoutes from "./tab.routes"

export type RootStackParamList = {
  Login: undefined
  Tabs: undefined
  Entrega: { entregaId: string }
}

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Tabs" component={TabRoutes} />
      <Screen name="Entrega" component={Entrega} />
    </Navigator>
  )
}
