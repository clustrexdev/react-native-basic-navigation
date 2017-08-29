import React, { Component } from 'react';
import {Container,Header,Title,Content,Button,Body,Text,Left,Right,Icon} from "native-base";

class ListEnd extends React.Component {
    render(){
        return (
            <Container>
            <Header>
              <Body>
                <Title>End of Page</Title>
              </Body>
            </Header>
    
            <Content padder>
              <Text>Thank You</Text>
            </Content>
          </Container>
        );
    }
}

export default ListEnd;