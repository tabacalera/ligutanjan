import { AddressBook } from "../entities/AddressBook";
import { AddressBookRepository } from "../repositories/AddressBookRepository";

export class AddressServiceImpl implements AddressBookRepository {
  addressRepo: AddressBookRepository;

  constructor(ir: AddressBookRepository) {
    this.addressRepo = ir;
  }

  async GetAddress(): Promise<AddressBook[]> {
    return this.addressRepo.GetAddress();
  }
  async AddAddressBook(data: any): Promise<AddressBook[]> {
    return this.addressRepo.AddAddressBook(data);
  }
}
