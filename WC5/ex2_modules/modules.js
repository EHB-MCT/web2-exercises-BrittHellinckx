import * as fs from 'fs/promises';

//get the data from the games file
let result = await fs.readFile('boardgames.json');
let data = JSON.parse(result);

//loop over the games
for (const i in data) {
    //create file name
    let filename = `${i}.json`
    //stringify the value
    let bg = JSON.stringify(data[i]);
    //save to file
    await fs.writeFile(filename, bg);
}