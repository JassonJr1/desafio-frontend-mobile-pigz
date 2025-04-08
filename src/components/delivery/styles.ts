import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    borderRadius: 16
  },
  icon: {
    marginVertical: 13,
    marginLeft: 20
  },
  content: {
    marginLeft: 12,
    justifyContent: "center"
  },

  title: {
    fontSize: 18,
    color: theme.colors.white,
    fontFamily: theme.fonts.mediumRoboto
  },

  subtitle: {
    fontSize: 12,
    color: theme.colors.white,
    fontFamily: theme.fonts.regular
  }
})
