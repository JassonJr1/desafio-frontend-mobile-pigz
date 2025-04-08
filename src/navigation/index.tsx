import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from "./app.routes"

type Props = {
  onReady: () => void
}

export function Routes({ onReady }: Props) {
  return (
    <NavigationContainer onReady={onReady}>
      <AppRoutes />
    </NavigationContainer>
  )
}
