import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },

  content: {
    paddingHorizontal: 24,
    marginTop: 59
  },

  timeAndIdDelivery: {
    flexDirection: "row",
    paddingHorizontal: 40,
    justifyContent: "space-between"
  },
  timeOrId: {
    alignItems: "center"
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.gray
  },
  timeOrIdValues: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.primary
  },

  deliveryPrice: {
    alignItems: "center",
    marginTop: 20
  },

  price: {
    fontFamily: theme.fonts.bold,
    fontSize: 35,
    color: theme.colors.primary,
    marginTop: -6
  },
  deliveryInfo: {
    height: 174,
    marginLeft: 42,
    borderLeftWidth: 1,
    borderColor: theme.colors.border
  },
  deliveryStepDad: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  circle: {
    width: 15,
    height: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    marginLeft: -8.5
  },
  step: {
    fontSize: 18,
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary,
    marginLeft: 9,
    paddingTop: 3
  },

  deliveryStepChild: {
    flexDirection: "row"
  },
  shortCircle: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.primary,
    marginLeft: -5,
    backgroundColor: "white",
    marginTop: 7
  },
  stepDescription: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray,
    marginLeft: 12
  }
})
