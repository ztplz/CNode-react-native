/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { AsyncStorage } from 'react-native';
import { DODGERBLUE } from '../constants/themecolor';

const THEME_COLOR = 'THEME_COLOR';
const USER_INFO = 'USER_INFO';
const USER_CREATE_AT = 'USER_CREATE_AT';

export default class GlobalConfigStorage {
  // save(key, value) {
  //   AsyncStorage.setItem(key, value);
  // }
  //
  // get(key) {
  //   return new Promise((resolve, reject) => {
  //     AsyncStorage.getItem(key, (error, result) => {
  //       if(!error && result) {
  //         resolve(result);
  //       } else {
  //         reject(DODGERBLUE);
  //       }
  //     });
  //   })
  // }
  saveThemeColor(themecolor) {
    AsyncStorage.setItem(THEME_COLOR, themecolor);
  }

  getThemeColor() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(THEME_COLOR, (error, result) => {
        console.log(error);
        console.log(result);
        if(!error && result) {
          // resolve(result);
          cosnole.log('getcolor success');
          resolve('#5fd251');
        } else {
          console.log('getcolor failure')
          // reject(DODGERBLUE);
          resolve(DODGERBLUE);
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

  saveUserInfo(data) {
    try {
      AsyncStorage.setItem(USER_INFO, JSON.stringify(data))
    } catch(error) {
      //
    }
  }

  getUserInfo() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(USER_INFO, (error, result) => {
        if(!error) {
          const data = JSON.parse(result);
          resolve(data);
        } else {
          reject('GET_USER_ERROR');
        }
      })
    })
  }

  saveUserCreateAt(value) {
    try {
      AsyncStorage.setItem(USER_CREATE_AT, value);
    } catch(error) {
      //
    }
  }

  getUserCreateAt() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(USER_CREATE_AT, (error, result) => {
        if(!error) {
          // const value = JSON.parse(result);
          resolve(result);
        } else {
          reject('GET_USER_CREATE_AT_ERROR');
        }
      })
    })
  }
}
