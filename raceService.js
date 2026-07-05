import fs from "fs/promises"

// fetch ("https://server-for-test-week-13.onrender.com/api/race")

// .then(res => res.json())
// .then(data => {
//     fs.readFile(data, "utf-8", function(err, data) {
//         if(err){
//             return console.log(err);            
//         }console.log(data);
//     })
// })

export async function getData() {
    const result = await fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
            console.error('Error reading file: ' + err);
            return;
        }
        console.log('File content: ' + data);

    });
    return JSON.parse(result)
}




