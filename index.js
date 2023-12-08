import yargs from "yargs";

import * as contactsService from "./db/contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await contactsService.getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const delContact = await contactsService.removeContact(id);
      return console.log(delContact);
  }
}
const { argv } = yargs(process.argv.slice(2));

invokeAction(argv);
