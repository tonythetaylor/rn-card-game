import { AppRegistry, Platform } from "react-native";
import { registerRootComponent } from "expo";
import Main from "./src/index.js";
import { name as appName } from "./app.json";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
if (Platform.OS == "android") {
  registerRootComponent(Main);
} else {
  AppRegistry.registerComponent(appName, () => Main);
}