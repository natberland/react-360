import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';


export default class Hello360 extends React.Component {


  state = {
    count: 0,
  }

  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  //componentDidMount() {
  //  setInterval(this._incrementCount, 10);
  // }


  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this._incrementCount} style={styles.greetings}>
          <Text style={styles.greeting}>
            {`Count: ${this.state.count}`}
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 0, 0, 1.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
    padding: 10,
    width: 250, 
    height: 80,
    backgroundColor: '#000000',
    borderColor: '#ffffff',
    justifyContent: 'space-between'

  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
