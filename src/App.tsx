import { useCallback, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins"
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { BackGround } from "./components/background"
import { Routes } from "./navigation"

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <BackGround>
      <StatusBar backgroundColor={"transparent"} translucent />
      <Routes onReady={onLayoutRootView} />
    </BackGround>
  )
}
