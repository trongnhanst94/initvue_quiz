import React, { PureComponent } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

import { _variableStyle } from '../../styles/variable'; // Chưa tìm thấy file theo đường dẫn

class LeftHome extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <TouchableOpacity style={styles.leftContainer} onPress={() => { navigation.goBack(); }}>
          <Icon name="home" style={styles.iconHome} />
          <Text style={styles.textHome}>ホーム</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(LeftHome);

const styles = StyleSheet.create({
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHome: {
    color: _variableStyle.mainColor,
    fontSize: 27
  },
  textHome: {
    color: _variableStyle.mainColor,
    fontWeight: 'bold'
  }
});
