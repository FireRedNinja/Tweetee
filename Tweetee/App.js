import React from 'react';
import { 
  StyleSheet,  
  View,
  Image,
  ActivityIndicator,
  // Button
} from 'react-native';
import {
  Container, 
  Content, 
  Header,
  H1, 
  Card,
  Text,
  CardItem,
  Left,
  Body,
  Right,
  Input,
  Item,
  Label,
  Button,
} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    if (!this.state.loading) {
      return (
        <Container>
          <ActivityIndicator size="large" color="#0000ff" />
        </Container>
      );
    } else {
      return (
        <Container style={[styles.headerFix, styles.container]} >

          <Container style={styles.logoHeader} >
            <Image
              source={require('./res/images/ic_launcher-web.png')}
              style={{height: 80, width: 80}}
            />
            <H1 alignSelf='baseline'>Tweetee</H1>
          </Container>

          <Container style={styles.card}>
            <Card >
              
              <CardItem style={styles.inputContainer}>
                <Item floatingLabel >
                  <Label>Enter text</Label>
                  <Input multiline/>
                </Item>
              </CardItem>

              <CardItem style={styles.buttonContainer}>

                <Button  large primary style={styles.buttons}>
                  <Icon name='camera-alt' size={24} color='white'/>
                </ Button>

                <Button large primary style={styles.buttons}>
                  <Icon name='file-upload' size={24} color='white'/>
                </ Button>

                <Button large primary style={styles.buttons}>
                  <Icon name='translate' size={24} color='white'/>
                </ Button>

              </CardItem>
            </Card>
          </Container>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 32,
  },
  headerFix: {
    marginTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
  logoHeader: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    // paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 8,
    alignSelf: 'stretch',
    // margin: 16,
    // padding: 16,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  inputContainer: {
    // alignSelf: 'flex-start',
  },
  buttons: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  }
});