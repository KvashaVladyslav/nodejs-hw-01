import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    let contactsDataParse = JSON.parse(contactsData);
    if (contactsDataParse !== 0) {
      contactsDataParse.pop();
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(contactsDataParse, undefined, 2),
        { encoding: 'utf8' },
      );
    } else {
      console.log('Your contacts list is empty');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
