import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from '../../api.service';
import { ListeningProfile } from '../../../types/listeningProfile';

@Component({
  selector: 'app-listening-profile',
  templateUrl: './listening-profile.component.html',
  styleUrls: ['./listening-profile.component.css']
})
export class ListeningProfileComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  listeningProfiles: Array<ListeningProfile>;

  dataSource = new MatTableDataSource();

  constructor(private api: APIService) { }

  async ngOnInit() {

    /* fetch items when app loads */
    this.api.ListListeningProfiles()
      .then(event => {
        this.listeningProfiles = event.items;
        this.dataSource.data = this.listeningProfiles;
      });
    this.dataSource.sort = this.sort;

    /* subscribe to new items being created */
    this.api.OnCreateListeningProfileListener.subscribe( (event: any) => {
      const newItem = event.value.data.onCreateListeningProfile;
      this.dataSource.data = [newItem, ...this.dataSource.data];
    });
  }

}
