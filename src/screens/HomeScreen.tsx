import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {RootStackParams} from '../navigator/StackNavigator';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Todos')}>
        <Text>Ir a TODOS</Text>
      </TouchableOpacity>
    </View>
  );
};
