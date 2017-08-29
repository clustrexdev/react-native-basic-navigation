import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Text,
  Icon,
  Left
} from "native-base";

class Phone extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Phone</Title>
          </Body>
        </Header>

        <Content padder>
          <Text>Phone page welcomes you</Text>
        </Content>
      </Container>
    );
  }
}

export default Phone;
