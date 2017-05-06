/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, { PropTypes } from 'react';
import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const CustomRow = props => {
  // console.log(props);
  return (
      <View style={[styles.container, props.rowStyle]}>
        <View style={styles.leftContainer}>
          {props.leftIcon? props.leftIcon : null}
          {props.title? <Text style={[styles.titleStyle, props.titleStyle]}>{props.title}</Text> : null}
        </View>
        <View style={styles.rightContainer}>
          {props.badge? <View style={[styles.badgeContainer, props.badgeStyle]}><Text style={[styles.badgeText, props.badgeTextStyle]}>{props.badge}</Text></View> : null}
          {props.rightIcon? props.rightIcon : null }
        </View>
      </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    backgroundColor: '#e24783',
    padding: 3,
    borderRadius: 15,
    marginRight: 8
  },
  badgeText: {
    fontSize: 12,
    color: '#ffffff'
  },
  titleStyle: {
    marginLeft: 8,
  }
});

// CustomRow.propTypes = {
//   props: PropTypes.shape({
//     rowStyle: PropTypes.object.isRequired,
//     leftIcon: PropTypes.object.isRequired,
//     rightIcon: PropTypes.object.isRequired,
//     titleStyle: PropTypes.object.isRequired,
//     badgeStyle: PropTypes.object.isRequired,
//     badgeTextStyle: PropTypes.object.isRequired,
//     title: PropTypes.object.isRequired,
//     badge: PropTypes.object.isRequired,
//   })
// }

export default CustomRow;
