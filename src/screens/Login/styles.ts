import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 30,
    backgroundColor: theme.colors.white
  },

  logo: {
    marginTop: 124,
    justifyContent: "center",
    alignItems: "center"
  },

  logoSubtitle: {
    fontSize: 18,
    marginTop: 8,
    fontFamily: theme.fonts.semiBold
  },

  content: {
    marginTop: 37
  },

  title: {
    fontSize: 16,
    color: theme.colors.title,
    fontFamily: theme.fonts.semiBold
  },

  forgotPassword: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    marginVertical: 24,
    textDecorationLine: "underline"
  },

  register: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "center"
  },

  accompanyRegisterText: {
    fontFamily: theme.fonts.regular,
    marginRight: 5,
    fontSize: 13,
    color: theme.colors.text
  },

  registerText: {
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.primary
  },
  footer: {
    marginTop: 97
  },

  footerTitle: {
    flexDirection: "row",
    marginBottom: 24
  },

  footerTitleText: {
    fontSize: 13,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.darkTitle
  }
})
