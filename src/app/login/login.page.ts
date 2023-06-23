import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators,
} from '@angular/forms'
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController){ 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'clave': new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }
  async ingresar(){
    var formulario = this.formularioLogin.value;
    if(formulario.nombre == 'manuel' && formulario.clave == '123456'){
      console.log('Hola');
      this.navCtrl.navigateRoot('cv');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste no son correctos',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
