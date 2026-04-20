var data = {
    "1020304050" : {"loanNumber": "1020304050", "loanType": "FHA"},
    "1020304051" : {"loanNumber": "1020304050", "loanType": "VA"},
};

var tiRecords = [
    { id: "t1", loan_number: "0100578962", ti_name: "Funding Rework", ti_status: "Initiated", prior_to: "Funded-Funds Disbured", due_date: "01-01-2026", has_exception: "no" },
    { id: "t2", loan_number: "0100578972", ti_name: "Funding Rework", ti_status: "Requested", prior_to: "Funded-Funds Disbured", due_date: "17-01-2026", has_exception: "yes" },
    { id: "t3", loan_number: "0100578982", ti_name: "Funding Rework", ti_status: "Requested", prior_to: "Funded-Funds Disbured", due_date: "07-01-2026", has_exception: "no" },
    { id: "t4", loan_number: "0100578992", ti_name: "Funding Rework", ti_status: "Initiated", prior_to: "Funded-Funds Disbured", due_date: "05-01-2026", has_exception: "yes" },
    { id: "t5", loan_number: "0100578991", ti_name: "Funding Rework", ti_status: "In Process", prior_to: "Funded-Funds Disbured", due_date: "13-01-2026", has_exception: "no" },
    { id: "t6", loan_number: "0100578911", ti_name: "Funding Rework", ti_status: "In Process", prior_to: "Funded-Funds Disbured", due_date: "12-01-2026", has_exception: "yes" },
    { id: "t19", loan_number: "0100578912", ti_name: "Funding Rework", ti_status: "In Process", prior_to: "Funded-Funds Disbured", due_date: "11-01-2026", has_exception: "yes" },
    { id: "t22", loan_number: "0100578913", ti_name: "Funding Rework", ti_status: "Initiated", prior_to: "Funded-Funds Disbured", due_date: "11-01-2026", has_exception: "no" },
    { id: "t23", loan_number: "0100578914", ti_name: "Funding Rework", ti_status: "Initiated", prior_to: "Funded-Funds Disbured", due_date: "11-01-2026", has_exception: "yes" },
    { id: "t24", loan_number: "0100578919", ti_name: "Funding Rework", ti_status: "Initiated", prior_to: "Funded-Funds Disbured", due_date: "11-01-2026", has_exception: "yes" },
  
    { id: "t7", loan_number: "0100578962", ti_name: "CD Post Closing Adjustments", ti_status: "Requested", prior_to: "Post Closing Purchase Complete", due_date: "22-03-2026", has_exception: "no" },
    { id: "t8", loan_number: "0100578972", ti_name: "CD Post Closing Adjustments", ti_status: "In Process", prior_to: "Post Closing Purchase Complete", due_date: "23-04-2026", has_exception: "yes" },
    { id: "t9", loan_number: "0100578982", ti_name: "CD Post Closing Adjustments", ti_status: "In Process", prior_to: "Post Closing Purchase Complete", due_date: "03-02-2026", has_exception: "no" },
    { id: "t10", loan_number: "0100578992", ti_name: "CD Post Closing Adjustments", ti_status: "Requested", prior_to: "Post Closing Purchase Complete", due_date: "10-03-2026", has_exception: "yes" },
    { id: "t11", loan_number: "0100578991", ti_name: "CD Post Closing Adjustments", ti_status: "Requested", prior_to: "Post Closing Purchase Complete", due_date: "09-01-2026", has_exception: "yes" },
    { id: "t12", loan_number: "0100578911", ti_name: "CD Post Closing Adjustments", ti_status: "Requested", prior_to: "Post Closing Purchase Complete", due_date: "06-04-2026", has_exception: "yes" },
    { id: "t20", loan_number: "0100578912", ti_name: "CD Post Closing Adjustments", ti_status: "Requested", prior_to: "Post Closing Purchase Complete", due_date: "06-04-2026", has_exception: "yes" },
    { id: "t25", loan_number: "0100578913", ti_name: "CD Post Closing Adjustments", ti_status: "Requested", prior_to: "Post Closing Purchase Complete", due_date: "16-03-2026", has_exception: "yes" },
    { id: "t26", loan_number: "0100578914", ti_name: "CD Post Closing Adjustments", ti_status: "Requested", prior_to: "Post Closing Purchase Complete", due_date: "26-03-2026", has_exception: "yes" },
    { id: "t27", loan_number: "0100578919", ti_name: "CD Post Closing Adjustments", ti_status: "Requested", prior_to: "Post Closing Purchase Complete", due_date: "06-03-2026", has_exception: "yes" },
  
    { id: "t13", loan_number: "0100578962", ti_name: "Payoff Shortage", ti_status: "In Process", prior_to: "Funded-Funds Disbured", due_date: "02-03-2026", has_exception: "no" },
    { id: "t14", loan_number: "0100578972", ti_name: "Payoff Shortage", ti_status: "Initiated", prior_to: "Post Closing Purchase Complete", due_date: "01-02-2026", has_exception: "yes" },
    { id: "t15", loan_number: "0100578982", ti_name: "Payoff Shortage", ti_status: "Initiated", prior_to: "Funded-Funds Disbured", due_date: "03-03-2026", has_exception: "no" },
    { id: "t16", loan_number: "0100578992", ti_name: "Payoff Shortage", ti_status: "In Process", prior_to: "Post Closing Purchase Complete", due_date: "09-03-2025", has_exception: "no" },
    { id: "t17", loan_number: "0100578991", ti_name: "Payoff Shortage", ti_status: "Initiated", prior_to: "Funded-Funds Disbured", due_date: "09-04-2025", has_exception: "no" },
    { id: "t18", loan_number: "0100578911", ti_name: "Payoff Shortage", ti_status: "Initiated", prior_to: "Post Closing Purchase Complete", due_date: "19-04-2026", has_exception: "yes" },
    { id: "t21", loan_number: "0100578913", ti_name: "Payoff Shortage", ti_status: "In Process", prior_to: "Funded-Funds Disbured", due_date: "27-02-2026", has_exception: "yes" },
    { id: "t28", loan_number: "0100578914", ti_name: "Payoff Shortage", ti_status: "In Process", prior_to: "Funded-Funds Disbured", due_date: "11-02-2026", has_exception: "yes" },
    { id: "t29", loan_number: "0100578919", ti_name: "Payoff Shortage", ti_status: "In Process", prior_to: "Funded-Funds Disbured", due_date: "17-02-2026", has_exception: "yes" }
  ];

export function getLoanInfo(loanNumber){
    return data[loanNumber];
}

export function setLoanInfo(loanNumber,loanInfo){
    data[loanNumber] = loanInfo;
    return data;
}

export function setTiData(loanNumber,tiNames){
        const names = tiNames.split(",");
        for (const name of names) {
          console.log(name.trim()); // trim removes extra spaces         
          for (const tiRecord of tiRecords) {
            if (tiRecord.loan_number === loanNumber && tiRecord.ti_name === name) {
              tiRecord.ti_status = "Completed";  
              break;          
            }
          }  
        } 
    return tiRecords;
}

export function getTrackingItemsData(loanNumber){
    const records = tiRecords.filter(r => r.loan_number === loanNumber);      
    return records ;
}

export default data;
