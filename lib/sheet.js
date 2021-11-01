import { google } from 'googleapis';

export async function getData(newRow=[]) {
	try {
		const scopes = [
			'https://www.googleapis.com/auth/spreadsheets',
		];
		const jwt = new google.auth.JWT(
			process.env.CLIENT_EMAIL,
			null,
			// we need to replace the escaped newline characters
			// https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
			(process.env.PRIVATE_KEY || '').replace(/\\n/g, '\n'),
			scopes
		);

		const sheets = google.sheets({ version: 'v4', auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: '1_eTzDzanfA29j6rWmugNTFi8tweBYpn964dYUkzNLCo',
			range: 'tools', // sheet name
		});
		
		const rows = response.data.values;

		const values = [ newRow ];
		const add = await sheets.spreadsheets.values.append({
			spreadsheetId: '1_eTzDzanfA29j6rWmugNTFi8tweBYpn964dYUkzNLCo',
			range: 'tools', // sheet name
			valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
			resource: {
				values: values,
			},
		})

		if (rows.length) {
			return rows.map((row) => ({
				name: row[0],
				link: row[1],
				category: row[2],
			}));
		}
		
		
	} catch (err) {
		console.log(err);
	}

	return [];
}
