import {Text, TouchableOpacity, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {StackNavigator} from './StackNavigator';
import {Settings} from '../screens/SettingsScreen';
import {drawerStyles} from '../theme/drawerStyles';
import {useThemeContext} from '../context/ThemeContext';

export type RootDrawerParams = {
  Home: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  const {
    theme: {colors},
  } = useThemeContext();
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: colors.primary,
      }}>
      <View style={{...drawerStyles.icon}}>
        <Icon name="list-circle-outline" color={colors.text} size={60} />
        <Text style={{...drawerStyles.txtButton}}>TODO APP</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{...drawerStyles.button}}
          activeOpacity={0.6}>
          <Icon name="home" size={17} color={colors.text} />
          <Text style={{...drawerStyles.txtButton}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{...drawerStyles.button}}
          activeOpacity={0.6}>
          <Icon name="cog" size={17} color={colors.text} />
          <Text style={{...drawerStyles.txtButton}}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
