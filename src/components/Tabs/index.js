import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, TabsContainer, TabItem, TabText } from "./styles";

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: "clamp",
            })
          }
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: "clamp",
        })
      }}
    >
      <TabsContainer>
        <TouchableOpacity>
          <TabItem>
            <Icon name="person-add" size={24} color="#FFF" />
            <TabText>Indicar Amigos</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
            <Icon name="chat-bubble-outline" size={24} color="#FFF" />
            <TabText>Cobrar</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
            <Icon name="arrow-downward" size={24} color="#FFF" />
            <TabText>Depositar</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
            <Icon name="arrow-upward" size={24} color="#FFF" />
            <TabText>Transferir</TabText>
          </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
            <Icon name="lock" size={24} color="#FFF" />
            <TabText>Bloquear Cartão</TabText>
          </TabItem>
        </TouchableOpacity>
      </TabsContainer>
    </Container>
  );
}
