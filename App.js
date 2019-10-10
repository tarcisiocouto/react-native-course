import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ComponentsExercice02 from './src/screens/ComponentsExercice02';
import ListScreen from './src/screens/ListScreen';
import ListScreenExercice from './src/screens/ListScreenExercice';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ExerciceComponents: ComponentsExercice02,
    List: ListScreen,
    ListExercice: ListScreenExercice,
    Image: ImageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
