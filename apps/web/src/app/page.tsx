import { NotesList } from "@/components/notes-list";
import { getNotes } from "@/lib/note-service";
import React from "react";

export default async function Home() {
  const notes = await getNotes();

  return (
    <main className="flex flex-col min-h-screen justify-start items-center">
      <NotesList notes={notes} />
    </main>
  );
}
