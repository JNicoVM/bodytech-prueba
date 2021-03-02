import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  base64Image : String;
  textChanged: String = "No se ha tomado ninguna foto!";
  constructor(private camera: Camera) { }

  ngOnInit() {
  }



  openMyCamera()
  {
    this.camera.getPicture({quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true}).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.textChanged =  "Excelente has tomador una foto!";
    }, (err) => {
     // Handle error
    });
  }


}
