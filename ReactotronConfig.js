import AsyncStorage from "@react-native-async-storage/async-storage";
import { DevSettings } from "react-native";
import Reactotron, {
  asyncStorage,
  trackGlobalErrors,
} from "reactotron-react-native";

Reactotron.setAsyncStorageHandler(AsyncStorage);

const reactotron = Reactotron.configure({ name: "Test" })
  .use(trackGlobalErrors())
  .useReactNative({ storybook: true }) // Incluye plugins de React Native
  .use(asyncStorage())
  .connect(); // Conéctate a Reactotron

if (Reactotron.clear) {
  Reactotron.clear();
}

// Configura comandos personalizados

// Limpia Reactotron al inicio
reactotron.clear();

// Exporta Reactotron
console.tron = Reactotron;
export default reactotron;
