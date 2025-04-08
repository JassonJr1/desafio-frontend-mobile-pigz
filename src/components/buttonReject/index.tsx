import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { Feather } from "@expo/vector-icons"

import { styles } from "./styles"
import theme from "../../styles/theme"

type Props = TouchableOpacityProps & {
  title: string
}

export function ButtonReject({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View style={styles.container}>
        <Feather name="x" size={24} color={theme.colors.primary} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
