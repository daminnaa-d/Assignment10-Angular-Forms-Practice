import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  title = 'Template driven forms';

  // @ts-ignore
  @ViewChild('personalDataForm', null) personalDataForm: NgForm;

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
  constructor() { }

  // @ts-ignore
  personalData: personalData;


  ngOnInit(): void{
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

    setTimeout(() => {
      this.personalDataForm.setValue(this.personalData);
    });

  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.personalDataForm.value);
  }

  // tslint:disable-next-line:typedef
  setDefaults() {
    this.personalDataForm.setValue(this.personalData);
  }

  // tslint:disable-next-line:typedef
  changeRegion() {
    this.personalDataForm.controls.region.setValue('1');
  }

  // tslint:disable-next-line:typedef
  patchValue() {
    const obj = {
      firstname: 'PatchedName',
      lastname: 'PatchedSurname',
      email: 'email.new@gmail.com',
    };

    this.personalDataForm.control.patchValue(obj);

  }

  // tslint:disable-next-line:typedef
  changeAddress() {
    const obj = {
      city: 'Nursultan',
      street: 'Turkistan St',
      pincode: '010000'
    };
    const address = this.personalDataForm.controls.address as FormGroup;
    address.patchValue(obj);

  }

  // tslint:disable-next-line:typedef
  reset() {
    this.personalDataForm.reset();
  }

  // tslint:disable-next-line:typedef
  resetForm() {
    this.personalDataForm.resetForm();
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
