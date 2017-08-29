import React, { Component } from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Text,
  List,
  Icon,
  ListItem,
  Left
} from "native-base";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listData: "" };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ listData: data });
      })
      .catch(err => {
        console.warn(err);
      });
  }
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
            <Title>Images</Title>
          </Body>
        </Header>
        <Body>
          {this.state.listData === ""
            ? <Text style={{ textAlign: "center", marginTop: 250 }}>
                Welcome to List Page
              </Text>
            : <ScrollView>
                {this.state.listData.map((value, key) =>
                  <List key={key}>
                    <ListItem>
                      <Button
                        transparent
                        onPress={() => {
                          this.props.navigation.navigate("ListItemData", {
                            list: this.state.listData,
                            name: value.name,
                            key: key
                          });
                        }}
                      >
                        <Text>
                          {value.name}
                        </Text>
                      </Button>
                    </ListItem>
                  </List>
                )}
              </ScrollView>}
        </Body>
      </Container>
    );
  }
}

export default Image;
