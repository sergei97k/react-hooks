import axios from "./axios";

export const getNotes = async () => {
  try {
    return await axios.get("notes.json");
  } catch (e) {
    throw new Error(e);
  }
};

export const postNote = async (body) => {
  try {
    return await axios.post("notes.json", body);
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteNote = async (id) => {
  try {
    return await axios.delete(`notes/${id}.json`);
  } catch (e) {
    throw new Error(e);
  }
};
