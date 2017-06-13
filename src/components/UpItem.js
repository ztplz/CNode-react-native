/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React,  { Component } from 'react';]

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class UpItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => likeIt(props.floor, props.isLogged, props.data.is_uped, props.accesstoken, props.data.id, props.navigation, props.actions.upedItem, props.actions.getTopicDetailData)}
        >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='ios-thumbs-up' size={20} color={data.is_uped? '#605e57' : '#b7bfb7'} />
            <Text style={styles.thumbsUpNumber}>{data.ups.length}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
  const stateOfTopicDetail = state.TopicDetailState.toJS();
  return {
    data: stateOfTopicDetail.data
  }
}

export default UpItem;
