import { writeFile } from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';
export const writeContacts = contact => writeFile(PATH_DB, JSON.stringify(contact, null, 2));
// другий варіант передати в JSON.stringify(contact, null, 2) функцію updatedContacts яка прописана в окремому файлі
// export const writeContacts = async (updatedContacts) => {};
//  нище приклад на піснях від лектора
// writeFile -це вбудований метод який записує (треба йому прописати шлях)
// import { writeFile } from "node:fs/promises";
// import { PATH_DB_SONGS } from "../../constants/songs.js";

// export const writeSongs = songs => writeFile(PATH_DB_SONGS, JSON.stringify(songs, null, 2));
