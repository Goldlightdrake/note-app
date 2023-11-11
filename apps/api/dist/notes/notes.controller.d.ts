import { NotesService } from './notes.service';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(title: string, content: string): import("./entities/note.entity").Note;
    findAll(): import("./entities/note.entity").Note[];
    findOne(id: string): import("./entities/note.entity").Note;
    update(id: string, title: string, content: string): {
        title: string;
        content: string;
        id: string;
    };
    remove(id: string): import("./entities/note.entity").Note;
}
