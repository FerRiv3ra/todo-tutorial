import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';

interface Props {
  values: value[];
  onChange: (value: string) => void;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  selectedIndex?: number;
  backgroundColor?: string;
  tintColor?: string;
  textColor?: string;
  selectedTextColor?: string;
  style?: StyleProp<ViewStyle>;
}

type value = {
  key: string;
  value: string;
};

const SegmentedControl = ({
  values,
  onChange,
  selectedIndex,
  label,
  labelStyle,
  backgroundColor = '#CCCCCC',
  tintColor = '#FFFFFF',
  textColor = '#000000',
  selectedTextColor = '#000000',
  style,
}: Props) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(selectedIndex ? selectedIndex : 0);
  }, []);

  const handlePress = (idx: number) => {
    onChange(values[idx].value);
    setSelected(idx);
  };
  return (
    <View style={style}>
      {!!label && <Text style={labelStyle}>{label}</Text>}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
          backgroundColor,
          borderRadius: 5,
          marginVertical: 5,
        }}>
        {values.map((value, index) => (
          <Pressable
            onPress={() => handlePress(index)}
            key={index}
            style={{
              flex: 1,
              backgroundColor: selected === index ? tintColor : backgroundColor,
              paddingVertical: 5,
              borderTopLeftRadius: index === 0 ? 5 : 0,
              borderBottomLeftRadius: index === 0 ? 5 : 0,
              borderTopRightRadius: index === values.length - 1 ? 5 : 0,
              borderBottomRightRadius: index === values.length - 1 ? 5 : 0,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                color: selected === index ? selectedTextColor : textColor,
                fontSize: 16,
              }}>
              {value.key}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default SegmentedControl;
