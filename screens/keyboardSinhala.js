import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { 
  CustomTextInput,
  register,
  insertText,
  backSpace,
  uninstall,
  hideKeyboard,
  switchSystemKeyboard
} from 'react-native-custom-keyboard-kit';

export default class MyKeyboard extends Component {


  onPressN1 = () => {
    insertText(this.props.tag, '1');
  }
   
  onPressN2 = () => {
    insertText(this.props.tag, '2');
  }

  onPressN3 = () => {
    insertText(this.props.tag, '3');
  }
  
  onPressN4 = () => {
    insertText(this.props.tag, '4');
  }

  onPressN5 = () => {
    insertText(this.props.tag, '5');
  }
  
  onPressN6 = () => {
    insertText(this.props.tag, '6');
  }

  onPressN7 = () => {
    insertText(this.props.tag, '7');
  }

  onPressN8 = () => {
    insertText(this.props.tag, '8');
  }

  onPressN9 = () => {
    insertText(this.props.tag, '9');
  }


  onPressN0 = () => {
    insertText(this.props.tag, '0');
  }



  onPress1 = () => {
    insertText(this.props.tag, 'අ');
  }
   
  onPress2 = () => {
    insertText(this.props.tag, 'ඉ');
  }

  onPress3 = () => {
    insertText(this.props.tag, 'ඊ');
  }
  
  onPress4 = () => {
    insertText(this.props.tag, 'උ');
  }

  onPress5 = () => {
    insertText(this.props.tag, 'එ');
  }
  
  onPress6 = () => {
    insertText(this.props.tag, 'ඔ');
  }

  onPress7 = () => {
    insertText(this.props.tag, 'ඕ');
  }

  onPress8 = () => {
    insertText(this.props.tag, 'ක');
  }

  onPress9 = () => {
    insertText(this.props.tag, 'ඛ');
  }


                         

  onPress10 = () => {
    insertText(this.props.tag, 'ග');
  }
   
  onPress11 = () => {
    insertText(this.props.tag, 'ඝ');
  }

  onPress12 = () => {
    insertText(this.props.tag, 'ඞ');
  }
  
  onPress13 = () => {
    insertText(this.props.tag, 'ඟ');
  }

  onPress14 = () => {
    insertText(this.props.tag, 'ච');
  }
  
  onPress15 = () => {
    insertText(this.props.tag, 'ඡ');
  }

  onPress16 = () => {
    insertText(this.props.tag, 'ජ');
  }

  onPress17 = () => {
    insertText(this.props.tag, 'ඣ');
  }

  onPress18 = () => {
    insertText(this.props.tag, 'ඤ');
  }

  onPress19 = () => {
    insertText(this.props.tag, 'ඥ');
  }

  onPress20 = () => {
    insertText(this.props.tag, 'ඦ');
  }
   
  onPress21 = () => {
    insertText(this.props.tag, 'ට');
  }

  onPress22 = () => {
    insertText(this.props.tag, 'ඨ');
  }
  
  onPress23 = () => {
    insertText(this.props.tag, 'ඩ');
  }

  onPress24 = () => {
    insertText(this.props.tag, 'ඪ');
  }
  
  onPress25 = () => {
    insertText(this.props.tag, 'ඳ');
  }

  onPress26 = () => {
    insertText(this.props.tag, 'ඬ');
  }

  onPress27 = () => {
    insertText(this.props.tag, 'ත');
  }

  onPress28 = () => {
    insertText(this.props.tag, 'ථ');
  }

  onPress29 = () => {
    insertText(this.props.tag, 'ද');
  }

  onPress30 = () => {
    insertText(this.props.tag, 'ධ');
  }
   
  onPress31 = () => {
    insertText(this.props.tag, 'න');
  }

  onPress32 = () => {
    insertText(this.props.tag, 'ණ');
  }
  



  onPress33 = () => {
    insertText(this.props.tag, 'ප');
  }

  onPress34 = () => {
    insertText(this.props.tag, 'ඵ');
  }
  
