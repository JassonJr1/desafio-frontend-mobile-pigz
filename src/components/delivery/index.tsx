import React from "react"
import { Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { GradientView } from "../grandient"
import { styles } from "./styles"

type Props = {
  title: string
  distance: string
}

export function Delivery({ title, distance }: Props) {
  return (
    <GradientView>
      <View style={styles.container}>
        <MaterialIcons style={styles.icon} name="delivery-dining" size={24} color="white" />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Percurso total: {distance}</Text>
        </View>
      </View>
    </GradientView>
  )
}
