import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  content: {
    marginHorizontal: 35,
    marginTop: 59
  },

  deliveryResumeCard: {
    height: 184,
    padding: 12
  },

  titleBox: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.darkTitle
  },

  deliveryInformations: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  info: {
    height: 99,
    width: 101,
    marginTop: 18,
    borderWidth: 0.4,
    borderColor: theme.colors.border,
    borderRadius: 16,
    alignItems: "center"
  },

  infoTitle: {
    fontSize: 11,
    fontFamily: theme.fonts.regular,
    color: theme.colors.border,
    marginVertical: 9
  },

  infoData: {
    fontSize: 40,
    fontFamily: theme.fonts.medium,
    color: theme.colors.darkTitle
  },

  newDeliveryCard: {
    height: 206,
    padding: 12
  },

  newDeliveryCardContent: {
    marginTop: -8,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
