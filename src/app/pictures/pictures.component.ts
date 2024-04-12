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
    { src: 'assets/ClimbingCompetition.jpg', alt: 'Image 3', visible: false },
    { src: 'assets/outdoorRockClimbing.jpg', alt: 'Image 2', visible: false }
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
