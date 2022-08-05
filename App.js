import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./components/Navigator/StackNavigator";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
