/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { AsyncStorage } from 'react-native';
import { DODGERBLUE } from '../constants/themecolor';

const THEME_COLOR = 'THEME_COLOR';

export default GlobalConfigStorage {
  saveThemeColor(themecolor) {
    AsyncStorage.setItem(THEME_COLOR, themecolor);
  }

  getThemeColor() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(THEME_COLOR, (error, result) => {
        if(!error && result) {
          resolve(result);
        } else {
          reject(DODGERBLUE);
        }
      });
    });
  }
  // save(data, key) {
  //   const keyForStorage = 'GlobalConfig' + key;
  //   try {
  //     AsyncStorage.setItem(keyForStorage, JSON.stringify(data))
  //   } catch(error) {
  //     //      ( >﹏<。)～
  //   }
  // }
  //
  // get(key) {
  //   return new Promise((resolve, reject) => {
  //     AsyncStorage.getItem(key, (error, result) => {
  //       if(!error) {
  //         const dataForStorage = JSON.parse(result);
  //         if(dataForStorage) {
  //           const currentTime = Date.now();
  //           if((currentTime - data.time) < 3600*1000) {
  //             resolve(dataForStorage.data);
  //           } else {
  //             reject('DATA_EXPIRE');
  //           }
  //         } else {
  //           reject('DATA_IS_ERROR');
  //         }
  //       } else {
  //         reject('GET_DATA_ERROR');
  //       }
  //     })
  //   })
  // }
}
