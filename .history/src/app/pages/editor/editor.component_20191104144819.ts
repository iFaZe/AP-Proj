import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ViolationTypeService } from '../../shared/violationtype.service';
import { ViolationType } from '../../shared/violationtype.model';

//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  

  constructor(public service: ProfileService, public serv: ViolationTypeService)
   { }

  ngOnInit() {
    this.service.refreshList();
    this.serv.refreshList();
    this.resetForm();
}


  populateForm(pro : Profile) {
    this.service.formData = Object.assign({}, pro);
  }
  populatevioForms(vio : ViolationType) {
    this.serv.formData = Object.assign({}, vio);
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      FirstName: '',
      LastName: '',
      tele:'',
      Liscence: null,
      email: '',
      Password: '',
      ProPhoto: null,
      TotGamBirSho: null,
      TotProBirSho: null,
      HuntingSession: null,
      ViolationType: null
    }
  }
  
   
  updateRecord(form: NgForm) {
    this.service.putProfile(form.value).subscribe(res => {
      // this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  updatevioRecord(form: NgForm) {
    this.serv.putViolationType(form.value).subscribe(res => {
      // this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.serv.refreshList();
    });
  }
  onSubmit(form: NgForm) {
    if (form.value.Liscence && form.value.Id== null){
      this.insertRecord(form);
      this.insertvioRecord(form);
    }
    else{
      this.updateRecord(form);
      this.updatevioRecord(form);
    }
  }

  insertvioRecord(form: NgForm) {
    this.serv.postViolationType(form.value).subscribe(res => {
    //  this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.serv.refreshList();
    });
  }

  insertRecord(form: NgForm) {
    this.service.postProfile(form.value).subscribe(res => {
    //  this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteProfile(id).subscribe(res => {
        this.service.refreshList();
       // this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
}
