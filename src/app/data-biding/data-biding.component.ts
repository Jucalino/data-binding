import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  url: string = 'http://loiane.com'
  angular: boolean = true
  urlImagem = 'https://fastly.picsum.photos/id/375/400/200.jpg?hmac=CqYRFOMFNJPdoXEyu5OHJsrnewwStZlDpvoIUkeVTXI'

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
