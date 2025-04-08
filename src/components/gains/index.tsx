import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"

import { styles } from "./styles"
import { GradientView } from "../grandient"
import theme from "../../styles/theme"

export function GainsDay() {
  const [isVisible, setIsVisible] = useState(false)

  function getDay() {
    const date = new Date().toLocaleDateString()
    const [day, month] = date.split("/")
    return `${month}/${day}`
  }

  function handleVisible() {
    setIsVisible(prev => !prev)
  }

  return (
    <GradientView>
      <View style={styles.container}>
        <View style={styles.contentRow}>
          <Text style={styles.title}>Ganhos do dia</Text>
          <Text style={styles.day}>{getDay()}</Text>
        </View>
        <View style={styles.contentRow}>
          <Text style={styles.dayCash}>{"R$ " + (isVisible ? "150" : " ---")}</Text>
          <TouchableOpacity onPress={handleVisible}>
            <Feather name={isVisible ? "eye-off" : "eye"} size={24} color={theme.colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </GradientView>
  )
}
