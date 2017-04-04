/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { PixelRatio, Dimensions } from 'react-native';

export const DeviceWidth = Dimensions.get('window').width;
export const DeviceHeight = Dimensions.get('window').height;
export const pixel = 1 / PixelRatio.get();
