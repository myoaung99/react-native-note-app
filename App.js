import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import AuthenticatedStack from "./components/Navigator/AuthenticatedStack";
import AuthStack from "./components/Navigator/AuthStack";
import {Provider} from "react-redux";
import {store} from "./store/store";
import AuthContextProvider, {AuthContext} from "./store/auth-context";
import {useContext, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';

function Root() {
    const authCtx = useContext(AuthContext);
    const [isFetchingStoredToken, setIsFetchingStoredToken] = useState(true);
    useEffect(() => {
        const fetchStoredToken = async () => {

            const token = await AsyncStorage.getItem('token')
            if (token) {
                authCtx.authenticate(token);
                setIsFetchingStoredToken(false);
            }
        }
        fetchStoredToken();
    }, []);

    if(!isFetchingStoredToken){
        SplashScreen.hideAsync();
    }

    if(isFetchingStoredToken){
        return null;
    }

    return (
        <>
            {!authCtx.isAuthenticated && <AuthStack/>}
            {authCtx.isAuthenticated && <AuthenticatedStack/>}
        </>

    );
}

SplashScreen.preventAutoHideAsync();

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="dark"/>
            <AuthContextProvider>
                <Provider store={store}>
                    <NavigationContainer>
                        <Root/>
                    </NavigationContainer>
                </Provider>
            </AuthContextProvider>
        </SafeAreaProvider>
    );
}
