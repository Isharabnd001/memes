import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
//import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import firebase from '@react-native-firebase/app';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';


// const  firebaseConfig = {
//   apiKey: "AIzaSyBM9n1Iv8RpB-ZVytYsOBxmAEMbVaQkQKE",
//   databaseURL:"https://sinhala-meme-maker.firebaseio.com/",
//   projectId: "project-601067524293",
//   "project_number": "601067524293",
//   "firebase_url": "https://sinhala-meme-maker.firebaseio.com",
//   "project_id": "sinhala-meme-maker",
//   "storage_bucket": "sinhala-meme-maker.appspot.com",
 
//   appId: "1:601067524293:android:ef531bb866cfcb901d20ac",
 
// };

export default class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
   // this._loadAssetsAsync();
//  this.initializeApp();
  }


  // initializeApp=async()=>{

  //  await firebase.initializeApp(firebaseConfig);

  //  admob().setRequestConfiguration({
  //   // Update all future requests suitable for parental guidance
  //   maxAdContentRating: MaxAdContentRating.PG,

  //   // Indicates that you want your content treated as child-directed for purposes of COPPA.
  //   tagForChildDirectedTreatment: true,

  //   // Indicates that you want the ad request to be handled in a
  //   // manner suitable for users under the age of consent.
  //   tagForUnderAgeOfConsent: true,
  // }).then(() => {
  //   // Request config successfully set!
  // });
  // }

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
