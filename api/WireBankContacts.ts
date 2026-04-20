import data,{setWbcData, getWireBankContacts} from "./data.js";

export default function handler(req, res) {       
   const { loanNumber,operation} = req.query;
   const { wbContactBody } = req.body;   
   if(operation == "set"){
        //setWbcData(loanNumber, wbContactBody);        
   }   
   const records = getWireBankContacts(loanNumber);
   if (records.length > 0) {
      res.status(200).json(records);
   } else {
      res.status(404).json({ message: "No WireBank contact found for this loan number" });
   }  
}
