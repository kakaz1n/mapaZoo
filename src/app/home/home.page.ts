import { Component } from '@angular/core';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {  ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private screenOrientation: ScreenOrientation, public platform: Platform) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    console.log(platform.width());
    console.log(platform.height ());
    this.tamanho = this.platform.width();

    console.log(platform.platforms());
    /*console.log('x: ' + this.x);
    console.log('y: ' + this.y);
    console.log('z: ' + this.z);*/
  }
  card: any = '';
  tamanho: any = 14174;
  top: any = 0;
  left: any = 0;


@ViewChild('slider', { read: ElementRef, static: true }) slider: ElementRef;
sliderOpts = {
    zoom : {
      maxRatio: 2
    },
    on:{
       click(){
          this.getCoordinates(event);
       }
    }
  };
@ViewChild('fab_Grandes_Primatas', { read: ElementRef, static: true }) fab_Grandes_Primatas_Ref: ElementRef;
@ViewChild('fab_Pequenos_Primatas_Brasileiros', { read: ElementRef, static: true }) fab_Pequenos_Primatas_Brasileiros_Ref: ElementRef;
@ViewChild('fab_Pequenos_Medios_Psitacideos', { read: ElementRef, static: true }) fab_Pequenos_Medios_Psitacideos_Ref: ElementRef;
@ViewChild('fab_Pavoes_Faisoes', { read: ElementRef, static: true }) fab_Pavoes_Faisoes_Ref: ElementRef;
@ViewChild('fab_Marreco', { read: ElementRef, static: true }) fab_Marreco_Ref: ElementRef;
@ViewChild('fab_Tamandua_Bandeira', { read: ElementRef, static: true }) fab_Tamandua_Bandeira_Ref: ElementRef;
@ViewChild('fab_Primatas_Africanos', { read: ElementRef, static: true }) fab_Primatas_Africanos_Ref: ElementRef;
@ViewChild('fab_Furao', { read: ElementRef, static: true }) fab_Furao_Ref: ElementRef;
@ViewChild('fab_Herpestidae', { read: ElementRef, static: true }) fab_Herpestidae_Ref: ElementRef;
@ViewChild('fab_Grou_Coroado', { read: ElementRef, static: true }) fab_Grou_Coroado_Ref: ElementRef;
@ViewChild('fab_Corujas', { read: ElementRef, static: true }) fab_Corujas_Ref: ElementRef;
@ViewChild('fab_Aves_Gigantes', { read: ElementRef, static: true }) fab_Aves_Gigantes_Ref: ElementRef;
@ViewChild('fab_Grandes_Psitacideos', { read: ElementRef, static: true }) fab_Grandes_Psitacideos_Ref: ElementRef;
@ViewChild('fab_Grandes_Ramphastideos', { read: ElementRef, static: true }) fab_Grandes_Ramphastideos_Ref: ElementRef;
@ViewChild('fab_Cracideos', { read: ElementRef, static: true }) fab_Cracideos_Ref: ElementRef;
@ViewChild('fab_Ouriço', { read: ElementRef, static: true }) fab_Ouriço_Ref: ElementRef;
@ViewChild('fab_Pequenos_Medios_Felinos', { read: ElementRef, static: true }) fab_Pequenos_Medios_Felinos_Ref: ElementRef;
@ViewChild('fab_Aquario', { read: ElementRef, static: true }) fab_Aquario_Ref: ElementRef;
@ViewChild('fab_Anta', { read: ElementRef, static: true }) fab_Anta_Ref: ElementRef;
@ViewChild('fab_Lobo_Guara', { read: ElementRef, static: true }) fab_Lobo_Guara_Ref: ElementRef;
@ViewChild('fab_Gralhas', { read: ElementRef, static: true }) fab_Gralhas_Ref: ElementRef;
@ViewChild('fab_Turaco_Orelha', { read: ElementRef, static: true }) fab_Turaco_Orelha_Ref: ElementRef;
@ViewChild('fab_Irara', { read: ElementRef, static: true }) fab_Irara_Ref: ElementRef;
@ViewChild('fab_Canguru', { read: ElementRef, static: true }) fab_Canguru_Ref: ElementRef;
@ViewChild('fab_Aves_Ribeirinhas', { read: ElementRef, static: true }) fab_Aves_Ribeirinhas_Ref: ElementRef;
@ViewChild('fab_Flamingo', { read: ElementRef, static: true }) fab_Flamingo_Ref: ElementRef;
@ViewChild('fab_Antilopes', { read: ElementRef, static: true }) fab_Antilopes_Ref: ElementRef;
@ViewChild('fab_Cervideos', { read: ElementRef, static: true }) fab_Cervideos_Ref: ElementRef;
@ViewChild('fab_Pinguinario', { read: ElementRef, static: true }) fab_Pinguinario_Ref: ElementRef;
@ViewChild('fab_Casa_Repteis', { read: ElementRef, static: true }) fab_Casa_Repteis_Ref: ElementRef;
@ViewChild('fab_Grandes_Felinos', { read: ElementRef, static: true }) fab_Grandes_Felinos_Ref: ElementRef;
@ViewChild('fab_Camelideos', { read: ElementRef, static: true }) fab_Camelideos_Ref: ElementRef;
@ViewChild('fab_Atoba', { read: ElementRef, static: true }) fab_Atoba_Ref: ElementRef;
@ViewChild('fab_Passariformes', { read: ElementRef, static: true }) fab_Passariformes_Ref: ElementRef;
@ViewChild('fab_Aves_Rapina', { read: ElementRef, static: true }) fab_Aves_Rapina_Ref: ElementRef;
@ViewChild('fab_Ilha_Primatas_Lago', { read: ElementRef, static: true }) fab_Ilha_Primatas_Lago_Ref: ElementRef;
@ViewChild('fab_Portaria', { read: ElementRef, static: true }) fab_Portaria_Ref: ElementRef;
@ViewChild('fab_Praça_Alimentaçao', { read: ElementRef, static: true }) fab_Praça_Alimentaçao_Ref: ElementRef;
@ViewChild('fab_Bebedouro', { read: ElementRef, static: true }) fab_Bebedouro_Ref: ElementRef;
@ViewChild('fab_Lanchonete', { read: ElementRef, static: true }) fab_Lanchonete_Ref: ElementRef;
@ViewChild('fab_EX', { read: ElementRef, static: true }) fab_EX_Ref: ElementRef;
@ViewChild('fab_Centro_Educaçao_Ambiental', { read: ElementRef, static: true }) fab_Centro_Educaçao_Ambiental_Ref: ElementRef;
@ViewChild('fab_Administraçao', { read: ElementRef, static: true }) fab_Administraçao_Ref: ElementRef;
@ViewChild('fab_Viveiro_Plantas', { read: ElementRef, static: true }) fab_Viveiro_Plantas_Ref: ElementRef;
@ViewChild('fab_Setor_Nutriçao', { read: ElementRef, static: true }) fab_Setor_Nutriçao_Ref: ElementRef;
@ViewChild('fab_Setor_Veterinario', { read: ElementRef, static: true }) fab_Setor_Veterinario_Ref: ElementRef;
@ViewChild('fab_Banheiro', { read: ElementRef, static: true }) fab_Banheiro_Ref: ElementRef;
@ViewChild('fab_Anfiteatro', { read: ElementRef, static: true }) fab_Anfiteatro_Ref: ElementRef;

