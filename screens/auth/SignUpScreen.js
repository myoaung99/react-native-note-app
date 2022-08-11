import React, {useContext, useState} from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import {createUser} from "../../utils/http-request";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import {AuthContext} from "../../store/auth-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [hasError, setHasError] = useState(false);

    const authCtx = useContext(AuthContext);

    const confirmHandler = async ({email, password}) => {
        setIsAuthenticating(true);
        try {
            const idToken = await createUser(email, password);
            authCtx.authenticate(idToken);
            await AsyncStorage.setItem('token', idToken);
        } catch (e) {
            setHasError(true);
            setIsAuthenticating(false);
        }
    };

    if (hasError && !isAuthenticating) {
        return <ErrorOverlay/>
    }

    if (isAuthenticating) {
        return <LoadingOverlay/>
    }

    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("./../../assets/note-signup.png")}
                />
            </View>
            <AuthContent onAuthenticate={confirmHandler}/>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
    },
    imageContainer: {
        width: "95%",
        height: 250,
        paddingTop: 10,
        alignSelf: "center",
        marginBottom: 20,

        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "90%",
        height: "90%",
    },
    formContainer: {},
});
