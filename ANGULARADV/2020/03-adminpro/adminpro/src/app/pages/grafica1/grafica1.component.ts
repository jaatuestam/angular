import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data1  = [
    [350, 450, 100],
  ];

  labels2: string[] = ['Almuerzo', 'Desayuno', 'Cena'];
  data2  = [
    [100, 20, 40],
  ];

  labels3: string[] = ['Carro', 'Moto', 'Transporte publico', 'Bicicleta'];
  data3  = [
    [350, 450, 100, 19],
  ];

  labels4: string[] = ['Hombre', 'Mujer'];
  data4  = [
    [100, 200 ],
  ];

}
