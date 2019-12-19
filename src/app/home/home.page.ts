import { Component } from '@angular/core';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  @ViewChild('slider',{ read: ElementRef, static: true }) slider: ElementRef;
  sliderOpts = {
    zoom :{
      maxRatio: 5
    }
  };
  logScrollStart(){
    console.log("logScrollStart : When Scroll Starts");
  }
 
  logScrolling(){
    console.log("logScrolling : When Scrolling");
  }
 
  logScrollEnd(){
    console.log("logScrollEnd : When Scroll Ends");
  }
  zoom(zoomIn: boolean) :void{
    let zoom = this.slider.nativeElement.swiper.zoom;
    if(zoomIn){
      zoom.in();
    }else{
      zoom.out();
    }
  }

}
