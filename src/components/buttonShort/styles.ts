import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    marginLeft: 12
  },

  title: {
    fontSize: 17,
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    paddingTop: 5
  }
})
