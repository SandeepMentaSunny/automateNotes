import { Component, OnInit, Input } from '@angular/core';

import { NoteInterface } from '../../reusable/NoteInterface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main-notes',
  templateUrl: './main-notes.component.html',
  styleUrls: ['./main-notes.component.css']
})
export class MainNotesComponent implements OnInit {
  @Input() public selectedNoteData: NoteInterface;
  public note: object = {};
  public eventType: string = '';
  public notes = new Set();
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    if(localStorage.getItem('notes') && JSON.parse(localStorage.getItem('notes')).length > 0){
      this.notes = JSON.parse(localStorage.getItem('notes'));
    }else{
      this.eventType = 'create';
    }
  }

  ngOnChanges(){
    if(!this.selectedNoteData.timestamp){
      this.selectedNoteData.timestamp = new Date().getTime();
    }
  }

  updateNoteData(event){
    this.apiService.notesEvent.subscribe((data: string) => {
      this.eventType = data;
    });
    const { target } = event;
    if(target && target.classList.contains('edit-title')){
      this.apiService.selectedInput.next({type: 'title', value: target.value, id: this.selectedNoteData.id});
      this.note = {title: target.value, id: this.selectedNoteData.id}
    }else if(target && target.classList.contains('edit-description')){
      this.apiService.selectedInput.next({type: 'description', value: target.value, id: this.selectedNoteData.id});
      this.note[`description`] = target.value;
    }
  }
  submitFormData(){
    if(this.eventType === 'create'){
      this.note[`timestamp`] = new Date().getTime();
      this.note[`id`] = this.note[`timestamp`];
      this.notes.add(this.note);
    }
  }
}
