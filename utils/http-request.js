import axios from "axios";

const BACKEND_URL = "https://react-note-app-c762b-default-rtdb.firebaseio.com";
const API_KEY = "AIzaSyAAXqTIaZEMQbLj7bImV0itSdILndsal9s";

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
      date: response.data[key].date,
    };
    noteList.push(note);
  }

  return noteList;
};

export const updateNoteServer = async (id, note) => {
  return await axios.put(BACKEND_URL + `/notes/${id}.json`, note);
};

export const deleteNoteServer = async (id) => {
  return await axios.delete(BACKEND_URL + `/notes/${id}.json`);
};

export const authenticate = async (mode, email, password) => {
  const url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  const response = await axios.post(
      url
      + `${mode === 'signup' ? 'signUp?key=' : 'signInWithPassword?key='}`
      + API_KEY, {email, password});
  return response.data.idToken;
};

export const loginUser = async (email, password) => {
 return authenticate('login', email, password);
};

export const createUser = async (email, password) => {
  return authenticate('signup', email, password);
};
