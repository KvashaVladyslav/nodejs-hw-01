import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contactsDataParse = JSON.parse(contactsData);
    return contactsDataParse.length - 1;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
