import { Note } from './entities/note.entity';
export declare class NotesService {
    private notes;
    create(title: string, content: string): Note;
    findAll(): Note[];
    findOne(id: string): Note;
    update(id: string, title: string, content: string): {
        title: string;
        content: string;
        id: string;
    };
    remove(id: string): Note;
    private findNote;
}
