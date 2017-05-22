/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { combineReducers } from 'redux';
import HomePageState from './HomePageState';
import UnreadMessageState from './UnreadMessageState';
import HavereadMessageState from './HavereadMessageState';
import GlobalState from './GlobalState';
import TopicDetailState from './TopicDetailState';
import UserDetailState from './UserDetailState';
import CollectionState from './CollectionState';
import QRCodeScanState from './QRCodeScanState';
import UserRecentState from './UserRecentState';
import MeState from './MeState';
import NewTopicState from './NewTopicState';
// import MessageState from './MessageState';

export default combineReducers({
  HomePageState,
  UnreadMessageState,
  HavereadMessageState,
  GlobalState,
  TopicDetailState,
  UserDetailState,
  CollectionState,
  QRCodeScanState,
  UserRecentState,
  MeState,
  NewTopicState,
  // MessageState
});