  onPress35 = () => {
    insertText(this.props.tag, 'බ');
  }

  onPress36 = () => {
    insertText(this.props.tag, 'භ');
  }

  onPress37 = () => {
    insertText(this.props.tag, 'ම');
  }

  onPress38 = () => {
    insertText(this.props.tag, 'ඹ');
  }

  onPress39 = () => {
    insertText(this.props.tag, 'ය');
  }
  
  onPress40 = () => {
    insertText(this.props.tag, 'ර');
  }
   
  onPress41 = () => {
    insertText(this.props.tag, 'ල');
  }

  onPress42 = () => {
    insertText(this.props.tag, 'ළ');
  }
  
  onPress43 = () => {
    insertText(this.props.tag, 'ව');
  }

  onPress44 = () => {
    insertText(this.props.tag, 'හ');
  }
  
  onPress45 = () => {
    insertText(this.props.tag, 'ශ');
  }

  onPress46 = () => {
    insertText(this.props.tag, 'ෂ');
  }

  onPress47 = () => {
    insertText(this.props.tag, 'ස');
  }

  onPress48 = () => {
    insertText(this.props.tag, 'ෆ');
  }

  

  onPress49 = () => {
    insertText(this.props.tag, '්‍');
  }

               
  onPress50 = () => {
    insertText(this.props.tag, 'ා');
  }

  onPress51 = () => {
    insertText(this.props.tag, 'ැ');
  }

  onPress52 = () => {
    insertText(this.props.tag, 'ෑ');
  }
  
  onPress53 = () => {
    insertText(this.props.tag, 'ි');
  }

  onPress54 = () => {
    insertText(this.props.tag, 'ී');
  }
  
  onPress55 = () => {
    insertText(this.props.tag, 'ු');
  }

  onPress56 = () => {
    insertText(this.props.tag, 'ුූ');
  }

  onPress57 = () => {
    insertText(this.props.tag, 'ෙ');
  }

  onPress58 = () => {
    insertText(this.props.tag, 'ේ');
  }


  onPress59 = () => {
    insertText(this.props.tag, 'ෛ');
  }

  onPress60 = () => {
    insertText(this.props.tag, 'ො');
  }
   
  onPress61 = () => {
    insertText(this.props.tag, 'ෝ');
  }

  onPress62 = () => {
    insertText(this.props.tag, 'ෞ');
  }
  



  onPress63 = () => {
    insertText(this.props.tag, 'ෳ');
  }

  onPress64 = () => {
    insertText(this.props.tag, 'ෘ‍');
  }
  
  onPress65 = () => {
    insertText(this.props.tag, 'ං');
  }

  onPress66 = () => {
    insertText(this.props.tag, 'ඃ');
  }

  onPress67 = () => {
    insertText(this.props.tag, 'ඍ');
  }

  onPress68 = () => {
    insertText(this.props.tag, 'ඎ');
  }

  onPress69 = () => {
    insertText(this.props.tag, 'ඏ');
  }
  
  onPress70 = () => {
    insertText(this.props.tag, 'ඐ');
  }
   
  onPress71 = () => {
    insertText(this.props.tag, '#');
  }

  onPress72 = () => {
    insertText(this.props.tag, '?');
  }
  
  onPress73 = () => {
    insertText(this.props.tag, '!');
  }

  onPressSpace = () => {
    insertText(this.props.tag,' ');
  }
  

  onPressBackSpace = () => {
    backSpace(this.props.tag);
  }
  

  
  onPressHideKeyboard = () => {
    hideKeyboard(this.props.tag);
  }

  onPressSwitchKeyboard = () => {
    switchSystemKeyboard(this.props.tag);
  }

