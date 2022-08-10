import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthenticatedStack from "./components/Navigator/AuthenticatedStack";
import AuthStack from "./components/Navigator/AuthStack";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AuthContextProvider from "./store/auth-context";

function Root() {
  return <AuthStack />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </Provider>
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
