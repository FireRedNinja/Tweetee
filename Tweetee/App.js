import React, {
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';
import ShareMenu from 'react-native-share-menu';


Class Test {
  constructor(props) {
    super(props);
    this.state = {
      sharedText: null
    };
  }
}
  componentWillMount() {
    var that = this;
    ShareMenu.getSharedText((text :string) => {
      if (text && text.length) {
        that.setState({ sharedText: text });
      }
    })
  }

  render() {
    var text = this.state.sharedText;
    return (
      <View>
        <Text>Shared text: {text}</Text>
      </View>
    );
  }

AppRegistry.registerComponent('Test', () => Test);
