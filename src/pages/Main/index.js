import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { 
  Container,  
  Content,
  CardHeader,
  CardContent,
  Title,
  Description,
  Annotation,
  CardFooter 
  } from "./styles";

import Header from "../../components/Header/";
import Tabs from "../../components/Tabs/";
import Card from "../../components/Card/";
import Menu from "../../components/Menu/";

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
      <Menu />
      <Card>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>
        <CardContent>
          <Title>Saldo Disponível</Title>
          <Description>R$ 120.000,00</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$ 50,00 recebida de Jonathan Ferreira hoje às
            14h00.
          </Annotation>
        </CardFooter>
      </Card>
    </Content>
      <Tabs />
    </Container>
  );
}
