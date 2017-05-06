/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fork } from 'redux-saga/effects';
import { watchFetchHomePageData, watchRefreshHomePageData, watchFetchMoreHomePageData } from './homepageSaga';
import { watchFetchUnreadMessage, watchRefreshUnreadMessage } from './unreadMessageSaga';
import { watchFetchHavereadMessage, watchRefreshHavereadMessage } from './havereadMessageSaga';
import { watchFetchTopicDetailData, watchRefreshTopicDetailData, watchTopicCollect, watchNotTopicCollect } from './topicdetailSaga';
import { watchFetchUserDetailData } from './userdetailSaga';
import { watchFetchCollectionData, watchRefreshCollectionData } from './collectionSaga';
import { watchUserLoginToCNode } from './qrcodescanSaga';
import { watchRefreshRecent } from './recentSaga';

export default function* rootSaga() {
  yield [
    fork(watchFetchHomePageData),
    fork(watchRefreshHomePageData),
    fork(watchFetchMoreHomePageData),
    fork(watchFetchUnreadMessage),
    fork(watchRefreshUnreadMessage),
    fork(watchFetchHavereadMessage),
    fork(watchRefreshHavereadMessage),
    fork(watchFetchTopicDetailData),
    fork(watchRefreshTopicDetailData),
    fork(watchTopicCollect),
    fork(watchNotTopicCollect),
    fork(watchFetchUserDetailData),
    fork(watchFetchCollectionData),
    fork(watchRefreshCollectionData),
    fork(watchUserLoginToCNode),
    fork(watchRefreshRecent),
  ];
}
