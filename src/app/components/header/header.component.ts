import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchInput: string;
  public removeButton: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  getSearchFilter() {
    if (this.searchInput.length > 0) {
      this.removeButton = true;
    } else {
      this.removeButton = false;
    }
  }
  removeSearchValue() {
    this.removeButton = false;
    this.searchInput = '';
  }

  addNotes(){
    this.apiService.notesEvent.next('create');
  }
}
