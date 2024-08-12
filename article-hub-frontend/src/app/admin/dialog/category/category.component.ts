import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { CategoryService } from 'src/app/services/category.service';
import { ThemeService } from 'src/app/services/theme.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {  
  onAddCategory = new EventEmitter();
  onEditCategory = new EventEmitter();
  categoryForm:any = FormGroup;
  dialogAction:any = "Add";
  action:any = "Add";
  responseMessage:any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
  private formBuilder:FormBuilder,
  private categoryService:CategoryService,
  public dialogRef:MatDialogRef<CategoryComponent>,
  private snackbarService:SnackbarService,
  public themeService:ThemeService,
  private ngxService:NgxUiLoaderService){}


  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name:[null,[Validators.required]]
    });

    if(this.dialogData.action === 'Edit'){
      this.dialogAction = "Edit";
      this.action= "Update";
      this.categoryForm.patchValue(this.dialogData.data);
    }
  }

  handleSubmit(){
    if(this.dialogAction == "Edit"){
      this.edit();
    }
    else{
      this.add();
    }
  }

  add(){
    this.ngxService.start();
    var formData = this.categoryForm.value;
    var data ={
      name:formData.name
    }

    this.categoryService.addNewCaterogy(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();
      this.onAddCategory.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage);
    },(error:any)=>{
      this.ngxService.stop();
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage);
    })
  }

  edit(){
    this.ngxService.start();
    var formData = this.categoryForm.value;
    var data ={
      id: this.dialogData.data.id,
      name:formData.name
      }

    this.categoryService.updateCategory(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();
      this.onEditCategory.emit();
      this.responseMessage = response.message;
      this.snackbarService.openSnackBar(this.responseMessage);
    },(error:any)=>{
      this.ngxService.stop();
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage);
    })
  }

}
