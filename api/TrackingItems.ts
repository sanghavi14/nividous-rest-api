import data,{setTiStatus,setTrackingItemData,getTrackingItemsData} from "./data.js";

export default function handler(req, res) {   

  const { loanNumber, operation} = req.query;  
  // Get all records for this loan
  if(operation == "set"){
      const { loanNumber, tiNames} = req.query; 
        setTiStatus(loanNumber, tiNames);        
  }

  if(operation == "update"){    
       const { loanNumber,tiName, tiStatus,dueDate,hasExcp,priorTo} = req.query; 
       setTrackingItemData(loanNumber,tiName,tiStatus,dueDate,hasExcp,priorTo);        
  }
  //const records = tiRecords.filter(r => r.loan_number === loanNumber);  
  const records = getTrackingItemsData(loanNumber);
  if (records.length > 0) {
    res.status(200).json(records);
  } else {
    res.status(404).json({ message: "No records found for this loan number" });
  }
}
