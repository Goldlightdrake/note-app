import { Note } from "@/types/Note";
import { NoteItem } from "@/components/note-item";
import React from "react";
import { CreateNoteButton } from "./create-note-button";

interface NotesListProps {
  notes: Note[];
}

export function NotesList({ notes }: NotesListProps) {

  const renderContent = () => {
    if(notes.length === 0) {
      return <div className="col-span-3">
        <h2 className="text-2xl font-bold">No notes found</h2>
        <p className="text-gray-400 dark:text-gray-500">Create a new note by clicking the button below</p>
        <CreateNoteButton />
      </div>
    }

    return notes.map((note) => (
      <NoteItem key={note.id} note={note} />
    ))
  }

  return (
    <div className="mt-28 max-w-screen-lg px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {renderContent()}
    </div>
  );
}
