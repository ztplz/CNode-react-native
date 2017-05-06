/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { AsyncStorage } from 'react-native';

export default class HomePageStorage {
  save(data, key) {
    // const dataForStorage = {
    //   data: data,
    //   time: Date.now(),
    // }

    try {
      AsyncStorage.setItem(key, JSON.stringify(data))
    } catch(error) {
      //      ( >﹏<。)～
    }
  }

  get(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (error, result) => {
        if(!error) {
          const data = JSON.parse(result);
          // if(dataForStorage) {
          //   const currentTime = Date.now();
          //   if((currentTime - data.time) < 3600*1000) {
          //     resolve(dataForStorage.data);
          //   } else {
          //     reject('DATA_EXPIRE');
          //   }
          // } else {
          //   reject('DATA_IS_ERROR');
          // }
          resolve(data)
        } else {
          reject('GET_DATA_ERROR');
        }
      })
    })
  }
}
