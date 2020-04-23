import { Timestamp } from 'rxjs';

export interface NoteInterface{
    id: number;
    title: string, 
    description: string,
    timestamp: Timestamp<number>;
}