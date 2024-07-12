import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contactsDataParse = JSON.parse(contactsData);
    return contactsDataParse;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
