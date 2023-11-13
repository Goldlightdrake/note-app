"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Note } from "@/types/Note";
import { NoteForm } from "./note-form";
import moment from "moment";

interface NoteItemProps {
  note: Note;
}

export function NoteItem({ note }: NoteItemProps) {
  const [open, setOpen] = React.useState(false);
  const today = moment();
  const noteDate = moment(note.updatedAt);
  const isThisWeek = noteDate.isSame(today, "week");
  const formattedDate = isThisWeek
    ? noteDate.format("dddd")
    : noteDate.format("DD/MM/YYYY");
  const lastEditDate = noteDate.format("DD/MM/YYYY HH:mm");


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="p-6 drop-shadow-lg border dark:border-slate-700 cursor-pointer hover:opacity-70 dark:hover:bg-slate-700 hover:bg-slate-200 rounded-md duration-75 ">
          <h2 className="font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">{note.title}</h2>
          <div className="flex justify-between gap-2">
            <p className="dark:text-gray-300 text-gray-600">{formattedDate}</p>
            <p className="text-gray-400 dark:text-gray-400 overflow-hidden overflow-ellipsis whitespace-nowrap">
              {note.content}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit note</DialogTitle>
          <DialogDescription>Last edit: {lastEditDate}</DialogDescription>
        </DialogHeader>
       <NoteForm closeDialog={() => setOpen(false)} action="update" note={note}/>
      </DialogContent>
    </Dialog>
  );
}
