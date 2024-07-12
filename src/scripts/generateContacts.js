import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contactsData = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contactsDataParse = JSON.parse(contactsData);
    for (let i = 0; i < number; i += 1) {
      const newContact = createFakeContact();
      contactsDataParse.push(newContact);
    }
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contactsDataParse, undefined, 2),
      { encoding: 'utf8' },
    );
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
