import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularForms';

  regionList: region[] = [
    new region('1', 'Nursultan city'),
    new region('2', 'Almaty city'),
    new region('3', 'Akmola region'),
    new region('4', 'Aktobe region'),
    new region('5', 'Almaty region'),
    new region('6', 'Atyrau region'),
    new region('7', 'West Kazakhatan region'),
    new region('8', 'Zhambyl region'),
    new region('9', 'Karaganda region'),
    new region('10', 'Kostanay region'),
    new region('11', 'Kyzylorda region'),
    new region('12', 'Mangystau region'),
    new region('13', 'Turkestan region '),
    new region('14', 'Pavlodar region'),
    new region('15', 'North Kazakhstan region'),
    new region('16', 'East Kazakhatan region '),
    new region('17', 'Shymkent city')
  ];



  // @ts-ignore
  personalData: personalData;

  ngOnInit(): void {

    this.personalData = {
      firstname: 'Name',
      lastname: 'Surname',
      email: 'email@gmail.com',
      gender: 'female',
      region: '14',
      address: {
        city: 'Pavlodar',
        street: 'Nazarbayev avenue',
        pincode: '140000'
      }
    };

  }

  // tslint:disable-next-line:typedef
  onSubmit(personalDataForm: NgForm) {
    console.log(this.personalData);
  }

  // tslint:disable-next-line:typedef
  setDefaults() {
    this.personalData = {
      firstname: 'Name',
      lastname: 'Surname',
      email: 'email@gmail.com',
      gender: 'female',
      region: '14',
      address: {
        city: 'Pavlodar',
        street: 'Nazarbayev avenue',
        pincode: '140000'
      }
    };
  }


  // tslint:disable-next-line:typedef
  changeRegion() {
    this.personalData.region = '1';
  }

  // tslint:disable-next-line:typedef
  reset(personalDataForm: NgForm) {
    personalDataForm.resetForm();
  }

}

// tslint:disable-next-line:class-name
export class personalData {
  // @ts-ignore
  firstname: string;
  // @ts-ignore
  lastname: string;
  // @ts-ignore
  email: string;
  // @ts-ignore
  gender: string;
  // @ts-ignore
  region: string;
  // @ts-ignore
  address: {
    city: string;
    street: string;
    pincode: string;
  };
}

// tslint:disable-next-line:class-name
export class region {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
