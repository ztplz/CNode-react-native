/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fork } from 'redux-saga/effects';
import { watchFetchHomePageData, watchRefreshHomePageData, watchFetchMoreHomePageData } from './homepageSaga';
import { watchFetchUnreadMessage, watchRefreshUnreadMessage, watchUnreadMessageReply } from './unreadMessageSaga';
import { watchFetchHavereadMessage, watchRefreshHavereadMessage, watchHavereadMessageReply } from './havereadMessageSaga';
import { watchFetchTopicDetailData, watchRefreshTopicDetailData, watchTopicCollect, watchNotTopicCollect, watchUserUpedItem } from './topicdetailSaga';
import { watchFetchUserDetailData, watchRefreshUserDetailData } from './userdetailSaga';
import { watchFetchCollectionData, watchRefreshCollectionData } from './collectionSaga';
import { watchUserLoginToCNode } from './qrcodescanSaga';
import { watchFetchMeData, watchRefreshMe } from './meSaga';
import { watchPostToCNode } from './newtopicSaga';
import { watchReplyToTopic } from './replypageSaga';

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
    fork(watchUserUpedItem),
    fork(watchFetchUserDetailData),
    fork(watchRefreshUserDetailData),
    fork(watchFetchCollectionData),
    fork(watchRefreshCollectionData),
    fork(watchUserLoginToCNode),
    fork(watchFetchMeData),
    fork(watchRefreshMe),
    fork(watchPostToCNode),
    fork(watchReplyToTopic)
  ];
}
