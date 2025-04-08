import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 16
  },
  icon: {
    marginLeft: 16
  },
  title: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    fontFamily: theme.fonts.medium,
    color: theme.colors.text
  }
})
