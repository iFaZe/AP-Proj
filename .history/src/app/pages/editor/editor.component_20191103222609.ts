import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  bankAccountForms: FormArray = this.fb.array([]);
  

  constructor(public service: ProfileService, private fb: FormBuilder,)
   { }

  ngOnInit() {
    this.service.refreshList();
}

addBankAccountForm(){
  this.bankAccountForms.push(this.fb.group({
    bankAcountID : [0],
    accountNumber: [''],
    accountHolder: [''],
    bankID : [0],
    IFSC : ['']
  }));
}

  populateForm(pro : Profile) {
    this.service.formData = Object.assign({}, pro);
  }
  
  /*
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
      TotProBirSho: null
    }
  }
  
   
  updateRecord(form: NgForm) {
    this.service.putProfile(form.value).subscribe(res => {
      // this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  */

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteProfile(id).subscribe(res => {
        this.service.refreshList();
       // this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
}
