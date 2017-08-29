import React, { Component } from "react";
import {Container,Header,Title,Content,Button,Body,Text,Card,CardItem,Icon,List,ListItem,Left,Right} from "native-base";

class ListItemData extends React.Component {
  static navigationOptions = {
    header: (
      <Header>
        <Body>
          <Title>ListItem</Title>
        </Body>
      </Header>
    )
  };
  constructor(props) {
    super(props);
    this.state = { listData: "", name: "", key: "" };
  }
  componentWillMount() {
    this.setState({
      listData: this.props.navigation.state.params.list,
      name: this.props.navigation.state.params.name,
      key: this.props.navigation.state.params.key
    });
  }
  render() {
    var i = this.state.key;
    var dataArray =this.state.listData[i];
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
            <Title>Details</Title>
          </Body>
        </Header>
          {this.state.listData === ""
            ? <Body>
                <Text style={{ textAlign: "center", marginTop: 250 }}>
                Wrongly Rendered Value
              </Text>
              </Body>
            : 
            <Content>
            <Card style={{marginTop:200}}>
                  <CardItem>
                    <Left>
                      <Text>{dataArray.id}</Text>
                    </Left>
                    <Body style={{marginLeft:'-35%'}}>
                      <Text>{dataArray.name}</Text>
                      <Text numberOfLines={1} note>{dataArray.email}</Text>
                    </Body>
                    <Right>
                      <Icon name="play" onPress={()=>{this.props.navigation.navigate('LastNavigation')}}/>
                    </Right>
                  </CardItem>
              </Card>
          </Content>
             }
      </Container>
    );
  }
}

export default ListItemData;
