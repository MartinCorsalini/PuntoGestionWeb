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
    { nombre: 'Aquarium', logo: 'assets/logos-clientes/aquarium.png', url: 'https://www.aquariummdp.com.ar' },
    { nombre: 'Aquasol', logo: 'assets/logos-clientes/aquasol.png', url: 'https://www.aquasol.com.ar' },
    { nombre: 'Atlántica Distribución', logo: 'assets/logos-clientes/atlantica.png', url: 'https://www.atlanticadistribucion.com.ar' },
    { nombre: 'Balneario Mirador', logo: 'assets/logos-clientes/balneario-mirador.png', url: 'https://www.balneariomirador.com.ar' },
    { nombre: 'Bardeg Distribuciones', logo: 'assets/logos-clientes/bardeg-1.png', url: 'https://www.bardeg.com.ar' },
    { nombre: 'Bardeg Distribuciones', logo: 'assets/logos-clientes/bardeg-2.png', url: 'https://www.bardeg.com.ar' },
    { nombre: 'Botticon', logo: 'assets/logos-clientes/botticon.png', url: 'https://www.botticon.com.ar' },
    { nombre: 'Buenaproa', logo: 'assets/logos-clientes/buenaproa-1.png', url: 'https://www.buenaproa.com.ar' },
    { nombre: 'Buenaproa', logo: 'assets/logos-clientes/buenaproa-2.png', url: 'https://www.buenaproa.com.ar' },
    { nombre: 'Camoga', logo: 'assets/logos-clientes/camoga.png', url: 'https://www.camoga.com.ar' },
    { nombre: 'Campo Verde', logo: 'assets/logos-clientes/campo-verde.png', url: 'https://www.instagram.com/supermercadocampoverde/?hl=es' },
    { nombre: 'Canteras Argentinas', logo: 'assets/logos-clientes/canteras-argentinas.png', url: 'https://www.canterasargentinas.com.ar' },
    { nombre: 'Casa Farina', logo: 'assets/logos-clientes/casa-farina.png', url: 'https://www.casafarina.com.ar' },
    { nombre: 'CasaNova', logo: 'assets/logos-clientes/casanova.png', url: 'https://www.casanova.com.ar' },
    { nombre: 'Casa Santiago', logo: 'assets/logos-clientes/casa-santiago.png', url: 'https://www.casasantiago.com.ar' },
    { nombre: 'Congelados Inal', logo: 'assets/logos-clientes/congelados-inal.png', url: 'https://www.congeladosinal.com.ar' },
    { nombre: 'El Mudo', logo: 'assets/logos-clientes/el-mudo.png', url: 'https://www.elmudo.com.ar' },
    { nombre: 'Eskabe', logo: 'assets/logos-clientes/eskabe.png', url: 'https://www.eskabe.com.ar' },
    { nombre: 'Eurocafé', logo: 'assets/logos-clientes/eurocafe.png', url: 'https://www.eurocafe.com.ar' },
    { nombre: 'Fava', logo: 'assets/logos-clientes/fava.png', url: 'https://www.fava.com.ar' },
    { nombre: 'Frigorífico 90', logo: 'assets/logos-clientes/frigorifico-90.png', url: 'https://www.frigorifico90.com.ar' },
    { nombre: 'Friosur', logo: 'assets/logos-clientes/friosur.png', url: 'https://www.friosur.com.ar' },
    { nombre: 'GSA', logo: 'assets/logos-clientes/gsa.png', url: 'https://www.gsa.com.ar' },
    { nombre: 'Guerrico', logo: 'assets/logos-clientes/guerrico.png', url: 'https://www.guerrico.com.ar' },
    { nombre: 'Hergo', logo: 'assets/logos-clientes/hergo.png', url: 'https://www.hergo.com.ar' },
    { nombre: 'Hotel Batista', logo: 'assets/logos-clientes/hotel-batista.png', url: 'https://www.hotelbatista.com.ar' },
    { nombre: 'Julieta', logo: 'assets/logos-clientes/julieta.png', url: 'https://www.julieta.com.ar' },
    { nombre: 'Kubo', logo: 'assets/logos-clientes/kubo.png', url: 'https://www.kubo.com.ar' },
    { nombre: 'Luz y Fuerza', logo: 'assets/logos-clientes/luz-y-fuerza.png', url: 'https://www.luzyfuerza.com.ar' },
    { nombre: 'Maderas Misiones', logo: 'assets/logos-clientes/maderas-misiones.png', url: 'https://www.maderasmisiones.com.ar' },
    { nombre: 'Mar Calmo', logo: 'assets/logos-clientes/mar-calmo.png', url: 'https://www.marcalmo.com.ar' },
    { nombre: 'Máximo Frigorífico', logo: 'assets/logos-clientes/maximo-frigorifico.png', url: 'https://www.maximofrigorifico.com.ar' },
    { nombre: 'Medinilla', logo: 'assets/logos-clientes/medinilla-1.png', url: 'https://www.medinilla.com.ar' },
    { nombre: 'Medinilla', logo: 'assets/logos-clientes/medinilla-2.png', url: 'https://www.medinilla.com.ar' },
    { nombre: 'Milagros del Cielo', logo: 'assets/logos-clientes/milagros-del-cielo.png', url: 'https://www.milagrosdelcielo.com.ar' },
    { nombre: 'Mirador 9', logo: 'assets/logos-clientes/mirador-9.png', url: 'https://www.mirador9.com.ar' },
    { nombre: 'Moboshop', logo: 'assets/logos-clientes/moboshop.png', url: 'https://www.moboshop.com.ar' },
    { nombre: 'Orsi', logo: 'assets/logos-clientes/orsi.png', url: 'https://www.orsi.com.ar' },
    { nombre: 'Pampa Fish', logo: 'assets/logos-clientes/pampa-fish.png', url: 'https://www.pampafish.com.ar' },
    { nombre: 'Piña Pesca', logo: 'assets/logos-clientes/pina-pesca.png', url: 'https://www.pinapesca.com.ar' },
    { nombre: 'Rizzo', logo: 'assets/logos-clientes/rizzo.png', url: 'https://www.rizzo.com.ar' },
    { nombre: 'Tiribelli', logo: 'assets/logos-clientes/tiribelli-1.png', url: 'https://www.tiribelli.com.ar' },
    { nombre: 'Tiribelli', logo: 'assets/logos-clientes/tiribelli-2.png', url: 'https://www.tiribelli.com.ar' },
    { nombre: 'Tromarco', logo: 'assets/logos-clientes/tromarco-1.png', url: 'https://www.tromarco.com.ar' },
    { nombre: 'Tromarco', logo: 'assets/logos-clientes/tromarco-2.png', url: 'https://www.tromarco.com.ar' },
    { nombre: 'Via Sano', logo: 'assets/logos-clientes/via-sano.png', url: 'https://www.viasano.com.ar' },
    { nombre: 'Vitalis Navitas', logo: 'assets/logos-clientes/vitalis-navitas.png', url: 'https://www.vitalisnavitas.com.ar' }
  ];

  // Duplicamos el array 3 veces para crear un efecto de loop infinito sin cortes
  get clientesDuplicados(): Cliente[] {
    return [...this.clientes, ...this.clientes, ...this.clientes];
  }
}
