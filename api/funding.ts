import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

export default function handler(req, res) {
  try {     
     

 /*   res.status(200).json({
            status: "Active",
            balance: 5000,
            dueDate: "2026-05-15",
            type: "Personal"
        }); */
  
    
    const csvFilePath = path.resolve(__dirname, 'LoanInformationData.csv');
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    parse(fileContent, { delimiter: ',' }, (err, records) => {
      res.status(200).json({records});
    });
      
    
  } catch (error) {
    console.error("Error fetching/parsing CSV:", error);
    throw error;
  }
}
