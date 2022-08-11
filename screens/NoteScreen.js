import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import NoteForm from "../components/Note/NoteForm";
import NoteList from "../components/Note/NoteList";
import CornarButton from "../components/UI/CornarButton";
import { setNotes } from "../store/noteList-slice";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotesServer } from "../utils/http-request";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../constants/GlobalStyles";
import IconButton from "../components/UI/IconButton";
import { AuthContext } from "../store/auth-context";

function NoteScreen({ navigation }) {
  const noteList = useSelector((state) => state.notes.noteList);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const [isFetching, setIsFetching] = useState(true);
  const [hasError, setHasError] = useState(false);

  const btnPressHandler = () => {
    navigation.navigate("ManageNote");
  };

  const loggoutHandler = () => {
    authCtx.logout();
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const notes = await fetchNotesServer();
        setIsFetching(false);
        dispatch(setNotes(notes));
      } catch (error) {
        setHasError(true);
      }
    };

    fetch();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={loggoutHandler} size={32} icon="exit" />;
      },
    });
  }, []);

  if (hasError && !isFetching) {
    return <ErrorOverlay />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <NoteList noteList={noteList} />
      <CornarButton onPress={btnPressHandler} style={{ bottom: 0, right: 0 }} />
    </SafeAreaView>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
