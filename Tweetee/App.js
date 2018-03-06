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
  Picker
} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      language1: undefined,
      language2: undefined,
    };
  }

  onLanguage1Change(value) {
    this.setState({
      language1: value
    });
  }

  onLanguage2Change(value) {
    this.setState({
      language2: value
    });
  }

  render() {

    var languages = ["Afrikaans",
          "Albanian",
          "Amharic",
          "Arabic",
          "Armenian",
          "Azerbaijani",
          "Basque",
          "Belarusian",
          "Bengali",
          "Bosnian",
          "Bulgarian",
          "Burmese",
          "Catalan",
          "Cebuano",
          "Chichewa",
          "Chinese",
          "Corsican",
          "Croatian",
          "Czech",
          "Danish",
          "Dutch",
          "English (American)",
          "Esperanto",
          "Estonian",
          "Filipino",
          "Finnish",
          "French",
          "Frisian",
          "Galician",
          "Georgian",
          "German",
          "Greek",
          "Gujarati",
          "Haitian Creole",
          "Hausa",
          "Hawaiian",
          "Hebrew",
          "Hindi",
          "Hmong",
          "Hungarian",
          "Icelandic",
          "Igbo",
          "Indonesian",
          "Irish",
          "Italian",
          "Japanese",
          "Javanese",
          "Kannada",
          "Kazakh",
          "Khmer",
          "Korean",
          "Kurdish",
          "Kyrgyz",
          "Lao",
          "Latin",
          "Latvian",
          "Lithuanian",
          "Luxembourgish",
          "Macedonian",
          "Malagasy",
          "Malay",
          "Malayalam",
          "Maltese",
          "Maori",
          "Marathi",
          "Mongolian",
          "Nepali",
          "Norwegian (Bokmål)",
          "Pashto",
          "Persian",
          "Polish",
          "Portuguese",
          "Punjabi",
          "Romanian",
          "Russian",
          "Samoan",
          "Scots Gaelic",
          "Serbian",
          "Sesotho",
          "Shona",
          "Sindhi",
          "Sinhala",
          "Slovak",
          "Slovenian",
          "Somali",
          "Spanish",
          "Sundanese",
          "Swahili",
          "Swedish",
          "Tajik",
          "Tamil",
          "Telugu",
          "Thai",
          "Turkish",
          "Ukrainian",
          "Urdu",
          "Uzbek",
          "Vietnamese",
          "Welsh",
          "Xhosa",
          "Yiddish",
          "Yoruba",
          "Zulu"
        ]

    return (
      <Container style={[styles.headerFix, styles.container]} >

        <Container style={styles.logoHeader} >
          <Image
            source={require('./res/images/Logo.png')}
            style={{height: 80, width: 80}}
          />
          <H1 >Tweetee</H1>
        </Container>

        <Container style={styles.pickerContainer}>
          <Picker
            style={{width:'50%'}}
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.language1}
            onValueChange={this.onLanguage1Change.bind(this)}
            dataArray={languages}
            renderRow={(language) =>
                  <Item label={language} value='1' />
                }>
          </Picker>
          <Picker
            style={{width:'50%'}}
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.language2}
            onValueChange={this.onLanguage2Change.bind(this)}
            >
            <Item label="Wallet" value="key0" />
            <Item label="ATM Card" value="key1" />
            <Item label="Debit Card" value="key2" />
            <Item label="Credit Card" value="key3" />
            <Item label="Net Banking" value="key4" />
          </Picker>
        </Container>

        <Container style={styles.card}>
          <Card >
            
            <CardItem style={styles.inputContainer}>
              <Item >
                <Input placeholder="Enter Text" multiline/>
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
  },
  pickerContainer: {
    flexDirection: 'row'
  }
});