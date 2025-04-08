import React, { ReactNode } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import theme from "../../styles/theme"

type Props = {
  children: ReactNode
}

export function GradientView({ children, ...rest }: Props) {
  const { primary, highlight } = theme.colors

  return (
    <LinearGradient style={[styles.container]} colors={[primary, highlight]} {...rest}>
      {children}
    </LinearGradient>
  )
}
