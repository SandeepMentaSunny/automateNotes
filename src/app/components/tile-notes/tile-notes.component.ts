import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { InputInterface } from '../../reusable/InputInterface';
import { NoteInterface } from '../../reusable/NoteInterface';
@Component({
  selector: 'app-tile-notes',
  templateUrl: './tile-notes.component.html',
  styleUrls: ['./tile-notes.component.css']
})
export class TileNotesComponent implements OnInit {
  public notes: object[] = [];
  public editNotesData: object;
  public sideNotes: boolean = false;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNotes().subscribe((data: object[]) => {
      this.notes = data.map(obj => {
        if(obj){
          obj[`selected`] = false;
        }
        return obj;
      });
    });
    this.apiService.selectedInput.subscribe((data: InputInterface) => {
      const { type, value, id } = data;
      const updatedIndex: number = this.notes.findIndex((note: NoteInterface) => note.id === id);
      if(updatedIndex > -1){
        this.notes[updatedIndex][type] = value;
      }
    });
  }

  editNotes(selectedNote){
    this.editNotesData = selectedNote;
    if(Object.keys(this.editNotesData).length > 0){
      this.sideNotes = true;
      this.notes.forEach((note) => {
        if(note[`id`] === selectedNote.id){
          note[`selected`] = true;
        }else if(note[`selected`]){
          note[`selected`] = false;
        }
        return note;
      });
    }
  }

  getUpdatedData(data: object){
    console.log(data);
  }
}
