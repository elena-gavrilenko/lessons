import { AppService } from './app.service';
import { Note } from './notes.model';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLogin(): void;
    index(): {
        notes: Note[];
    };
    getForm(): void;
    createNote(body: any): void;
    getNoteByID(id: number): Note;
}
