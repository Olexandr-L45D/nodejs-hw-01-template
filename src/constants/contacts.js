import * as path from "node:path";
// const contactPath = path.join(process.cwd(), "src", "db", "db.json");
// const contactPath = path.resolve("src", "db", "db.json");
//  то проміжні перевірочні константи, а фінальна записа одним рядком в 2-х варіантах
// export const PATH_DB = path.resolve("src", "db", "db.json");
export const PATH_DB = path.join(process.cwd(), "src", "db", "db.json");



// щоб стоврити шлях імпортую path -вбудований в НОДУ і обовязково прописую абсолютний шлях! 2 matod ,тому що відносний шлях не практичний
// приклад з лекції для сонг  а я для контакт
// const songPath = path.join(process.cwd(), "src", "db", "db-songs.json");
// const songPath = path.resolve("src", "db", "db-songs.json");
// export const PATH_DB_SONGS = path.resolve("src", "db", "db-songs.json");
// export const PATH_DB = (на початку дописати шлях з диску (є 2 методи path.join(process.cwd()
//або path.resolve.    src, db, db.json) ці методи проставляють слеші під відповідну операційну систему


