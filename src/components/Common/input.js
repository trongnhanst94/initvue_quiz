import { View } from 'react-native';
import React from 'react';

import SM from '../SM';

class CommonSM extends SM {
  render() {
    return (
      <View />
    );
  }
}

CommonSM.propTypes = {
};

// how to use CommonSM
//
// let optionCommon = {
// };
//
// <CommonSM option={optionCommon} />

export default CommonSM;
