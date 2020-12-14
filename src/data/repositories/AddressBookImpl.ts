import { AddressBook } from "../../domain/entities/AddressBook";
import { AddressBookRepository } from "../../domain/repositories/AddressBookRepository";

class AddressBookDTO {
  id = "";
  firstName = "";
  lastName = "";
  middleName = "";
  age = 0;
  gender = "";
}

export class AddressBookImpl implements AddressBookRepository {
  getLocalItem(name: string) {
    const item = localStorage.getItem(name);
    if (item) {
      return item;
    } else {
      return {};
    }
  }
  GetAddress(): any {
    const itemArray: any = this.getLocalItem("addressBook");
    if (itemArray !== null) {
      return itemArray.obj.map(
        (item: AddressBookDTO) =>
          new AddressBook(
            item.id,
            item.firstName,
            item.lastName,
            item.middleName,
            item.age,
            item.gender
          )
      );
    }
  }
  AddAddressBook(data: any): any {
    localStorage.setItem("addressBook", JSON.stringify(data));
    console.log(data);
  }
}
