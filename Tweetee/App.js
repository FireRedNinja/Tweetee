import React from 'react';
import { 
  StyleSheet,  
  View,
  Image
} from 'react-native';
import {
  Container, 
  Content, 
  Header,
  H1, 
  Button,
  Card,
  Text,
  CardItem,
  Left,
  Body,
  Right,
  Input,
  Item,
  Label,
} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf';
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }  

  

  render() {
  
    return (
<<<<<<< Updated upstream
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

              <Button iconLeft padding={20} style={{flex: 1}}>
                <Icon name='camera-alt' />
                {/* <Text aadjustsFontSizeToFit minimumFontScale={0.5}>Camera</Text> */}
              </ Button>

              <Button iconLeft Light padding={20} style={{flex: 1}}>
                <Icon name='file-upload' />
                {/* <Text adjustsFontSizeToFit minimumFontScale={0.5}>Upload</Text> */}
              </ Button>

              <Button iconLeft Light padding={20} style={{flex: -1}}>
                <Icon name='translate' />
                {/* <Text adjustsFontSizeToFit minimumFontScale={0.01}>Translate</Text> */}
              </ Button>

            </CardItem>
          </Card>
        </Container>
      </Container>
    );
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
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
    paddingBottom: 24,
    alignContent: "center",
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
    // bottom: 0,
    width: "100%",
  },
  inputContainer: {
    flex: 1,
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
<<<<<<< Updated upstream
  Text: {
    fontFamily: 'Roboto_medium',
  } 
});
=======

});
>>>>>>> Stashed changes
