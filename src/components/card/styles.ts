import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    marginTop: 32,
    borderBottomWidth: 2.5,
    borderRightWidth: 2.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: theme.colors.shadow
  }
})
