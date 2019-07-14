import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import logo from "~/assets/Nubank_Logo.png";
import { Container, Top, Logo, Title } from "./styles";

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Jonathan</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}
