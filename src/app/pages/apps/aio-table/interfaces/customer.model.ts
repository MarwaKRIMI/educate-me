export class Customer {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  picture: string;
  role: number;
  created_at: string;
  updated_at: string;
 
  labels: any;

  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.email = customer.email;
    this.email_verified_at = customer.email_verified_at;
    this.picture = customer.picture;
    this.role = customer.role;
    this.created_at = customer.created_at;
    this.updated_at = customer.updated_at;

    this.labels = customer.labels;
  }

  get username() {
    let username = '';

    if (this.name) {
      username = this.name;
    } 

    return username;
  }

  set username(value) {
  }


}
