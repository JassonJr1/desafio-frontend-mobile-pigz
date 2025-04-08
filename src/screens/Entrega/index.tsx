import React from "react"
import { View, Text } from "react-native"

import { styles } from "./styles"
import theme from "../../styles/theme"

import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Divider } from "../../components/divider"
import { Delivery } from "../../components/delivery"
import CorrectSVG from "../../assets/confirm.svg"
import { ButtonReject } from "../../components/buttonReject"

export function Entrega() {
  return (
    <View style={styles.container}>
      <Header title="Nova Entrega" />
      <View style={styles.content}>
        <View style={styles.timeAndIdDelivery}>
          <View style={styles.timeOrId}>
            <Text style={styles.title}>Tempo Estimado</Text>
            <Text style={styles.timeOrIdValues}>30 Min</Text>
          </View>
          <View style={styles.timeOrId}>
            <Text style={styles.title}>Número de ID</Text>
            <Text style={styles.timeOrIdValues}>#6789</Text>
          </View>
        </View>
        <Divider color={theme.colors.border} />
        <View style={styles.deliveryPrice}>
          <Text style={styles.title}>Valor da Entrega</Text>
          <Text style={styles.price}>R$ 13,75</Text>
        </View>
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
          <Delivery title={"Entrega"} distance="8km" />
        </View>
        <View style={styles.deliveryInfo}>
          <View style={[styles.deliveryStepDad, { marginTop: 34 }]}>
            <View style={styles.circle} />
            <Text style={styles.step}>Coleta</Text>
          </View>
          <View style={styles.deliveryStepChild}>
            <View style={styles.shortCircle} />
            <Text style={styles.stepDescription}>{"Restaurante Recanto da Peixada \nDistância: 2km"}</Text>
          </View>
          <View style={styles.deliveryStepDad}>
            <View style={styles.circle} />
            <Text style={styles.step}>Entrega</Text>
          </View>
          <View style={styles.deliveryStepChild}>
            <View style={styles.shortCircle} />
            <Text style={styles.stepDescription}>{"Av: Cabo dos Soldados - Caranã \nDistância: 6km"}</Text>
          </View>
        </View>
        <Button title={"Aceitar"} icon={CorrectSVG} style={{ marginTop: 60, marginBottom: 15 }} />
        <ButtonReject title={"Rejeitar"} />
      </View>
    </View>
  )
}
