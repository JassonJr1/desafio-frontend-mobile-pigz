import React, { useState } from "react"
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import { Feather } from "@expo/vector-icons"

import { styles } from "./styles"
import theme from "../../styles/theme"

type Props = TextInputProps & {
  title: string
  isPassword?: boolean
}

export function Input({ title, isPassword = false, ...rest }: Props) {
  const [secretPassword, setSecretPassword] = useState(true)

  function handleVisiblePassword() {
    setSecretPassword(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleInput}>{title}</Text>
      <View style={styles.content}>
        {isPassword ? (
          <>
            <TextInput style={styles.textInput} textAlign="left" secureTextEntry={secretPassword} {...rest} />
            <TouchableOpacity style={styles.icon} onPress={handleVisiblePassword}>
              <Feather name={secretPassword ? "eye" : "eye-off"} size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          </>
        ) : (
          <TextInput style={styles.textInput} textAlign="left" autoCorrect={false} {...rest} />
        )}
      </View>
    </View>
  )
}
