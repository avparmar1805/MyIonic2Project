import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

// export class MyPage {
//   constructor(public alertCtrl: AlertController) {
//   }
//
//   showAlert() {
//     let alert = this.alertCtrl.create({
//       title: 'New Friend!',
//       subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
//       buttons: ['OK']
//     });
//     alert.present();
//   }
// }

@Component({
  selector: 'alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {

  constructor(public alertCtrl: AlertController) { }

  showBasicAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPromptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showConfirmAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showRadioAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });
    alert.present();
  }

  showCheckBoxAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });

    alert.present();
  }
}
