import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  private notes: Note[] = [];
  create(title: string, content: string) {
    const id = new Date().toISOString();
    const newNote = new Note(id, title, content);
    this.notes.push(newNote);
    return newNote;
  }

  findAll() {
    return [...this.notes];
  }

  findOne(id: string) {
    const note = this.findNote(id)[0];
    return note;
  }

  update(id: string, title: string, content: string) {
    const [note, index] = this.findNote(id);
    const updatedNote = { ...note, title, content, updatedAt: new Date() };
    this.notes[index] = updatedNote;
    return updatedNote;
  }

  remove(id: string) {
    const [note, index] = this.findNote(id);
    this.notes.splice(index, 1);
    return note;
  }

  private findNote(id: string): [Note, number] {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    const note = this.notes[noteIndex];
    if (!note) {
      throw new NotFoundException('Could not find note.');
    }
    return [note, noteIndex];
  }
}
