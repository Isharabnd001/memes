import React, {useCallback, useState, useRef} from 'react';

import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  ActivityIndicator,
  Alert,
  ImageBackground,
  PermissionsAndroid,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import RangeSlider from 'rn-range-slider';
const deviceWidth = Dimensions.get('window').width;
import Share from 'react-native-share';
import { TestIds } from '@react-native-firebase/admob';
import { 
  AdMobBanner, 
  AdMobInterstitial, 
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'


export default class ResultScreen extends React.Component {
  state = {
    loaded: false,
    uriImage: '',
    textColor: 'white',
    fontSizeVal: 30,
  };
  componentWillReceiveProps(nextProps) {
    if (!this.props.showResult && nextProps.showResult) {
      this.setState({loaded: false});
    }
  }
  onSaveImage = () => {
    var uri = this.refs.memeImage.props.source.uri;
    console.log(uri);
    CameraRoll.saveToCameraRoll(uri, 'photo');
    Alert.alert('සුරැකුවා', 'Gallery එකට Save කරා');
  };

  onCapture = (uri) => {
    console.log('do something with ', uri);
    alert(uri);
    this.setState({
      uriImage: uri,
    });
  };

  checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  captureRefView = () => {
    captureRef(this.refs.viewRef, {
      format: 'jpg',
      quality: 0.9,
    }).then(
      async (uri) => {
        console.log(uri);
        this.setState({
          uriImage: uri.toString(),
        });
        // alert(uri)

        if (Platform.OS === 'android') {
          await this.checkAndroidPermission();
        }
        CameraRoll.saveToCameraRoll(uri)
          .then(Alert.alert('සුරැකුවා', 'Gallery එකට Save කරා'))
          .catch((err) => console.log('err:', err));

          AdMobInterstitial.setAdUnitID(TestIds.INTERSTITIAL);
          //AdMobInterstitial.setTestDeviceID('EMULATOR');
          AdMobInterstitial.requestAd(AdMobInterstitial.showAd);
      },
      (error) => console.error('Oops, snapshot failed', error),
    );
  };

  changeTextColor = (color) => {
    this.setState({
      textColor: color,
    });
  };

  changeFontSize = (number) => {
    alert(number);
    // this.setState({
    //   fontSizeVal:number
    // })
    console.log(number);
  };

  shareFacebook = () => {
    //  const {uriImage} = this.state;

    captureRef(this.refs.viewRef, {
      format: 'jpg',
      quality: 0.9,
    }).then(async (uri) => {
      console.log(uri);
      this.setState({
        uriImage: uri.toString(),
      });


      const url = uri.toString();
      const title = 'සිංහල Meme පහසුවෙන් - Sinhala Meme Generator';
      const message = 'Download Sinhala Meme Generator';
      // const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
      const options = Platform.select({
        ios: {
          activityItemSources: [
            {
              // For sharing url with custom title.
              placeholderItem: {type: 'url', content: url},
              item: {
                default: {type: 'url', content: url},
              },
              subject: {
                default: title,
              },
              linkMetadata: {originalUrl: url, url, title},
            },
            {
              // For sharing text.
              placeholderItem: {type: 'text', content: message},
              item: {
                default: {type: 'text', content: message},
                message: null, // Specify no text to share via Messages app.
              },
              linkMetadata: {
                // For showing app icon on share preview.
                title: message,
              },
            },
            {
              // For using custom icon instead of default text icon at share preview when sharing with message.
              placeholderItem: {
                type: 'url',
              },
              item: {
                default: {
                  type: 'text',
                  content: `${message} ${url}`,
                },
              },
              linkMetadata: {
                title: message,
              },
            },
          ],
        },
        default: {
          title,
          subject: title,
          message: `${message} ${url}`,
        },
      });

      Share.open(options);
    });
  };

  render() {
    const {top = '', bottom = '', meme, showResult} = this.props;

    // const onCapture = useCallback(() => {
    //   full.current.capture().then(uri => setPreview({ uri }));
    // }, []);

    let topResult = top;
    let bottomResult = bottom;

    topResult = topResult.toString().replace('~q', '?');
    bottomResult = bottomResult.toString().replace('~q', '?');

    topResult = topResult.toString().replace('~h', '#');
    bottomResult = bottomResult.toString().replace('~h', '#');

    const {loaded, uriImage, textColor, fontSizeVal} = this.state;
    if (!showResult) {
      return null;
    }
    // http://memegen.link/${meme}/${top}/${bottom}.jpg
    console.log(`http://memegen.link/${meme}/_.jpg`);
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* {!loaded ? <View style={{alignItems:'center',justifyContent: 'center'}}><ActivityIndicator />
           <Text style={styles.textStyle}> {'සකසමින් පවතී .....'} </Text></View>: null} */}
          {/* <Image
            ref="memeImage"
            source={{uri: `http://memegen.link/${meme}/_.jpg`}}
            resizeMode={'contain'}
            style={{width: deviceWidth, height: deviceWidth}}
            onLoad={() => this.setState({loaded: true})} /> */}
          {/* <Image
      style={{width: 100, height: 100}}
      source={{uri: uriImage
    }}/> */}
   <View style={{height:110}}> 
     <AdMobBanner
  adSize="largeBanner"
  adUnitID={TestIds.BANNER} 
  testDeviceID="EMULATOR"
   />
   </View>
          <ViewShot
            ref="viewRef"
            options={{format: 'jpg', quality: 0.9}}
            captureMode="mount">
            <ImageBackground
              ref="memeImage"
              source={{uri: `http://memegen.link/${meme}/_.jpg`}}
              resizeMode={'cover'}
              style={{
                width: deviceWidth,
                height: deviceWidth,
                backgroundColor: 'black',
              }}>
              {/* <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
     <Text>Centered text</Text>
   </View> */}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: deviceWidth,
                  height: deviceWidth,
                  position: 'absolute',
                  top: 0,
                  left: 10,
                  right: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginRight: 10,
                  }}>
                  <Text
                    style={[
                      styles.imageText,
                      {color: textColor},
                      {fontSize: fontSizeVal},
                    ]}>
                    {topResult.toString().replace('_', ' ')}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                    marginRight: 10,
                  }}>
                  <Text
                    style={[
                      styles.imageText,
                      {color: textColor},
                      {fontSize: fontSizeVal},
                    ]}>
                    {bottomResult.toString().replace('_', ' ')}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </ViewShot>
          {/* <AdMobBanner
  adSize="SMART_BANNER"
  adUnitID={TestIds.BANNER} 
  testDeviceID="EMULATOR"
   /> */}
        </View>
        {/* {loaded ? */}
        {/* onPress={this.onSaveImage} */}

        <View
          style={{flexDirection: 'row', margin: 5, justifyContent: 'center'}}>
          {/* <View>
        <Text style={styles.fontText}>අක්‍ෂර ප්‍රමාණය :</Text>

        </View> */}

          <RangeSlider
            style={{width: 300, height: 80}}
            rangeEnabled={false}
            gravity={'center'}
            min={10}
            max={80}
            step={5}
            initialHighValue={fontSizeVal}
            initialLowValue={fontSizeVal}
            selectionColor="#3df"
            blankColor="#f618"
            valueType="number"
            onValueChanged={(low, high, fromUser) => {
              // alert(low)
              this.setState({fontSizeVal: low});
            }}
          />
        </View>

        {/* <Text style={styles.colorText}>අක්‍ෂර පාට :</Text> */}

        <View style={{flexDirection: 'row', margin: 5}}>
          <TouchableOpacity
            onPress={() => this.changeTextColor('white')}
            style={{
              flexDirection: 'row',
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 5,
              margin: 2,
            }}>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.changeTextColor('black')}
            style={{
              flexDirection: 'row',
              flex: 1,
              backgroundColor: 'black',
              borderRadius: 5,
              margin: 2,
            }}>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.changeTextColor('red')}
            style={{
              flexDirection: 'row',
              flex: 1,
              backgroundColor: 'red',
              borderRadius: 5,
              margin: 2,
            }}>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.changeTextColor('green')}
            style={{
              flexDirection: 'row',
              flex: 1,
              backgroundColor: 'green',
              borderRadius: 5,
              margin: 2,
            }}>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.changeTextColor('blue')}
            style={{
              flexDirection: 'row',
              flex: 1,
              backgroundColor: 'blue',
              borderRadius: 5,
              margin: 2,
            }}>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.changeTextColor('orange')}
            style={{
              flexDirection: 'row',
              flex: 1,
              backgroundColor: 'orange',
              borderRadius: 5,
              margin: 2,
            }}>
            <Text />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.changeTextColor('grey')}
            style={{
              flexDirection: 'row',
              flex: 1,
              backgroundColor: 'grey',
              borderRadius: 5,
              margin: 2,
            }}>
            <Text />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

