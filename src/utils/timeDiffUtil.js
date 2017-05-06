/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';

export default function timeDiff(time) {
  return moment(time).subtract(moment().utcOffset(), 'minutes').fromNow();
}
