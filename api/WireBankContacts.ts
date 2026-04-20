import data,{getWireBankContacts} from "./data.js";

export default function handler(req, res) {       
   const { loanNumber } = req.query;
   //const loanNumber = req.params.loanNumber;            
   //const records = wireBankContacts.filter(r => r.loan_number === loanNumber);  
   const records = getWireBankContacts(loanNumber);
   if (records.length > 0) {
      res.status(200).json(records);
   } else {
      res.status(404).json({ message: "No WireBank contact found for this loan number" });
   }  
}
