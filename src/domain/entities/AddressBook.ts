export class AddressBook {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  age: number;
  gender: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    middleName: string,
    age: number,
    gender: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.age = age;
    this.gender = gender;
  }
}