  render() {
    return (
      <View>
          <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN1}>
              <Text style={styles.buttonLabel}>
                1
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN2}>
              <Text style={styles.buttonLabel}>
                2
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN3}>
              <Text style={styles.buttonLabel}>
                3
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN4}>
              <Text style={styles.buttonLabel}>
                4
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN5}>
              <Text style={styles.buttonLabel}>
                5
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN6}>
              <Text style={styles.buttonLabel}>
                6
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN7}>
              <Text style={styles.buttonLabel}>
                7
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN8}>
              <Text style={styles.buttonLabel}>
                8
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN9}>
              <Text style={styles.buttonLabel}>
                9
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressN0}>
              <Text style={styles.buttonLabel}>
                0
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress1}>
              <Text style={styles.buttonLabel}>
              අ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress2}>
              <Text style={styles.buttonLabel}>
              ඉ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress3}>
              <Text style={styles.buttonLabel}>
              ඊ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress4}>
              <Text style={styles.buttonLabel}>
              උ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress5}>
              <Text style={styles.buttonLabel}>
              එ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress6}>
              <Text style={styles.buttonLabel}>
              ඔ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress7}>
              <Text style={styles.buttonLabel}>
               ‍ඕ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress8}>
              <Text style={styles.buttonLabel}>
              ක
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress9}>
              <Text style={styles.buttonLabel}>
              ඛ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress10}>
              <Text style={styles.buttonLabel}>
              ග
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress11}>
              <Text style={styles.buttonLabel}>
              ඝ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress12}>
              <Text style={styles.buttonLabel}>
              ඞ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress13}>
              <Text style={styles.buttonLabel}>
              ඟ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress14}>
              <Text style={styles.buttonLabel}>
              ච
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress15}>
              <Text style={styles.buttonLabel}>
              ඡ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress16}>
              <Text style={styles.buttonLabel}>
              ජ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress17}>
              <Text style={styles.buttonLabel}>
              ඣ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress18}>
              <Text style={styles.buttonLabel}>
              ඤ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress19}>
              <Text style={styles.buttonLabel}>
              ඥ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress20}>
              <Text style={styles.buttonLabel}>
              ඦ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress21}>
              <Text style={styles.buttonLabel}>
              ට
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress22}>
              <Text style={styles.buttonLabel}>
              ඨ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress23}>
              <Text style={styles.buttonLabel}>
              ඩ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress24}>
              <Text style={styles.buttonLabel}>
              ඪ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress25}>
              <Text style={styles.buttonLabel}>
              ඳ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress26}>
              <Text style={styles.buttonLabel}>
              ඬ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress27}>
              <Text style={styles.buttonLabel}>
              ත
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress28}>
              <Text style={styles.buttonLabel}>
              ථ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress29}>
              <Text style={styles.buttonLabel}>
              ද
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress30}>
              <Text style={styles.buttonLabel}>
              ධ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress31}>
              <Text style={styles.buttonLabel}>
              න
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress32}>
              <Text style={styles.buttonLabel}>
              ණ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress33}>
              <Text style={styles.buttonLabel}>
              ප
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress34}>
              <Text style={styles.buttonLabel}>
              ඵ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress35}>
              <Text style={styles.buttonLabel}>
              බ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress36}>
              <Text style={styles.buttonLabel}>
              භ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress37}>
              <Text style={styles.buttonLabel}>
              ම
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress38}>
              <Text style={styles.buttonLabel}>
              ඹ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress39}>
              <Text style={styles.buttonLabel}>
              ය
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress40}>
              <Text style={styles.buttonLabel}>
              ර
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress41}>
              <Text style={styles.buttonLabel}>
              ල
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress42}>
              <Text style={styles.buttonLabel}>
              ළ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress43}>
              <Text style={styles.buttonLabel}>
              ව
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress44}>
              <Text style={styles.buttonLabel}>
              හ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress45}>
              <Text style={styles.buttonLabel}>
              ශ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress46}>
              <Text style={styles.buttonLabel}>
              ෂ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress47}>
              <Text style={styles.buttonLabel}>
              ස
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress48}>
              <Text style={styles.buttonLabel}>
              ෆ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress49}>
              <Text style={styles.buttonLabel}>
              ්‍
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress50}>
              <Text style={styles.buttonLabel}>
              ‍ා
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress51}>
              <Text style={styles.buttonLabel}>
              ැ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress52}>
              <Text style={styles.buttonLabel}>
              ෑ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress53}>
              <Text style={styles.buttonLabel}>
              ි
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress54}>
              <Text style={styles.buttonLabel}>
              ී
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress55}>
              <Text style={styles.buttonLabel}>
              ු
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress56}>
              <Text style={styles.buttonLabel}>
              ුූ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress57}>
              <Text style={styles.buttonLabel}>
              ෙ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress58}>
              <Text style={styles.buttonLabel}>
              ේ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress59}>
              <Text style={styles.buttonLabel}>
              ෛ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress60}>
              <Text style={styles.buttonLabel}>
              ො
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress61}>
              <Text style={styles.buttonLabel}>
              ෝ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress62}>
              <Text style={styles.buttonLabel}>
              ෞ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress63}>
              <Text style={styles.buttonLabel}>
              ෳ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress64}>
              <Text style={styles.buttonLabel}>
              ෘ‍
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress65}>
              <Text style={styles.buttonLabel}>
              ං
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress66}>
              <Text style={styles.buttonLabel}>
              ඃ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress67}>
              <Text style={styles.buttonLabel}>
              ඍ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress68}>
              <Text style={styles.buttonLabel}>
              ඎ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress69}>
              <Text style={styles.buttonLabel}>
              ඏ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress70}>
              <Text style={styles.buttonLabel}>
              ඐ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.signButton}>
            <TouchableOpacity onPress={this.onPress71}>
              <Text style={styles.buttonLabelSign}>
                #
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signButton}>
            <TouchableOpacity onPress={this.onPress72}>
              <Text style={styles.buttonLabelSign}>
                ?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signButton}>
            <TouchableOpacity onPress={this.onPress73}>
              <Text style={styles.buttonLabelSign}>
                !
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spaceButton}>
            <TouchableOpacity onPress={this.onPressSpace}>
              <Text style={styles.buttonLabelSpace}>
                ________
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keyboardButton}>
            <TouchableOpacity onPress={this.onPressSwitchKeyboard}>
              <Text style={styles.buttonLabelKey}>
                abc..
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={this.onPressBackSpace}>
              <Text style={styles.buttonLabelBack}>
                {'<--'}
              </Text>
            </TouchableOpacity>
          </View>
         
        </View>

       
      </View>
    );
  }
}

