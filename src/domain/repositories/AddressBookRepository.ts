import { AddressBook } from "../entities/AddressBook";

export interface AddressBookRepository {
  GetAddress(): Promise<AddressBook[]>;
  AddAddressBook(data: any): Promise<AddressBook[]>;
}
