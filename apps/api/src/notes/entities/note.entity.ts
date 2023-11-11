import { ApiProperty } from '@nestjs/swagger';
export class Note {
  @ApiProperty({ description: 'The unique identifier of the note.' })
  public id: string;

  @ApiProperty({ description: 'The title of the note.' })
  public title: string;

  @ApiProperty({ description: 'The content of the note.' })
  public content: string;

  constructor(id: string, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
