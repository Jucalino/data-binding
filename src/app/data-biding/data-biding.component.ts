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
  valorAtual: string = ''
  valorSalvo: string = ''
  isMouseOver: boolean = false

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any){
    this.valorSalvo  = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  botaoClicado(){
    alert('Clicou')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
