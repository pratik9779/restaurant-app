export class Restaurant{
  // id : number;
  restaurantName : string;
  email : string;
  mobile : string;
  address : string;
  services : string;

  constructor(restaurantName: string, email : string, mobile : string, address : string, services : string, ){
    // this.id = id;
    this.restaurantName = restaurantName;
    this.email = email;
    this.mobile = mobile;
    this.address = address;
    this.services = services;
  }
}
