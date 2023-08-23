import { Component } from "@angular/core";

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
  inputs: ['activeColor', 'baseColor', 'overlayColor', 'imageSrc']
})

export class FileUploaderComponent {

  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';
  imageSrc: string = '';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  iconColor: string = '';
  borderColor: string = '';

  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(event: any):any {
    event.preventDefault();
    this.dragging = false;
    this.handleInputChange(event);
  }

  handleImageLoad() {
    this.imageLoaded = true;
    this.iconColor = this.overlayColor;
  }

  handleInputChange(event:any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(event: any){
    var reader = event.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }

  setActive() {
    this.borderColor = this.activeColor;
    if (this.imageSrc.length === 0) {
      this.iconColor = this.activeColor;
    }
  }

  setInactive() {
    this.borderColor = this.baseColor;
    if (this.imageSrc.length === 0) {
      this.iconColor = this.baseColor;
    }
  }

}
