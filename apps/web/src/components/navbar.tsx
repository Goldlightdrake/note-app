import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { CreateNoteButton } from "./create-note-button";

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <menu className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <CreateNoteButton />
        <ThemeToggle />
      </menu>
    </nav>
  );
}
