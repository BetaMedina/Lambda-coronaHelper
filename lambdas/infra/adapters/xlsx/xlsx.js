const XLSX = require("xlsx");

class Xlsx {
  async createXlsx(data) {
    const xlsx = XLSX.utils.book_new();
    const sheetData = XLSX.utils.json_to_sheet(data);

    xlsx.SheetNames.push("CoronaHelp");
    xlsx.Sheets.CoronaHelp = sheetData;

    const xlsxOut = XLSX.write(xlsx, {
      bookType: "xlsx",
      type: "buffer",
    });

    return xlsxOut;
  }
}
module.exports = { Xlsx };
