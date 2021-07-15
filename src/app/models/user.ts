
export class User {
  role: any;
  subscribe(arg0: (result: any) => void) {
    throw new Error('Method not implemented.');
  }
  
  appContactId: 0;
  title: string;
  title_DE: string;
  title_BHS: string;
  firstName: string;
  lastName: string;
  brandId: 0;
  id=0;
  brandName: string;
  enabled: true;
  appContactRoleId: 0;
  genderId: 0;
  appContactStatusId: 0;
  appContactStatusName: string;
  address:string;
  zip: string;
  cityName: string;
  countryId: 0;
  email: string;
  web: string;
  phone: string;
  mobile: string;
  pin: string;
  status: string;

  

  constructor() {
   
    this.brandId = 0;
    this.id=0;
    this.cityName = '';
    this.firstName = '';
    this.lastName = '';
    this.title = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.web = '';
    this.phone = '';
    this.mobile = '';
    this.address = '';
    this.zip = '';
    this.pin = '';
    this.status='';
    this.enabled = true;
  }
}
