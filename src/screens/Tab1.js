import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation'

class Tab1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            resizeMode='center'
            source={require('../assets/icons/joke.png')}
            style={styles.image}/>
        <Button
          title="Stack JA"
          onPress={() => this.props.navigation.navigate('Stack1')}
        />
      </View>
    );
  }
}

class Tab2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            resizeMode='center'
            source={require('../assets/icons/wow.png')}
            style={styles.image}/>
      </View>
    );
  }
}

class Tab3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            resizeMode='center'
            source={require('../assets/icons/um.png')}
            style={styles.image}/>
      </View>
    );
  }
}

class Stack1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
          resizeMode='center'
          source={require('../assets/icons/sad.png')}
          style={styles.image}/>
          <Text>
            WELCOME STACK 1
          </Text>
      </View>
    );
  }
}

const BackTab1 = StackNavigator({
  Tab1: { screen: Tab1 },
  Stack1: { screen: Stack1 },
});

export default TabNavigator({
  Tab1: { screen: BackTab1 },
  Tab2: { screen: Tab2 },
  Tab3: { screen: Tab3 },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginTop: 10
},
icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
}
});
