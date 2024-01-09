import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {AppContext} from './src/context/AppContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppContext>
        <DrawerNavigator />
      </AppContext>
    </NavigationContainer>
  );
};
