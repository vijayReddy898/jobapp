import { Component, OnInit ,ViewChild, ViewContainerRef} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {PostresumeService} from '../postresume.service';
import {LoaderService} from '../loader.service';
import { ToastsManager } from 'ng2-toastr';
import {GlobalServices} from '../GlobalService.component';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-post-resume',
  templateUrl: './post-resume.component.html',
  styleUrls: ['./post-resume.component.css']
})
export class PostResumeComponent implements OnInit {
  showLoader: boolean;
  resumeFile: File;
  image:'';  
  today:any;
  Duedatepicker: Partial<BsDatepickerConfig>;
  maxDate: Date;
  

 @ViewChild('userImage') 'User_Image';
  photoName:string='Type: JPG, PNG Size: 3.5 x 4.5 cm';
  postresumeForm: FormGroup;
  public loading = false;
  
  get workHistry(): FormArray{
    return <FormArray>this.postresumeForm.get('workHistry');
  }
  get educationBackground(): FormArray{
    return <FormArray>this.postresumeForm.get('educationBackground');
  }
  get language(): FormArray{
    return <FormArray>this.postresumeForm.get('language');
  }

  get personalDetails(): FormArray{
    return <FormArray>this.postresumeForm.get('personalDetails');
  }
  constructor(private fb:FormBuilder,private service:PostresumeService, 
    private loaderService: LoaderService,public toastr: ToastsManager, 
    vcr: ViewContainerRef
  ) 
  {
    this.maxDate = new Date();
    this.Duedatepicker = Object.assign({}, { containerClass: 'theme-dark-blue', showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY',maxDate:this.maxDate });
    this.toastr.setRootViewContainerRef(vcr); 
    this.postresumeForm=this.fb.group({
      fullName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phoneNumber:['',[Validators.required]],
      additionalInfo:[''],
      userImage:[this.image,[Validators.required]],
      carrierObjective:[''], 
      workHistry: this.fb.array([this.buildworkHistry()]),
      educationBackground:this.fb.array([this.buildeducationBackground()]),
      specialQualification:[''],
      language:this.fb.array([this.buildlanguage()]),
      personalDetails:this.fb.array([this.buildpersonDetails()]),
      declaration:[''],
      emailAlert:[false]

    })

  //  this.today = this.globalServices.todayDate();    
   }
  
   
   uploadFile(event:any){
    let file = event.target.files[0];
    
    this.postresumeForm.controls['userImage'].setValue(file ? file : '');
    console.log(file);   
    this.resumeFile=file;
     let fileName = file.name;
     this.photoName=fileName;   
}

  ngOnInit() { 
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
  });

  }
  buildworkHistry(): FormGroup {
      return this.fb.group({
      companyName:[''],
      designation:[''],
      timePeriod:this.fb.group({fromDate:[''],toDate:['']}),
      jobDescription:['']
});
  }
  buildeducationBackground(): FormGroup {
    return this.fb.group({
      instituteName:[''],
      degree:[''],
      timePeriod:this.fb.group({fromDate:[''],toDate:['']}),
      designation:[''],
});
  }

  buildlanguage(): FormGroup {
    return this.fb.group({
      languageName:[''],
      rating:['']
});
  }
  buildpersonDetails(): FormGroup {
    return this.fb.group({
      lastname:['',[Validators.required,Validators.minLength(3)]],
      fatherName:[''],
      motherName:[''],
      
      dateOfBirth:['',[Validators.required]],
      
      birthPlace:[''],
      nationality:[''],
      sex:[''],
      address:[''],
});
  }
  addworkHistry(): void {
    this.workHistry.push(this.buildworkHistry());
  }
  deleteworkHistry(index:number):void{
    this.workHistry.removeAt(index);
  }
  addeducationBackground(): void {
    this.educationBackground.push(this.buildeducationBackground());
  }
  deleteducationBackground(index:number): void {
    this.educationBackground.removeAt(index);
  }
  addlanguage(): void {
    this.language.push(this.buildlanguage());
  }
  deletelanguage(index:number):void{
    this.language.removeAt(index);
  }
  addpersonalDetails(): void {
    this.personalDetails.push(this.buildpersonDetails());
  }
  save():void
  {
    this.loaderService.display(true);
     let postresumedata=this.postresumeForm.value;   
    const formdata:FormData = new FormData();  
    formdata.append('userImage', this.resumeFile);
    formdata.append('postresumedata', JSON.stringify(postresumedata));
  
    this.service.postresume(formdata).subscribe((resp) => {
      if(resp)
      {
        this.postresumeForm.reset(),
        this.photoName='Type: JPG, PNG Size: 3.5 x 4.5 cm';
          this.loaderService.display(false);        
         this.toastr.success('Your Resume Uploaded Successfully!', 'Success!',{toastLife: 1000});         
      }
      else{
        this.loaderService.display(false);   
        this.toastr.error('Failed to add resume!', 'Post Resume',{toastLife: 1000});       
          }
     
  });
  }
  clear():void
  {
    this.postresumeForm.reset(),
    this.photoName='Type: JPG, PNG Size: 3.5 x 4.5 cm';
  } 
 

}
