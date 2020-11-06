const fs = require("fs");
const csv = require("csv-parser");
const schema = require("./schema");

let rows = 0;
const parser = csv({ separator: ";" });

fs.createReadStream("./mailing/mailing-teste.csv")
  .pipe(parser)
  .on("data", (data) => {
    rows += 1;
    const res = schema.financial.validate(data, { stripUnknown: true });

    if (res.error) {
      console.log(parser.headers);
      console.error(`failed on line ${rows}`);
      console.log(
        { error: res.error.message, line: data },
        "Error parsing data"
      );
    }
  })
  .on("headers", (headers) => console.log("got new header", headers))
  .on("end", () => console.log(`Parsed file: ${rows} lines`));
