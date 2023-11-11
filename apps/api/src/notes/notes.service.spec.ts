import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './entities/note.entity';

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new note', () => {
      const title = 'Test note';
      const content = 'Test content';
      const note = service.create(title, content);
      expect(note).toBeInstanceOf(Note);
      expect(note.id).toBeDefined();
      expect(note.title).toBe(title);
      expect(note.content).toBe(content);
      expect(service.findAll()).toContain(note);
    });
  });

  describe('findAll', () => {
    it('should return an empty array if there are no notes', () => {
      expect(service.findAll()).toEqual([]);
    });

    it('should return an array with all the notes', () => {
      const note1 = service.create('Note 1', 'Content 1');
      const note2 = service.create('Note 2', 'Content 2');
      const notes = service.findAll();
      expect(notes).toContain(note1);
      expect(notes).toContain(note2);
    });
  });

  describe('findOne', () => {
    it('should throw a NotFoundException if the note does not exist', () => {
      expect(() => service.findOne('invalid-id')).toThrow(NotFoundException);
    });

    it('should return the note with the given id', () => {
      const note = service.create('Test note', 'Test content');
      expect(service.findOne(note.id)).toBe(note);
    });
  });

  describe('update', () => {
    it('should throw a NotFoundException if the note does not exist', () => {
      expect(() =>
        service.update('invalid-id', 'New title', 'New content'),
      ).toThrow(NotFoundException);
    });

    it('should update the note with the given id', () => {
      const note = service.create('Test note', 'Test content');
      const updatedNote = service.update(note.id, 'New title', 'New content');
      expect(updatedNote).toEqual({
        ...note,
        title: 'New title',
        content: 'New content',
      });
      expect(service.findOne(note.id)).toEqual(updatedNote);
    });
  });

  describe('remove', () => {
    it('should throw a NotFoundException if the note does not exist', () => {
      expect(() => service.remove('invalid-id')).toThrow(NotFoundException);
    });

    it('should remove the note with the given id', () => {
      const note = service.create('Test note', 'Test content');
      expect(service.remove(note.id)).toBe(note);
      expect(service.findAll()).not.toContain(note);
    });
  });
});
