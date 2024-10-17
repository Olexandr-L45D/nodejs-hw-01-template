import { readContacts } from "../../utils/readContacts.js";

export const getAllContacts = async () => readContacts();
// export const getAllContacts = async () => {
//     const contact = await readContacts();
// };

console.log(await getAllContacts());
