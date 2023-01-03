import { MatpopoupComponent } from './matpopoup/matpopoup.component';
import { TouristService } from './tourist.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tourists';
  displayedColumns: string[] = ['tourist_name', 'tourist_email', 'tourist_location', 'update']
  // dataSource : any[] = [];

  @ViewChild('paginatorFirst') paginatorFirst!: MatPaginator;
  dataSource: any;
  constructor(public toursvc: TouristService,
    private dialog:MatDialog
    ) { }
  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.toursvc.getTourist().subscribe(
      data => {
        this.dataSource = data.data1.data;
        console.log(this.dataSource);

      }
    )
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginatorFirst;
  }
  opendialog(){

    const popup =  this.dialog.open(MatpopoupComponent);
     popup.afterClosed().subscribe(data=>
      {
        console.log(data)
      })
  }




}
