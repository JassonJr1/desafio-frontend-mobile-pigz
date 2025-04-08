import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center"
  },

  title: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    fontFamily: theme.fonts.medium,
    color: theme.colors.title,
    paddingRight: 40
  },

  icon: {
    marginLeft: 16
  }
})
