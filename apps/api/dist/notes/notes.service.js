"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const note_entity_1 = require("./entities/note.entity");
let NotesService = class NotesService {
    constructor() {
        this.notes = [];
    }
    create(title, content) {
        const id = new Date().toISOString();
        const newNote = new note_entity_1.Note(id, title, content);
        this.notes.push(newNote);
        return newNote;
    }
    findAll() {
        return [...this.notes];
    }
    findOne(id) {
        const note = this.findNote(id)[0];
        return note;
    }
    update(id, title, content) {
        const [note, index] = this.findNote(id);
        const updatedNote = { ...note, title, content };
        this.notes[index] = updatedNote;
        return updatedNote;
    }
    remove(id) {
        const [note, index] = this.findNote(id);
        this.notes.splice(index, 1);
        return note;
    }
    findNote(id) {
        const noteIndex = this.notes.findIndex((note) => note.id === id);
        const note = this.notes[noteIndex];
        if (!note) {
            throw new common_1.NotFoundException('Could not find note.');
        }
        return [note, noteIndex];
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)()
], NotesService);
//# sourceMappingURL=notes.service.js.map