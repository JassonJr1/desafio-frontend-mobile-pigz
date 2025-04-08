import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons"

import { Dashboard } from "../screens/Dashboard"
import theme from "../styles/theme"

type TabBarIconProps = {
  color: string
  size: number
  focused: boolean
}

const { Navigator, Screen } = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular
        },
        tabBarItemStyle: {
          paddingBottom: 22,
          paddingTop: 11
        },
        tabBarStyle: {
          height: 83
        }
      }}
    >
      <Screen
        name="Ralatório"
        component={Dashboard}
        options={{
          tabBarLabel: "Relatório",
          tabBarIcon: ({ color, size }: TabBarIconProps) => <Ionicons name="mail" size={28} color={color} />
        }}
      />
      <Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: "Visão Geral",
          tabBarIcon: ({ color, size }: TabBarIconProps) => <Feather name="home" size={28} color={color} />
        }}
      />
      <Screen
        name="Perfil"
        component={Dashboard}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }: TabBarIconProps) => <AntDesign name="user" size={28} color={color} />
        }}
      />
    </Navigator>
  )
}
