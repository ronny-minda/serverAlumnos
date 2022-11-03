const { GoogleSpreadsheet } = require("google-spreadsheet");
const { google } = require("googleapis");

const prueba = async (req, res) => {
  //   const auth = new google.auth.GoogleAuth({
  //     keyFile: "json/credencials.json",
  //     scopes: "https://www.googleapis.com/auth/spreadsheets",
  //   });
  //   const client = await auth.getClient();
  //   const googleSheets = google.sheets({ version: "v4", auth: client });
  //   google.forms;
  //   const spreadsheetId = "1PPX44GcSu02gn444RYFXl-nAfu0ntKyPJWVpxLZlVY8";
  //   const metaData = await googleSheets.spreadsheets.get({
  //     auth,
  //     spreadsheetId,
  //   });
  //   const getRows = await googleSheets.spreadsheets.values.get({
  //     auth,
  //     spreadsheetId,
  //     range: "Hoja 1!A:A",
  //     // range: "Sheet1!A:A",
  //   });
  //   const crear = await googleSheets.spreadsheets.values.append({
  //     auth,
  //     spreadsheetId,
  //     range: "Hoja 1!A:A",
  //     valueInputOption: "USER_ENTERED",
  //     resource: {
  //       values: [
  //         ["ggggg", "si"],
  //         ["todo", "siiii"],
  //       ],
  //     },
  //   });
  // //dddddddddddddddddddd
  //     var data = [
  //       {
  //         range: "Sheet1!A1",
  //         values: [["A1"]],
  //       },
  //       {
  //         range: "Sheet1!B1:B3",
  //         values: [["B1"], ["B2"], ["B3"]],
  //       },
  //       {
  //         range: "Sheet1!C1:E1",
  //         values: [["C1", "D1", "E1"]],
  //       },
  //       {
  //         range: "Sheet1!F1:H2",
  //         values: [
  //           ["F1", "F2"],
  //           ["H1", "H2"],
  //         ],
  //       },
  //     ];
  //     var resource = {
  //       spreadsheetId: spreadsheetId,
  //       auth: auth,
  //       valueInputOption: "USER_ENTERED",
  //       data: data,
  //     };
  //     const datos = googleSheets.spreadsheets.values.batchUpdate(resource);
  //     console.log(datos);
  // res.json(datos);
};

module.exports = {
  prueba,
};

// const credenciales = require("../json/exelalumnos.json");

// const googleId = "1TRlEXWv95v76WSyZgNFW0rza9znvMti9";

// const prueba = async (req, res) => {
//   const doc = new GoogleSpreadsheet(googleId);

//   await doc.useServiceAccountAuth(credenciales);

//   await doc.loadInfo();
//   console.log(doc.title);
//   await doc.updateProperties({ title: "renamed doc" });

//   const sheet = doc.sheetsByIndex[0];
//   console.log(sheet.title);
//   console.log(sheet.rowCount);

//   const newSheet = await doc.addSheet({ title: "hot new sheet!" });
//   await newSheet.delete();

//   //   console.log(sheet);

//   //   console.log("prueba");
//   //   console.log(sheet);

//   res.json({ sheet });
// };
