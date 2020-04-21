import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

import { 
  CustomTextInput,
  register,
} from 'react-native-custom-keyboard-kit';

import MasonryList from '@appandflow/masonry-list';
import ResultScreen from './ResultScreen';
import MyKeyboard from './keyboardSinhala'
//import { TestIds } from '@react-native-firebase/admob';

import { 
  AdMobBanner, 
  AdMobInterstitial, 
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'
const deviceWidth = Dimensions.get('window').width;
const widthHalves = deviceWidth/3;

const MEMES = ['yuno','success','xy','sparta','interesting','sk','philosoraptor','fa','tenguy', 'afraid', 'older', 'aag', 'tried', 'biw', 'stew', 'blb', 'kermit', 'bd', 'ch', 'cbg', 'wonka', 'cb', 'keanu', 'dsm', 'live', 'ants', 'doge', 'alwaysonbeat', 'ermg', 'facepalm', 'firsttry', 'fwp', 'fbf', 'fmr', 'fry', 'ggg', 'hipster', 'icanhas', 'crazypills', 'mw', 'noidea', 'regret', 'boat', 'hagrid', 'sohappy', 'captain', 'bender', 'inigo', 'iw', 'ackbar', 'happening', 'joker', 'ive', 'll', 'away', 'morpheus', 'mb', 'badchoice', 'mmm', 'jetpack', 'imsorry', 'red', 'mordor', 'oprah', 'oag', 'remembers', 'jw', 'patrick', 'rollsafe', 'sad-obama', 'sad-clinton', 'sadfrog', 'sad-bush', 'sad-biden', 'sad-boehner', 'saltbae', 'sarcasticbear', 'dwight', 'sb', 'ss', 'sf', 'dodgson', 'money', 'snek', 'sohot', 'nice', 'awesome', 'awesome', 'awkward', 'awkward', 'fetch', 'scc', 'ski', 'officespace', 'toohigh', 'bs', 'fine', 'center', 'both', 'winter', 'buzz', 'yodawg', 'yallgot', 'bad', 'elf', 'chosen'];

const MEMELIST = MEMES.map((meme, i) => ({id: i, meme}));
// const  firebaseConfig = {
//   apiKey: "AIzaSyBM9n1Iv8RpB-ZVytYsOBxmAEMbVaQkQKE",
//   databaseURL:"https://sinhala-meme-maker.firebaseio.com/",
//   projectId: "project-601067524293",
 
//   appId: "1:601067524293:android:ef531bb866cfcb901d20ac",
 
// };
register('sinhala', () => MyKeyboard);
export default class HomeScreen extends React.Component {
  state = {
    top: '',
    bottom: '',
    memes: MEMELIST,
    activeMeme: 'tenguy',
    showResult: false,
  };

  componentDidMount(){
 //  this.initializeApp();
  }
  // initializeApp=async()=>{

  //   await firebase.initializeApp(firebaseConfig);
 
  //   admob().setRequestConfiguration({
  //    // Update all future requests suitable for parental guidance
  //    maxAdContentRating: MaxAdContentRating.PG,
 
  //    // Indicates that you want your content treated as child-directed for purposes of COPPA.
  //    tagForChildDirectedTreatment: true,
 
  //    // Indicates that you want the ad request to be handled in a
  //    // manner suitable for users under the age of consent.
  //    tagForUnderAgeOfConsent: true,
  //  }).then(() => {
  //    // Request config successfully set!
  //  });
  //  }
 
  

  onChangeActiveMeme(activeMeme) {
    this.setState({
      activeMeme
    });
  }
  onToggleResult = () => {
    this.setState({
      showResult: !this.state.showResult,
    });
  }
  onShowResult = async () => {
   // InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);
  //  await firebase.initializeApp(firebaseConfig);
  //   RewardedAd.createForAdRequest(TestIds.REWARDED);

    this.setState({
      showResult: true,
    });
  }

  bannerError(){
    alert("banner Error")
  }
  processText = (input) => {
    return input.replace('_', '__').replace('-', '--').replace('?', '~q').replace('%', '~p').replace('#', '~h').replace('/', '~s').replace('\"', '\'\'').replace(' ', '_');
  }
  render() {
    const {top, bottom, memes, activeMeme, showResult} = this.state;
    return (
      <View style={styles.container}>
        {/* <BannerAd unitId={TestIds.BANNER} /> */}
        {/* <BannerAd
      unitId={ca-app-pub-4545195509459817~8863613210}
      size={BannerAdSize.FLUID}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }}
      onAdFailedToLoad={(error) => {
        console.error('Advert failed to load: ', error);
      }}
    /> */}

<View> 
     <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-4545195509459817/7188473429" 
  testDeviceID="EMULATOR"
   />
   </View>
  

        <View style={{height: 50}}>
          <Image source={require('../assets/images/ezgif-6-baa1748cc925.gif')} resizeMode={'contain'} style={{width: null, height: null, marginTop:5,flex: 1}}/>
        </View>
  
 
        {/* <TextInput underlineColorAndroid={'transparent'} style={styles.input} value={top} onChangeText={(top) => this.setState({top})} placeholder={'Input top text here'} /> */}
        <CustomTextInput
          customKeyboardType="sinhala"
          value={top} onChangeText={(top) => this.setState({top})} placeholder={'උඩ කොටස ඇතුලත් කරන්න'}
          
          style={styles.input}
        />
        {/* <TextInput underlineColorAndroid={'transparent'} style={styles.input} value={bottom} onChangeText={(bottom) => this.setState({bottom})} placeholder={'උඩ කොටස ඇතුලත් කරන්න'} /> */}
        <CustomTextInput
          customKeyboardType="sinhala"
          value={bottom} onChangeText={(bottom) => this.setState({bottom})} placeholder={'යට කොටස ඇතුලත් කරන්න'}
          
          style={styles.input}
        />
        <View style={{flex: 1}}>
          <MasonryList
            data={memes}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={this.onChangeActiveMeme.bind(this, item.meme)}>
                  <View style={styles.memeBlock}>
                    <Image source={{uri: `http://memegen.link/${item.meme}/_.jpg?preview=true&height=50`}} style={styles.memeImage}/>
                    {activeMeme == item.meme ?
                      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderWidth: 5, borderColor: '#ff0'}} />
                      : null}
                  </View>
                </TouchableOpacity>
              );
            }}
            getHeightForItem={({item}) => widthHalves}
            numColumns={3}
            keyExtractor={meme => meme.id}
          />
         
                 </View>
        <TouchableOpacity onPress={this.onShowResult}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> #$  නිපදවන්න  $#</Text>
          </View>
        </TouchableOpacity>
        <ResultScreen
          top={this.processText(top)}
          bottom={this.processText(bottom)}
          meme={activeMeme}
          showResult={showResult}
          onToggleResult={this.onToggleResult}/>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    fontFamily:'iskpota',
    fontSize:20
  },
  button: {
    backgroundColor: '#F48729',
    padding: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  memesContainer: {
    flex: 1,
    backgroundColor: '#F48729',
  },
  memeGrid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  memeBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthHalves,
    height: widthHalves,
  },
  memeImage: {
    width: widthHalves,
    height: widthHalves,
  },
});
