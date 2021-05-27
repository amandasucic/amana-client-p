
export class User {
  role: any;
  subscribe(arg0: (result: any) => void) {
    throw new Error('Method not implemented.');
  }
  id: number;
  brandId: number;
  address: string;
  zip: string;
  firstName: string;
  lastName: string;
  companyName: string;
  title: string;
  about: string;
  email: string;
  web: string;
  phone: string;
  mobile: string;usersId: any;
;
  enabled: boolean;
  brandLogoUrl: string;
  cityId: number;
  cityName: string;
  cityStateId: string;
  cityStateName: string;
  cityStateCountryId: string;
  cityStateCountryName: string;
  created: Date;
  createdUser: number;
  modified: Date;
  modifiedUser: number;
  countryId: number;
  appContactStatusId: number;
  appContactRoleId: number;
  appContactStatusName: string;
  //appContactCatalogItemFavourits: AppContactCatalogItemFavourits[];
  identifier: string;
  pin: string;

  constructor() {
    this.id = 0;
    this.brandId = 0;
    this.cityId = 0;
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
    this.about = '';
    this.cityStateId = '';
    this.cityStateName = '';
    this.cityStateCountryId = '';
    this.cityStateCountryName = '';
    this.enabled = true;
  }
}