logScrollStart() {
    console.log('logScrollStart : When Scroll Starts');
  }

logScrolling() {
    console.log('logScrolling : When Scrolling');
  }

logScrollEnd() {
    console.log('logScrollEnd : When Scroll Ends');
  }
zoom(zoomIn: boolean): void {
    const zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }
  // tslint:disable-next-line: variable-name
Card(icon_name: string) {
    //console.log(icon_name);
    if (icon_name === this.card) { return 1; }
    return 0;
  }
SetCard(word: string) {
    console.log(word);
    if (this.card === word) {
      this.card = '';
    } else { this.card = word; }
    this.tamanho = this.platform.width();

    //console.log(this.platform.width());
    //console.log(this.platform.height ());
    //console.log(3325 * this.tamanho / 14174 + ',' + (5562 * this.tamanho) / 14174);
  }
getCoordinates(event) {
    // tslint:disable-next-line: max-line-length
    if ((event.layerX >= (3303 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3303 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
        // tslint:disable-next-line: max-line-length
        (event.layerY >= 5633 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5633 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
        this.SetCard('Grandes_Primatas');
        this.top = event.layerY;
        this.left = event.layerX;
        this.fab_Grandes_Primatas_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
    }
    else if ((event.layerX >= (4109 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (4109 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 5610 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5610 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Grandes_Primatas');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Grandes_Primatas_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
    }
    else if ((event.layerX >= (3372 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3372 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 6010 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6010 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Pequenos_Primatas_Brasileiros');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Pequenos_Primatas_Brasileiros_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
    }
    else if ((event.layerX >= (4176 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (4176 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 5966 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5966 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Pequenos_Medios_Psitacideos');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Pequenos_Medios_Psitacideos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
    }
    else if ((event.layerX >= (3535 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3535 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 6345 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6345 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Pavoes_Faisoes');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Pavoes_Faisoes_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
    }
    else if ((event.layerX >= (4719 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (4719 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 6513 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6513 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Marreco');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Marreco_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
  }
    else if ((event.layerX >= (4328 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (4328 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 7020 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7020 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Tamandua_Bandeira');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Tamandua_Bandeira_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
  } 
   else if ((event.layerX >= (3725 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3725 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 7236 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7236 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Primatas_Africanos');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Primatas_Africanos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
  }
   else if ((event.layerX >= (3967 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3967 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 7687 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7687 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Furao');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Furao_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
  }
   else if ((event.layerX >= (4650 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (4650 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 7553 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7553 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Herpestidae');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Herpestidae_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
  }
   else if ((event.layerX >= (4926 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (4926 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 7825 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7825 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Grou_Coroado');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Grou_Coroado_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
  }
   else if ((event.layerX >= (3686 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3686 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 8588 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 8588 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Corujas');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Corujas_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
  }
   else if ((event.layerX >= (2435 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (2435 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
      (event.layerY >= 9037 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 9037 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
      this.SetCard('Aves_Gigantes');
      this.top = event.layerY;
      this.left = event.layerX;
      this.fab_Aves_Gigantes_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
  }
  else if ((event.layerX >= (4257 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (4257 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
     (event.layerY >= 10184 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 10184 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
     this.SetCard('Aves_Gigantes');
     this.top = event.layerY;
     this.left = event.layerX;
     this.fab_Aves_Gigantes_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
 }
 else if ((event.layerX >= (6983 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6983 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
    (event.layerY >= 9186 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 9186 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
    this.SetCard('Aves_Gigantes');
    this.top = event.layerY;
    this.left = event.layerX;
    this.fab_Aves_Gigantes_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7707 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7707 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 8910 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 8910 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Aves_Gigantes');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Aves_Gigantes_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (5639 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (5639 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 7978 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7978 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Grandes_Psitacideos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Grandes_Psitacideos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6164 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6164 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5682 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5682 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Grandes_Ramphastideos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Grandes_Ramphastideos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6200 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6200 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6121 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6121 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Cracideos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Cracideos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6419 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6419 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6894 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6894 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Ouriço');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Ouriço_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6296 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6296 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 7437 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7437 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Pequenos_Medios_Felinos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Pequenos_Medios_Felinos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6503 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6503 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 7981 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7981 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Aquario');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Aquario_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7499 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7499 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 7251 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7251 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Anta');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Anta_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7463 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7463 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 7919 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7919 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Anta');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Anta_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7671 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7671 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6543 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6543 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Lobo_Guara');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Lobo_Guara_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7009 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7009 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6320 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6320 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Gralhas');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Gralhas_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7069 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7069 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5989 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5989 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Turaco_Orelha');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Turaco_Orelha_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7681 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7681 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6118 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6118 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Irara');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Irara_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6788 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6788 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5852 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5852 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Canguru');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Canguru_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7558 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7558 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5620 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5620 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Aves_Ribeirinhas');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Aves_Ribeirinhas_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (8540 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (8540 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6350 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6350 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Flamingo');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Flamingo_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (8687 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (8687 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6940 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6940 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Antilopes');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Antilopes_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (8475 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (8475 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 7578 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7578 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Cervideos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Cervideos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (9307 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (9307 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5656 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5656 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Pinguinario');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Pinguinario_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (10091 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (10091 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5571 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5571 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Casa_Repteis');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Casa_Repteis_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (10799 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (10799 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5335 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5335 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Casa_Repteis');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Casa_Repteis_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (9835 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (9835 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6027 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6027 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Grandes_Felinos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Grandes_Felinos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (10835 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (10835 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5719 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5719 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Grandes_Felinos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Grandes_Felinos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (11567 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (11567 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5487 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5487 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Camelideos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Camelideos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (11659 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (11659 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6031 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6031 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Camelideos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Camelideos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (12239 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (12239 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5731 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5731 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Camelideos');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Camelideos_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (10919 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (10919 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6359 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6359 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Atoba');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Atoba_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (12139 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (12139 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6161 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6161 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Passariformes');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Passariformes_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (12259 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (12259 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6562 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6562 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Aves_Rapina');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Aves_Rapina_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (8931 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (8931 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 9139 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 9139 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Ilha_Primatas_Lago');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Ilha_Primatas_Lago_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (9511 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (9511 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 8519 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 8519 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Ilha_Primatas_Lago');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Ilha_Primatas_Lago_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (10343 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (10343 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 8243 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 8243 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Ilha_Primatas_Lago');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Ilha_Primatas_Lago_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (11115 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (11115 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 8063 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 8063 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Ilha_Primatas_Lago');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Ilha_Primatas_Lago_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (11683 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (11683 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 8379 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 8379 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Ilha_Primatas_Lago');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Ilha_Primatas_Lago_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (3993 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3993 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 4923 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 4923 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Portaria');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Portaria_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (3933 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3933 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6700 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6700 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Praça_Alimentaçao');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Praça_Alimentaçao_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (3517 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3517 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6768 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6768 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Praça_Alimentaçao');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Praça_Alimentaçao_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (3297 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3297 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 7631 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 7631 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Bebedouro');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Bebedouro_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (3109 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (3109 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6635 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6635 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Bebedouro');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Bebedouro_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (5812 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (5812 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5719 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5719 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Bebedouro');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Bebedouro_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (9312 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (9312 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6203 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6203 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Bebedouro');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Bebedouro_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (5050 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (5050 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5854 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5854 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Lanchonete');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Lanchonete_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6062 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6062 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 9059 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 9059 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Lanchonete');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Lanchonete_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (5294 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (5294 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5374 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5374 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('EX');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_EX_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (5614 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (5614 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 4840 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 4840 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Centro_Educaçao_Ambiental');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Centro_Educaçao_Ambiental_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (5691 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (5691 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5262 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5262 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Administraçao');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Administraçao_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6142 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6142 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5033 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5033 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Viveiro_Plantas');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Viveiro_Plantas_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6984 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6984 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5253 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5254 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Setor_Nutriçao');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Setor_Nutriçao_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (7388 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (7388 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5002 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5002 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Setor_Veterinario');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Setor_Veterinario_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6818 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6818 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 5604 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 5604 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Banheiro');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Banheiro_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
else if ((event.layerX >= (6143 * this.tamanho / 14174 - 165 * this.tamanho / 14174) && event.layerX <= (6143 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) &&
   (event.layerY >= 6442 * this.tamanho / 14174 - 165 * this.tamanho / 14174 && event.layerY <= 6442 * this.tamanho / 14174 + 165 * this.tamanho / 14174)) {
   this.SetCard('Anfiteatro');
   this.top = event.layerY;
   this.left = event.layerX;
   this.fab_Anfiteatro_Ref.nativeElement.style = "top:"+ this.top+"px; left:"+this.left+"px;";
}
  else this.SetCard('');
    //console.log(this.fabRef.nativeElement.top);
   /* console.log(event.layerX);
    console.log(event.layerY);
    console.log(this.top);
    console.log(this.left);*/
    //console.log(3325 * this.tamanho / 14174 - 165 * this.tamanho / 14174 +"<="+ event.clientX + "<=" + 3325 * this.tamanho / 14174 + 165 * this.tamanho / 14174 );
    //console.log(5562 * this.tamanho / 14174 - 165 * this.tamanho / 14174 +"<="+ event.clientY + "<=" + 5562 * this.tamanho / 14174 + 165 * this.tamanho / 14174 );
}

}
