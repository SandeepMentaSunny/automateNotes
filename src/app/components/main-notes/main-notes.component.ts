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

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  updateNoteData(event){
    const { target } = event;
    console.log(event.target.value);
    if(target && target.classList.contains('edit-title')){
      this.apiService.selectedInput.next({type: 'title', value: target.value, id: this.selectedNoteData.id});
    }else if(target && target.classList.contains('edit-description')){
      this.apiService.selectedInput.next({type: 'description', value: target.value, id: this.selectedNoteData.id});
    }
  }

}
