"use server"
import { Note } from "@/types/Note";
import Config from "constants/Config";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

const noteSchema = z.custom<Note>();

const URL = `${Config.API_URL}/notes`;

export const getNotes = async () => {
  try {
    const res = await fetch(URL);
    const rawData = await res.json();
    const notes = z.array(noteSchema).parse(rawData);
    return notes;
  } catch (err) {
    throw new Error(err);
  }
};

export const getNote = async (id: number) => {
  try {
    const res = await fetch(`${URL}/${id}`);
    const rawData = await res.json();
    const note = noteSchema.parse(rawData);
    return note;
  } catch (err) {
    console.error(err);
  }
};

export const createNote = async (noteData: Pick<Note, "title" | "content">) => {
  try {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(noteData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const rawData = await res.json();
    const createdNote = noteSchema.parse(rawData);
    revalidatePath('/')
    return createdNote as Note;
  } catch (err) {
    console.error(err);
  }
};

export const updateNote = async (note: Note) => {
  try {
    const res = await fetch(`${URL}/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const rawData = await res.json();
    const updatedNote = noteSchema.parse(rawData);
    revalidatePath('/')
    return updatedNote;
  } catch (err) {
    console.error(err);
  }
};

export const deleteNote = async (id: number) => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    if(res.status === 204){
      revalidatePath('/')
      return;
    }
    throw new Error("Note not found");
  } catch (err) {
    console.error(err);
  }
};
