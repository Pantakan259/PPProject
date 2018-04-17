import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};
class Tab3 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt1}>
          JUST STOP!
        </Text>
        <Image
            resizeMode='center'
            source={require('../assets/icons/um.png')}
            style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    width: 130,
    height: 130,
    marginTop: 20
  }
});

export default Tab3
