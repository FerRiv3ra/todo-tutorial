import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../theme/globalStyles';

type Props = {
  iconName: string;
  headerHeiht?: number;
  iconSize?: number;
};

export const Header = ({
  iconName,
  headerHeiht = 0.25,
  iconSize = 100,
}: Props) => {
  const {height} = useWindowDimensions();

  return (
    <View
      style={{
        ...globalStyles.headerContainer,
        height: height * headerHeiht,
      }}>
      <Icon
        name={iconName}
        style={{marginBottom: 20}}
        color="#FFF"
        size={iconSize}
      />
    </View>
  );
};
