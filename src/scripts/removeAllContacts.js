import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    let contactsDataParse = JSON.parse(contactsData);
    contactsDataParse = [];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contactsDataParse, undefined, 2),
      { encoding: 'utf8' },
    );
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
