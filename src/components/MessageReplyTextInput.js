/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, {Component, PropTypes} from 'react';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  LayoutAnimation,
  Platform,
} from 'react-native';

const ANDROID_PLATFORM = (Platform.OS === 'android');

const DEFAULT_ANIM_DURATION = 100;

class MessageReplyTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: this.getValidHeight(props.initialHeight),
      androidFirstContentSizeChange: true,
      text: null,
    };
  }

  renderTextInput() {
    return (
      <TextInput
        multiline={true}
        {...this.props} {...this.style}
        style={[this.props.style, {height: this.getValidHeight(this.state.height)}]}
        onContentSizeChange={(event) => this.onContentSizeChange(event)}
        onChange={(event) => this.onChange(event)}
        ref={(r) => { this.textInput = r; }}
      />
    );
  }

  render() {
    if(ANDROID_PLATFORM) {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            { this.renderTextInput() }
          </View>
        </View>
      );
    } else {
      return this.renderTextInput();
    }
  }

  onContentSizeChange(event) {
    if(ANDROID_PLATFORM) {
      if(!this.state.androidFirstContentSizeChange) {
        return;
      }
      this.setState({androidFirstContentSizeChange: false});
    }
    this.handleNativeEvent(event.nativeEvent);

    if (this.props.onContentSizeChange) {
      this.props.onContentSizeChange(event);
    }
  }

  onChange(event) {
     if(ANDROID_PLATFORM && !this.state.androidFirstContentSizeChange) {
       this.handleNativeEvent(event.nativeEvent);
     }
     if (this.props.onChange) {
       this.props.onChange(event);
     }
   }

  getValidHeight(height) {
    const minCappedHeight = Math.max(this.props.minHeight, height);
    if(this.props.maxHeight == null) {
      return minCappedHeight;
    }
    return Math.min(this.props.maxHeight, minCappedHeight);
  }

  handleNativeEvent(nativeEvent) {
    let newHeight = this.state.height;
    if (nativeEvent.contentSize && this.props.autoGrowing) {
      newHeight = nativeEvent.contentSize.height;
      if (this.state.height !== newHeight && newHeight <= this.props.maxHeight && this.props.onHeightChanged) {
        this.props.onHeightChanged(newHeight, this.state.height, newHeight - this.state.height);
      }
    }

    if (this.props.animation.animated) {
      const duration = this.props.animation.duration || DEFAULT_ANIM_DURATION;
      LayoutAnimation.configureNext({...LayoutAnimation.Presets.easeInEaseOut, duration: duration});
    }

    this.setState({
      height: newHeight
    });
  }

  setNativeProps(nativeProps = {}) {
    this.textInput.setNativeProps(nativeProps);
  }

  resetHeightToMin() {
    this.setState({
      height: this.props.minHeight
    });
  }

  clear() {
    return this.textInput.clear();
  }

  focus() {
    return this.textInput.focus();
  }

  isFocused() {
    return this.textInput.isFocused();
  }
}

const styles = StyleSheet.create({
  hiddenOffScreen: {
    position: 'absolute',
    top: 5000,
    left: 5000,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: 'transparent'
  }
});

// MessageReplyTextInput.propTypes = {
//   autoGrowing: PropTypes.bool,
//   initialHeight: PropTypes.number,
//   minHeight: PropTypes.number,
//   maxHeight: PropTypes.number,
//   onHeightChanged: PropTypes.func,
//   onChange: PropTypes.func,
//   animation: PropTypes.object
// };
//
// MessageReplyTextInput.defaultProps = {
//   autoGrowing: true,
//   minHeight: 35,
//   initialHeight: 35,
//   maxHeight: null,
//   animation: {animated: false, duration: DEFAULT_ANIM_DURATION}
// };

export default MessageReplyTextInput;
