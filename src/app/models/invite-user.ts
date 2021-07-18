export class InviteUser{
  email: string;
  subject: string;
  message: string;
  languageId:string;
  brandId: number;


  constructor(){
      this.email='';
      this.subject='';
      this.message='';
      this.languageId='';
      this.brandId= 0;
  }

}