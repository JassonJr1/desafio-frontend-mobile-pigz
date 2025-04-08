import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { SvgProps } from "react-native-svg"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
  icon: React.FC<SvgProps>
}

export function ButtonExternalService({ title, icon: Icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
      {Icon && <Icon style={styles.icon} />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
