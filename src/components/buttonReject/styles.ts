import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.primary
  },

  title: {
    fontSize: 16,
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
    marginLeft: 8
  }
})
