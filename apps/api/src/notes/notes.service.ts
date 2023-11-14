import { Injectable, NotFoundException } from '@nestjs/common';
import { Note, NoteRequestBody } from './entities/note.entity';

/**
 * Service responsible for managing notes.
 */
@Injectable()
export class NotesService {
  private notes: Note[] = [];

  /**
   * Creates a new note with the given title and content.
   * @param {NoteRequestBody} noteRequestBody - The request body containing the note's title and content.
   * @returns {Note} The newly created note.
   */
  create({ title, content }: NoteRequestBody) {
    const id = Date.now();
    const newNote = new Note(id, title, content);
    this.notes.push(newNote);
    return newNote;
  }

  /**
   * Returns an array of all notes.
   * @returns {Note[]} An array of Note objects.
   */
  findAll() {
    return [...this.notes];
  }

  /**
   * Finds a note by its ID.
   * @param id The ID of the note to find.
   * @returns The note with the specified ID.
   */
  findOne(id: number) {
    const note = this.findNote(id)[0];
    return note;
  }

  /**
   * Updates a note with the given id.
   * @param id - The id of the note to update.
   * @param noteRequestBody - An object containing the new title and content for the note.
   * @returns The updated note.
   */
  update(id: number, { title, content }: NoteRequestBody) {
    const [note, index] = this.findNote(id);
    const updatedNote = { ...note, title, content, updatedAt: new Date() };
    this.notes[index] = updatedNote;
    return updatedNote;
  }

  /**
   * Removes a note with the given ID from the list of notes.
   * @param id The ID of the note to remove.
   * @returns The removed note.
   */
  remove(id: number) {
    const [note, index] = this.findNote(id);
    this.notes.splice(index, 1);
    return note;
  }

  /**
   * Finds a note by its ID and returns the note object and its index in the notes array.
   * @param id - The ID of the note to find.
   * @returns A tuple containing the note object and its index in the notes array.
   * @throws NotFoundException if the note with the given ID is not found.
   */
  private findNote(id: number): [Note, number] {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex < 0) {
      throw new NotFoundException('Could not find note.');
    }
    const note = this.notes[noteIndex];
    return [note, noteIndex];
  }
}
