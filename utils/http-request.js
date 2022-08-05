import axios from "axios";

const BACKEND_URL = "https://react-note-app-c762b-default-rtdb.firebaseio.com";

export const storeNoteServer = async (note) => {
  const response = await axios.post(BACKEND_URL + "/notes.json", note);
  return response.data.name;
};

export const fetchNotesServer = async () => {
  const response = await axios.get(BACKEND_URL + "/notes.json");

  const noteList = [];
  for (const key in response.data) {
    const note = {
      id: key,
      title: response.data[key].title,
      text: response.data[key].text,
    };

    noteList.push(note);
  }

  return noteList;
};
