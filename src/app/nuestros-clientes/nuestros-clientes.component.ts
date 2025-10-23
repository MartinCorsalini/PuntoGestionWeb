import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cliente {
  nombre: string;
  logo: string;
  url: string;
}

@Component({
  selector: 'app-nuestros-clientes',
  imports: [CommonModule],
  templateUrl: './nuestros-clientes.component.html',
  styleUrl: './nuestros-clientes.component.css'
})
export class NuestrosClientesComponent {
  clientes: Cliente[] = [
    { nombre: 'Aquarium', logo: 'assets/logos-clientes/aquarium.jpg', url: 'https://www.aquariummdp.com.ar' },
    { nombre: 'Aquasol', logo: 'assets/logos-clientes/aquasol.jpg', url: 'https://www.aquasol.com.ar' },
    { nombre: 'Atlántica Distribución', logo: 'assets/logos-clientes/atlantica-distribucion.jpg', url: 'https://www.atlanticadistribucion.com.ar' },
    { nombre: 'Balneario Mirador', logo: 'assets/logos-clientes/balneario-mirador.jpeg', url: 'https://www.balneariomirador.com.ar' },
    { nombre: 'Bardeg Distribuciones', logo: 'assets/logos-clientes/bardeg-distribuciones.png', url: 'https://www.bardeg.com.ar' },
    { nombre: 'Bardeg Distribuciones', logo: 'assets/logos-clientes/bardeg.png', url: 'https://www.bardeg.com.ar' },
    { nombre: 'Botticon', logo: 'assets/logos-clientes/botticon.jpg', url: 'https://www.botticon.com.ar' },
    { nombre: 'Buenaproa', logo: 'assets/logos-clientes/buen-proa-blanco.png', url: 'https://www.buenaproa.com.ar' },
    { nombre: 'Buenaproa', logo: 'assets/logos-clientes/buena-proa-azul.png', url: 'https://www.buenaproa.com.ar' },
    { nombre: 'Camoga', logo: 'assets/logos-clientes/camoga.jpg', url: 'https://www.camoga.com.ar' },
    { nombre: 'Campo Verde', logo: 'assets/logos-clientes/campo-verde.png', url: 'https://www.instagram.com/supermercadocampoverde/?hl=es' },
    { nombre: 'Canteras Argentinas', logo: 'assets/logos-clientes/canteras-argentinas.jpg', url: 'https://www.canterasargentinas.com.ar' },
    { nombre: 'Casa Farina', logo: 'assets/logos-clientes/casa-farina.jpg', url: 'https://www.casafarina.com.ar' },
    { nombre: 'Casa Santiago', logo: 'assets/logos-clientes/casa-santiago.jpg', url: 'https://www.casasantiago.com.ar' },
    { nombre: 'CasaNova', logo: 'assets/logos-clientes/casanova.jpg', url: 'https://www.casanova.com.ar' },
    { nombre: 'Congelados Inal', logo: 'assets/logos-clientes/congelados-inal.jpg', url: 'https://www.congeladosinal.com.ar' },
    { nombre: 'El Mudo', logo: 'assets/logos-clientes/el-mudo.png', url: 'https://www.elmudo.com.ar' },
    { nombre: 'Eskabe', logo: 'assets/logos-clientes/eskabe.png', url: 'https://www.eskabe.com.ar' },
    { nombre: 'Eurocafé', logo: 'assets/logos-clientes/eurocafe.jpg', url: 'https://www.eurocafe.com.ar' },
    { nombre: 'Fava', logo: 'assets/logos-clientes/fava.png', url: 'https://www.fava.com.ar' },
    { nombre: 'Frigorífico 90', logo: 'assets/logos-clientes/frigorifico90.jpg', url: 'https://www.frigorifico90.com.ar' },
    { nombre: 'Friosur', logo: 'assets/logos-clientes/friosur.jpg', url: 'https://www.friosur.com.ar' },
    { nombre: 'GSA', logo: 'assets/logos-clientes/gsa.png', url: 'https://www.gsa.com.ar' },
    { nombre: 'Guerrico', logo: 'assets/logos-clientes/guerrico.jpg', url: 'https://www.guerrico.com.ar' },
    { nombre: 'Hergo', logo: 'assets/logos-clientes/hergo.png', url: 'https://www.hergo.com.ar' },
    { nombre: 'Hotel Batista', logo: 'assets/logos-clientes/hotel-batista.jpg', url: 'https://www.hotelbatista.com.ar' },
    { nombre: 'Julieta', logo: 'assets/logos-clientes/julieta.png', url: 'https://www.julieta.com.ar' },
    { nombre: 'Kubo', logo: 'assets/logos-clientes/kubo.jpg', url: 'https://www.kubo.com.ar' },
    { nombre: 'Luz y Fuerza', logo: 'assets/logos-clientes/luz-y-fuerza.png', url: 'https://www.luzyfuerza.com.ar' },
    { nombre: 'Maderas Misiones', logo: 'assets/logos-clientes/maderas-misiones.png', url: 'https://www.maderasmisiones.com.ar' },
    { nombre: 'Mar Calmo', logo: 'assets/logos-clientes/mar-calmo.png', url: 'https://www.marcalmo.com.ar' },
    { nombre: 'Máximo Frigorífico', logo: 'assets/logos-clientes/maximo-frigorifico.png', url: 'https://www.maximofrigorifico.com.ar' },
    { nombre: 'Medinilla', logo: 'assets/logos-clientes/medinilla-blanco.png', url: 'https://www.medinilla.com.ar' },
    { nombre: 'Medinilla', logo: 'assets/logos-clientes/medinilla.png', url: 'https://www.medinilla.com.ar' },
    { nombre: 'Milagros del Cielo', logo: 'assets/logos-clientes/milagros-del-cielo.png', url: 'https://www.milagrosdelcielo.com.ar' },
    { nombre: 'Mirador 9', logo: 'assets/logos-clientes/mirador-9.png', url: 'https://www.mirador9.com.ar' },
    { nombre: 'Moboshop', logo: 'assets/logos-clientes/moboshop.png', url: 'https://www.moboshop.com.ar' },
    { nombre: 'Orsi', logo: 'assets/logos-clientes/orsi.jpg', url: 'https://www.orsi.com.ar' },
    { nombre: 'Pampa Fish', logo: 'assets/logos-clientes/pampa-fish.jpg', url: 'https://www.pampafish.com.ar' },
    { nombre: 'Piña Pesca', logo: 'assets/logos-clientes/pina-pesca.jpg', url: 'https://www.pinapesca.com.ar' },
    { nombre: 'Rizzo', logo: 'assets/logos-clientes/rizzo.png', url: 'https://www.rizzo.com.ar' },
    { nombre: 'Tiribelli', logo: 'assets/logos-clientes/tiribelli.png', url: 'https://www.tiribelli.com.ar' },
    { nombre: 'Tiribelli', logo: 'assets/logos-clientes/tiribelli-2.jpg', url: 'https://www.tiribelli.com.ar' },
    { nombre: 'Tromarco', logo: 'assets/logos-clientes/tromarco.jpg', url: 'https://www.tromarco.com.ar' },
    { nombre: 'Tromarco', logo: 'assets/logos-clientes/tromarco-2.png', url: 'https://www.tromarco.com.ar' },
    { nombre: 'Via Sano', logo: 'assets/logos-clientes/via-sano.png', url: 'https://www.viasano.com.ar' },
    { nombre: 'Vitalis Navitas', logo: 'assets/logos-clientes/vitalis-navitas.png', url: 'https://www.vitalisnavitas.com.ar' }
  ];

  // Dividir clientes en dos filas
  get clientesFila1(): Cliente[] {
    const mitad = Math.ceil(this.clientes.length / 2);
    return this.clientes.slice(0, mitad);
  }

  get clientesFila2(): Cliente[] {
    const mitad = Math.ceil(this.clientes.length / 2);
    return this.clientes.slice(mitad);
  }

  // Duplicamos cada fila 3 veces para crear un efecto de loop infinito sin cortes
  get clientesFila1Duplicados(): Cliente[] {
    return [...this.clientesFila1, ...this.clientesFila1, ...this.clientesFila1];
  }

  get clientesFila2Duplicados(): Cliente[] {
    return [...this.clientesFila2, ...this.clientesFila2, ...this.clientesFila2];
  }
}
