import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NoteRequestBody } from './entities/note.entity';

/**
 * Controller for managing notes.
 * @remarks
 * This controller provides endpoints for creating, retrieving, updating and deleting notes.
 * @packageDocumentation
 */
@ApiTags('notes')
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create note' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The note has been successfully created.',
  })
  create(@Body() noteBody: NoteRequestBody) {
    return this.notesService.create(noteBody);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve all notes' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieve all notes successfully.',
  })
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve a note by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieve a note successfully.',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Note not found.' })
  findOne(@Param('id') id: number) {
    return this.notesService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a note by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update a note successfully.',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Note not found.' })
  update(@Param('id') id: number, @Body() noteBody: NoteRequestBody) {
    return this.notesService.update(id, noteBody);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a note by ID' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete a note successfully.',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Note not found.' })
  remove(@Param('id') id: number) {
    return this.notesService.remove(id);
  }
}
