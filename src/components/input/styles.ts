import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  titleInput: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    marginTop: 16,
    marginBottom: 6,
    alignSelf: "flex-start"
  },

  content: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: theme.colors.primary,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  textInput: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.darkText
  },

  icon: {
    justifyContent: "center",
    alignItems: "center"
  }
})