<TouchableOpacity onPress={() => this.props.onToggleResult()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>💩 ආපසු</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.captureRefView}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>💾 සුරකින්න</Text>
            </View>
          </TouchableOpacity>

         

          <TouchableOpacity onPress={() => this.shareFacebook()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>💞බෙදාගන්න</Text>
          </View>
            {/* <Image
              source={require('../assets/icons/facebook.png')}
              resizeMode={'contain'}
              style={{width: 40, height: 40, margin: 5, borderRadius: 5}}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  button: {
    margin: 5,
    backgroundColor: '#F48729',
    padding: 12,
    borderRadius: 5,
    width: deviceWidth/3.3,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'iskpota',
  },
  textStyle: {
    color: '#F48729',
  },
  imageText: {
    fontFamily: 'iskpota',
    fontSize: 30,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageTextBlack: {
    color: 'black',
    fontFamily: 'iskpota',
    fontSize: 30,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageTextRed: {
    color: 'red',
    fontFamily: 'iskpota',
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageTextOrange: {
    color: 'orange',
    fontFamily: 'iskpota',
    fontSize: 30,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageTextGreen: {
    color: 'green',
    fontFamily: 'iskpota',
    fontSize: 30,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageTextBlue: {
    color: 'blue',
    fontFamily: 'iskpota',
    fontSize: 30,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageTextGrey: {
    color: 'grey',
    fontFamily: 'iskpota',
    fontSize: 30,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  colorText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'iskpota',
    fontSize: 20,
  },
  fontInput: {
    height: 40,
    width: 75,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    paddingHorizontal: 10,
  },
  fontText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'iskpota',
    fontSize: 20,
  },
});
