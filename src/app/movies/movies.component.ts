import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import data from '../../assets/data/data.json';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  url: string = "../../assets/data/data.tsv";

  dataset: Array<any> = data;
  searchText: string = "";
  closeResult = '';
  movieInfo: any = "";
  p: number = 1;
  collection: any[] = [];

  constructor(
    private moviesService: MoviesService,
    private http: HttpClient,
    public translate: TranslateService,
    private modalService: NgbModal) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    console.log(this.dataset);

  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  open(content: any, movie: object) {
    this.movieInfo = movie;
    console.log(movie);

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
