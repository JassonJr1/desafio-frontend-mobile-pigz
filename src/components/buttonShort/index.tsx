import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
}

export function ButtonShort({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={{ alignSelf: "flex-end" }} activeOpacity={0.7} {...rest}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
