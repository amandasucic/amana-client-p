export class InviteUser{
  email: string;
  subject: string;
  message: string;
  brandId: number;


  constructor(){
      this.email='';
      this.subject='';
      this.message='';
      this.brandId= 0;
  }

}