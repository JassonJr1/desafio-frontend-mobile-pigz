import React from "react"
import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles"

import { BackGround } from "../../components/background"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { ButtonExternalService } from "../../components/ButtonExternalService"
import { Divider } from "../../components/divider"

import LogoGoogle from "../../assets/logo_google.svg"
import LogoSVG from "../../assets/pigz-logotipo-branco.svg"

export default function Login() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate("Tabs")
  }

  return (
    <KeyboardAvoidingView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <LogoSVG />
            <Text style={styles.logoSubtitle}>Para entregadores</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Login</Text>
            <Input title={"Email ou Telefone"} />
            <Input title={"Senha"} isPassword />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <Button title={"Entrar"} onPress={handleSignIn} />
          <View style={styles.register}>
            <Text style={styles.accompanyRegisterText}>Não tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Crie agora!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerTitle}>
              <Text style={styles.footerTitleText}>Entrar com</Text>
              <Divider />
            </View>
            <ButtonExternalService title={"Continuar com o Google"} icon={LogoGoogle} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
