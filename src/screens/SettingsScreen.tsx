import {View, Text} from 'react-native';
import React from 'react';
import {Header} from '../components/Header';
import {globalStyles} from '../theme/globalStyles';
import SegmentedControl from '../components/SegmentedControl';

export const Settings = () => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <Header iconName="cog-outline" />
      <Text style={{...globalStyles.title, marginTop: 10}}>Settings</Text>
      <SegmentedControl
        values={[
          {key: '🇪🇸 Spanish', value: 'es'},
          {key: '🇬🇧 English', value: 'en'},
        ]}
        label="Language"
        labelStyle={{fontWeight: '600'}}
        style={{marginHorizontal: 10, marginTop: 20}}
        onChange={() => {}}
      />
      <SegmentedControl
        values={[
          {key: '💡 Light', value: 'light'},
          {key: '🧛‍♂️ Dark', value: 'dark'},
        ]}
        label="Theme"
        labelStyle={{fontWeight: '600'}}
        style={{marginHorizontal: 10, marginTop: 20}}
        onChange={() => {}}
      />
    </View>
  );
};
