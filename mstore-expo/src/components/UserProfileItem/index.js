/** @format */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, I18nManager } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import _ from 'lodash';
import { withTheme, Config } from '@common';

import styles from './styles';

class UserProfileItem extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.any,
  };

  static defaultProps = {
    icon: false,
  };

  render() {
    const { label, value, onPress, icon } = this.props;
    const {
      theme: {
        colors: { lineColor, text },
        dark,
      },
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[styles.row, dark && { borderColor: lineColor }]}
      >
        <Text style={styles.leftText}>{label}</Text>
        <View style={styles.rightContainer}>
          <Text style={styles.rightText(text)}>{value}</Text>
          {icon && _.isBoolean(icon) && (
            <Icon
              style={[
                styles.icon,
                I18nManager.isRTL && {
                  transform: [{ rotate: '180deg' }],
                },
              ]}
              color="#CCCCCC"
              size={22}
              name="chevron-small-right"
            />
          )}
          {icon && !_.isBoolean(icon) && icon()}
        </View>
      </TouchableOpacity>
    );
  }
}

export default withTheme(UserProfileItem);
