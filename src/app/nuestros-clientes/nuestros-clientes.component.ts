import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cliente {
  nombre: string;
  logo: string;
}

@Component({
  selector: 'app-nuestros-clientes',
  imports: [CommonModule],
  templateUrl: './nuestros-clientes.component.html',
  styleUrl: './nuestros-clientes.component.css'
})
export class NuestrosClientesComponent {
  clientes: Cliente[] = [
    { nombre: 'Eurocafé', logo: 'assets/logos-clientes/eurocafe.jpg' },
    { nombre: 'Fava', logo: 'assets/logos-clientes/fava.png' },
    { nombre: 'Frigorífico 90', logo: 'assets/logos-clientes/frigorifico90.jpg' },
    { nombre: 'Friosur', logo: 'assets/logos-clientes/friosur.jpg' },
    { nombre: 'GSA', logo: 'assets/logos-clientes/gsa.png' },
    { nombre: 'Guerrico', logo: 'assets/logos-clientes/guerrico.jpg' },
    { nombre: 'Hergo', logo: 'assets/logos-clientes/hergo.png' },
    { nombre: 'Hotel Batista', logo: 'assets/logos-clientes/hotel-batista.jpg' },
    { nombre: 'Julieta', logo: 'assets/logos-clientes/julieta.png' },
    { nombre: 'Kubo', logo: 'assets/logos-clientes/kubo.jpg' },
    { nombre: 'Luz y Fuerza', logo: 'assets/logos-clientes/luz-y-fuerza.png' },
    { nombre: 'Maderas Misiones', logo: 'assets/logos-clientes/maderas-misiones.png' },
    { nombre: 'Mar Calmo', logo: 'assets/logos-clientes/mar-calmo.png' },
    { nombre: 'Máximo Frigorífico', logo: 'assets/logos-clientes/maximo-frigorifico.png' },
    { nombre: 'Medinilla', logo: 'assets/logos-clientes/medinilla.png' },
    { nombre: 'Medinilla Blanco', logo: 'assets/logos-clientes/medinilla-blanco.png' },
    { nombre: 'Milagros del Cielo', logo: 'assets/logos-clientes/milagros-del-cielo.png' },
    { nombre: 'Mirador 9', logo: 'assets/logos-clientes/mirador-9.png' },
    { nombre: 'Moboshop', logo: 'assets/logos-clientes/moboshop.jpg' },
    { nombre: 'Orsi', logo: 'assets/logos-clientes/orsi.jpg' },
    { nombre: 'Pampa Fish', logo: 'assets/logos-clientes/pampa-fish.jpg' },
    { nombre: 'Piña Pesca', logo: 'assets/logos-clientes/pina-pesca.jpg' },
    { nombre: 'Rizzo', logo: 'assets/logos-clientes/rizzo.png' },
    { nombre: 'Tiribelli', logo: 'assets/logos-clientes/tiribelli.png' },
    { nombre: 'Tiribelli 2', logo: 'assets/logos-clientes/tiribelli-2.jpg' },
    { nombre: 'Tromarco', logo: 'assets/logos-clientes/tromarco.jpg' },
    { nombre: 'Tromarco 2', logo: 'assets/logos-clientes/tromarco-2.png' },
    { nombre: 'Via Sano', logo: 'assets/logos-clientes/via-sano.png' },
    { nombre: 'Vitalis Navitas', logo: 'assets/logos-clientes/vitalis-navitas.png' },
    { nombre: 'A.J. Montanari', logo: 'assets/logos-clientes/aj-montanari.png' },
    { nombre: 'Almar', logo: 'assets/logos-clientes/almar.png' },
    { nombre: 'Balcarce', logo: 'assets/logos-clientes/balcarce.png' },
    { nombre: 'Bardeg', logo: 'assets/logos-clientes/bardeg.png' },
    { nombre: 'Buena Proa', logo: 'assets/logos-clientes/buena-proa.png' },
    { nombre: 'Camoga', logo: 'assets/logos-clientes/camoga.png' },
    { nombre: 'Casapan', logo: 'assets/logos-clientes/casapan.png' },
    { nombre: 'Cayfa', logo: 'assets/logos-clientes/cayfa.png' },
    { nombre: 'Cimsa', logo: 'assets/logos-clientes/cimsa.png' },
    { nombre: 'Don Vicente', logo: 'assets/logos-clientes/don-vicente.png' },
    { nombre: 'Don Yeyo', logo: 'assets/logos-clientes/don-yeyo.png' },
    { nombre: 'Dulcor', logo: 'assets/logos-clientes/dulcor.png' },
    { nombre: 'El Atlántico', logo: 'assets/logos-clientes/el-atlantico.png' },
    { nombre: 'El Cóndor', logo: 'assets/logos-clientes/el-condor.png' },
    { nombre: 'El Original', logo: 'assets/logos-clientes/el-original.png' },
    { nombre: 'El Vasco', logo: 'assets/logos-clientes/el-vasco.png' },
    { nombre: 'Emipa', logo: 'assets/logos-clientes/emipa.png' }
  ];

  // Duplicamos el array 2 veces para crear un efecto de loop infinito sin cortes
  get clientesDuplicados(): Cliente[] {
    return [...this.clientes, ...this.clientes, ...this.clientes];
  }
}
