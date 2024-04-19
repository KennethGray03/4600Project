import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent implements OnInit {
  images = [
    { src: 'assets/Backpack.jpg', alt: 'Image 1', visible: true },
    { src: 'assets/Caving.jpg', alt: 'Image 2', visible: false },
    { src: 'assets/indian gravepoint.jpg', alt: 'Image 3', visible: false },
    { src: 'assets/outdoorRockClimbing.jpg', alt: 'Image 4', visible: false },
    { src: 'assets/campus comp.jpg', alt: 'Image 5', visible: false },
    { src: 'assets/dyno comp.jpg', alt: 'Image 6', visible: false },
    { src: 'assets/FG water.jpg', alt: 'Image 7', visible: false },
    { src: 'assets/Fiery Gizzard.jpg', alt: 'Image 8', visible: false },
    { src: 'assets/foster falls.jpg', alt: 'Image 9', visible: false },
    { src: 'assets/grand canyon.jpg', alt: 'Image 10', visible: false },
    { src: 'assets/kings bluff.jpg', alt: 'Image 11', visible: false },
    { src: 'assets/smokies.jpg', alt: 'Image 12', visible: false }
  ];
  currentIndex = 0;

  constructor() { }

ngOnInit(): void {
    setInterval(() => this.rotateImages(), 4000);
}

rotateImages(): void {
  this.images[this.currentIndex].visible = false;
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
  this.images[this.currentIndex].visible = true;
}

}
