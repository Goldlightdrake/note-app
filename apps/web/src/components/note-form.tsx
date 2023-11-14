"use client";

import { createNote, deleteNote, updateNote } from '@/lib/service';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Note } from '@/types/Note';

const noteScheme = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters long",
    })
    .max(128, {
      message: "Content must be at most 128 characters long",
    }),
  content: z
    .string()
    .min(3, {
      message: "Content must be at least 3 characters long",
    })
    .max(1024, {
      message: "Content must be at most 1028 characters long",
    }),
});

interface NoteFormProps {
  closeDialog: () => void;
  action: "create" | "update";
  note?: Note;
}

export const NoteForm = ({ note, closeDialog, action }: NoteFormProps) => {
  const form = useForm<z.infer<typeof noteScheme>>({
    resolver: zodResolver(noteScheme),
    defaultValues: {
      title: note?.title || "",
      content: note?.content || "",
    }
  });
  const [processing, setProcessing] = React.useState(false);

  const handleFormSubmit = form.handleSubmit(async (values) => {
    setProcessing(true);
    if (action === "create") {
      await createNote({
        title: values.title,
        content: values.content,
      });
    } else {
      note && await updateNote({
        ...note,
        title: values.title,
        content: values.content,
      });
    }
    form.reset();
    closeDialog()
  });
  
  const handleDelete = async () => {
    if (note) {
      await deleteNote(note.id);
      closeDialog()
    }
  }
  
  const renderDialogFooter = () => {
    if(action === "create") {
      return (
        <DialogFooter>
          <Button disabled={processing} type="submit">Create note</Button>
        </DialogFooter>
      )
    } else {
      return (
        <DialogFooter className='gap-2'>
          <Button onClick={handleDelete} variant="destructive">
            Delete
          </Button>
          <Button disabled={processing} type="submit">Update note</Button>
        </DialogFooter>
      )
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleFormSubmit}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Note's title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write a note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {renderDialogFooter()}
      </form>
    </Form>
  )
}