import React, { ReactNode } from "react"
import { View, ViewProps } from "react-native"

import { styles } from "./styles"

type Props = ViewProps & {
  children: ReactNode
}

export function Card({ children, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      {children}
    </View>
  )
}
