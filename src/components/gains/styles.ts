import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 107,
    padding: 16,
    justifyContent: "space-between"
  },

  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.medium
  },

  day: {
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.medium
  },

  dayCash: {
    fontSize: 30,
    fontFamily: theme.fonts.boldRoboto,
    color: theme.colors.white,
    marginLeft: 10
  }
})
