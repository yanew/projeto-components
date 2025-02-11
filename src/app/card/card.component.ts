import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  plano = {
    info : {
      tipo: 'Simples',
      preco: 100,
    }
  };
  
  plano2 : any = {//o any aqui serve so pra nao dar o erro no html de tipos nao ser encontrado 'never'. O any indica que pode se receber quaisquer tipos de objeto a qualquer momento.
    info : undefined
  }

  tipo = 'Simples';
  preco = 100;

  getFullPrice(){
    return 'R$' + this.preco + ',00/Mês';
  }

  @Input({required: true, alias: 'planPriceAlias'}) planPrice: number = 0;

  @Input({alias: 'planType', transform: (value: string) => value.toUpperCase()}) planType: string = "";


  buttonClicked(valueEmitted: boolean){
    console.log('yane', valueEmitted);
  }

}
