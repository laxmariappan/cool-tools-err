const { GoogleSpreadsheet } = require("google-spreadsheet");

// Create a document object using the ID of the spreadsheet - obtained from its URL.
const doc = new GoogleSpreadsheet("1_eTzDzanfA29j6rWmugNTFi8tweBYpn964dYUkzNLCo");

const {creds} = require('./credentials')

export async function makeAuth(creds){
    try {
        // google sheets
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] -- get first sheet in the document
        return sheet
    } catch (error) {
        
        return error
        //   log any errors to the console
        //console.log(error);
    }
}

export async function getToolData() {
  try {
    // google sheets
    const sheet =await makeAuth(creds)
    const rows = await sheet.getRows(); // return the rows from the 1st sheet
    const allTools = rows.map((row) => {
        
      // return the data for each video (or whatever each row is in your sheet)
      return {
        name: row.Name,
        url: row.Link,
        category: row.Category,
      };
    });
    // this returns the videos
    return allTools;
  } catch (error) {
    //   log any errors to the console
    console.log(error);
  }
}



export async function addToolData(row) {
    try {
      const sheet = await makeAuth(creds)
      
      const added = await sheet.addRow(row); // return the rows from the 1st sheet
    } catch (error) {
      //   log any errors to the console
      console.log(error);
    }
  }

export async function crud(action,row={}){
    try {
        // google sheets
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] -- get first sheet in the document
        if(action=='get'){
            const rows = await sheet.getRows(); // return the rows from the 1st sheet
            const allTools = rows.map((row) => {
                
            // return the data for each video (or whatever each row is in your sheet)
            return {
                name: row.Name,
                url: row.Link,
                category: row.Category,
            };
            });
            // this returns the videos
            return allTools;
        }
        if(action=='add'){
            const added = await sheet.addRow(row); // return the rows from the 1st sheet
        }
    } catch (error) {
        
        //return error
        //   log any errors to the console
        console.log(error);
    }
}