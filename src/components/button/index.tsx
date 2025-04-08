import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { SvgProps } from "react-native-svg"

import { styles } from "./styles"
import { GradientView } from "../grandient"

type Props = TouchableOpacityProps & {
  title: string
  icon?: React.FC<SvgProps>
}

export function Button({ title, icon: Icon, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <GradientView>
        <View style={styles.container}>
          {Icon && <Icon height={22} width={22} />}
          <Text style={[styles.title, Icon && { marginLeft: 8 }]}>{title}</Text>
        </View>
      </GradientView>
    </TouchableOpacity>
  )
}