register('price', () => MyKeyboard);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#808080",
    width: 270,
    fontSize: 19,
  },
  buttonLabel: {
    fontSize: 15,
    borderWidth: 0.2,
    borderColor: "#808080",
     padding: 1.5,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
   
    
  },

  buttonLabelBack: {
    fontSize: 15,
    borderWidth: 0.2,
    borderColor: "#808080",
     padding: 1.5,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    backgroundColor:'#DC143C',
    opacity: 0.3
  },

  buttonLabelSpace: {
    fontSize: 15,
    borderWidth: 0.2,
    borderColor: "#808080",
     padding: 1.5,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    backgroundColor:'#DCDCDC',
    opacity: 0.3
      
  },
  buttonLabelSign: {
    fontSize: 15,
    borderWidth: 0.2,
    borderColor: "#808080",
     padding: 1.5,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    backgroundColor:'#90EE90',
    opacity: 0.3
  },

  buttonLabelKey: {
    fontSize: 15,
    borderWidth: 0.2,
    borderColor: "#808080",
     padding: 1.5,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    backgroundColor:'#87CEEB',
    opacity: 0.3
  },
  button: {
    width: "10%",
  },
  signButton: {
    width: "10%",
 
  },
  spaceButton: {
    width: "30%",
    
  },
  backButton: {
    width: "20%",
   
  },

  keyboardButton: {
    width: "20%",
      
  },

});