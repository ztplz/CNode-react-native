/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fork } from 'redux-saga/effects';
import { watchFetchHomePageData, watchRefreshHomePageData, watchFetchMoreHomePageData } from './homepageSaga';
import { watchFetchUnreadMessage, watchRefreshUnreadMessage, watchUnreadMessageReply } from './unreadMessageSaga';
import { watchFetchHavereadMessage, watchRefreshHavereadMessage, watchHavereadMessageReply } from './havereadMessageSaga';
import { watchFetchTopicDetailData, watchRefreshTopicDetailData, watchTopicCollect, watchNotTopicCollect } from './topicdetailSaga';
import { watchFetchUserDetailData } from './userdetailSaga';
import { watchFetchCollectionData, watchRefreshCollectionData } from './collectionSaga';
import { watchUserLoginToCNode } from './qrcodescanSaga';
import { watchRefreshRecent } from './recentSaga';
import { watchAppStartUp } from './startupSaga';
import { watchFetchMeData } from './meSaga';
// import { watchFetchMessage } from './messageSaga';
console.log(watchFetchMeData);

export default function* rootSaga() {
  yield [
    fork(watchFetchHomePageData),
    fork(watchRefreshHomePageData),
    fork(watchFetchMoreHomePageData),
    fork(watchFetchUnreadMessage),
    fork(watchRefreshUnreadMessage),
    fork(watchUnreadMessageReply),
    fork(watchFetchHavereadMessage),
    fork(watchRefreshHavereadMessage),
    fork(watchHavereadMessageReply),
    fork(watchFetchTopicDetailData),
    fork(watchRefreshTopicDetailData),
    fork(watchTopicCollect),
    fork(watchNotTopicCollect),
    fork(watchFetchUserDetailData),
    fork(watchFetchCollectionData),
    fork(watchRefreshCollectionData),
    fork(watchUserLoginToCNode),
    fork(watchRefreshRecent),
    fork(watchAppStartUp),
    fork(watchFetchMeData),
    // fork(watchFetchMessage),
  ];
}
