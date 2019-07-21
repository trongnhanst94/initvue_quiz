import React, { PureComponent } from 'react';
import {
  Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

import { _variableStyle } from '../../styles/variable'; // Chua tao file

class LeftBack extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity style={styles.leftContainer} onPress={() => { navigation.goBack(); }}>
        <Icon type="Entypo" name="chevron-thin-left" style={styles.iconBack} />
        <Text style={styles.textBack}>戻る</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(LeftBack);

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    color: _variableStyle.mainColor,
    fontSize: 17
  },
  textBack: {
    color: _variableStyle.mainColor,
    fontWeight: 'bold',
    fontSize: _variableStyle.fontSmall
  }
});
