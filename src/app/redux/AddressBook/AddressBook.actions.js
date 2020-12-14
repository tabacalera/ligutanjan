import { AddressBookImpl } from "../../../data/repositories/AddressBookImpl";
import { AddressServiceImpl } from "../../../domain/usecases/AddressBookService";
import * as types from "./AddressBook.types";

export const GetAddress = () => {
  return async (dispatch) => {
    // dispatch list load request
    const addressRepo = new AddressBookImpl();
    const addressService = new AddressServiceImpl(addressRepo);
    const items = await addressService.GetAddress();
    console.log(items);
    dispatch({ type: types.LIST_LOAD_SUCCESS, payload: items });
  };
};

export const AddAddressBook = (data) => {
  return async (dispatch) => {
    // dispatch add address request
    const addressRepo = new AddressBookImpl();
    const addressService = new AddressServiceImpl(addressRepo);
    await addressService.AddAddressBook(data);
  };
};
