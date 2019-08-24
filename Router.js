// In my router.js
import { createStackNavigator } from "react-navigation";
import MenuContainer from "./Menu";
import HomeScreen from "./screens/Home";

const EntryStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    headerMode: "float"
  }
);
export const RootStack = createStackNavigator(
  {
    EntryStack: { screen: EntryStack },
    MenuStack: { screen: MenuContainer }
  },
  {
    headerMode: "none",
    initialRouteName: "AppStack"
  }
);
