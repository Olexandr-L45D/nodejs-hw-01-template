import { readFile } from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';
// в цій функції просто зчитуєм з файлу по абсолютному шляху ,
// приводимо до рядка через розшифровку "utf-8" і в ретерні парсимо ту константу data
export const readContacts = async () => {
    const data = await readFile(PATH_DB, "utf-8");
    return JSON.parse(data);
};
// export const readContacts = async () => {
// };
// приклад на піснях
// import { readFile } from "node:fs/promises";
// import { PATH_DB_SONGS } from "../../constants/songs.js";

// export const readSongs = async () => {
//     const data = await readFile(PATH_DB_SONGS, "utf-8");
//     return JSON.parse(data);
// };
