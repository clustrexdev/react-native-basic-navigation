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

class Home extends React.Component {
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
            <Title>Home</Title>
          </Body>
        </Header>

        <Content padder>
          <Text>Home page welcomes you</Text>
        </Content>
      </Container>
    );
  }
}

export default Home;
