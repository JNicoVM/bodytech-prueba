import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  imageUrl;

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  getCamera(){
      this.camera.getPicture({
        sourceType : this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI
      }).then((ress) =>{
          this.imageUrl=  'data:image/jpeg;base64,' + ress;
      }).catch((err)=>{
        console.log(err)
      })
  }

}
