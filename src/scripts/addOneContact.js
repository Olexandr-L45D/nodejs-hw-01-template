import { createFakeContact } from "../../utils/createFakeContact.js";
import { readContacts } from "../../utils/readContacts.js";
import { writeContacts } from "../../utils/writeContacts.js";

export const addOneContact = async () => {
    const contact = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...contact, newContact]);
};

addOneContact();

// щоб додати новий контакт треба одразу прочитати все що є readContacts()
// потім створити новий в функції createFakeContact();
//  і після розпилення масива контактів додати в кінець масиву [...contact, newСontact]
// import { createFakeSong } from "../../utils/songs/createFakeSong.js";
// import { readSongs } from "../../utils/songs/readSongs.js";
// import { writeSongs } from "../../utils/songs/writeSongs.js";

// export const addOneSong = async () => {
//     const songs = await readSongs();
//     const newSong = createFakeSong();
//     await writeSongs([...songs, newSong]);
// };

// addOneSong();
