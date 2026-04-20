import data,{setTiData, getTrackingItemsData} from "./data.js";

export default function handler(req, res) {    
  
  const { loanNumber,operation,tiNames } = req.query;
  /*if(!loanNumber || !operation)
      res.status(404).json({ message: "Invalid LoanNumber or Operation" });     
  else if(operation == "set" && !tiNames)
      res.status(404).json({ message: "Invalid TrackingItems data" });
  else{ */
      if(operation == "set"){
        setTiData(loanNumber, tiNames);        
      }
   
      //const records = tiRecords.filter(r => r.loan_number === loanNumber);  
     const records = getTrackingItemsData(loanNumber);
      if (records.length > 0) {
        res.status(200).json(records);
      } else {
        res.status(404).json({ message: "No records found for this loan number" });
      }   
}
