



const fs = require("fs");

fs.readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstData = data;

  fs.readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const secondData = data;
    fs.writeFile(
      "./combinedAsync.txt",
      `${firstData}-- ${secondData}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      }
    );
  });
});
