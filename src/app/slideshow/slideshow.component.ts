import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  imgages=["cr72.webp",'cr7lindo.jpeg',"portugale.jpeg"];
  headlines=['SSSUUIIII', "GOAT", "Olha a Nazare"];
  currentImage=0;
  showImage=true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage(){
    setInterval(() => {
      this.currentImage++;
      this.currentImage=this.currentImage % this.imgages.length;
      this.showImage=false;

     setTimeout(()=>{
      this.showImage=true;
     },10)

    },8000);
  }
}
