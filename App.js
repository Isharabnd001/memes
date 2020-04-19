import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
//import cacheAssetsAsync from './utilities/cacheAssetsAsync';

export default class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
   // this._loadAssetsAsync();
  }

  // async _loadAssetsAsync() {
  //   try {
  //     await cacheAssetsAsync({
  //       images: [require('./assets/images/header.png')],
  //     });
  //   } catch (e) {
  //     console.log(e.message);
  //   } finally {
  //     this.setState({ appIsReady: true });
  //   }
  // }

  render() {
    
      return (
        <View style={styles.container}>
          <StatusBar barStyle="default" />
          <View style={styles.statusBarUnderlay} />
          <HomeScreen />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: '#fff',
  },
});
