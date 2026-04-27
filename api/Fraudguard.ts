
export default function handler(req, res) {       
const fraudGuardRecords = [
  {
    id: "fg1",
    loan_number: "0100578962",
    fg_score: 1000,
    fg_service: "Complete",
    last_run_date: "06/26/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Completed",
    notary_name: "Jack Rose",
    notary_phone: "808452211",
    req_type: "Order"
  },
  {
    id: "fg2",
    loan_number: "0100578972",
    fg_score: 950,
    fg_service: "Complete",
    last_run_date: "06/27/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Requested",
    notary_name: "Emma Stone",
    notary_phone: "809452312",
    req_type: "Query"
  },
  {
    id: "fg3",
    loan_number: "0100578982",
    fg_score: 890,
    fg_service: "Complete",
    last_run_date: "06/28/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "In Process",
    notary_name: "Liam Carter",
    notary_phone: "810452413",
    req_type: "Order"
  },
  {
    id: "fg4",
    loan_number: "0100578991",
    fg_score: 920,
    fg_service: "Complete",
    last_run_date: "06/29/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Completed",
    notary_name: "Olivia Smith",
    notary_phone: "811452514",
    req_type: "Query"
  },
  {
    id: "fg5",
    loan_number: "0100578992",
    fg_score: 870,
    fg_service: "Complete",
    last_run_date: "06/30/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Completed",
    notary_name: "Noah Johnson",
    notary_phone: "812452615",
    req_type: "Order"
  },
  {
    id: "fg6",
    loan_number: "0100578911",
    fg_score: 910,
    fg_service: "Complete",
    last_run_date: "07/01/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Completed",
    notary_name: "Ava Brown",
    notary_phone: "813452716",
    req_type: "Query"
  },
  {
    id: "fg7",
    loan_number: "0100578912",
    fg_score: 880,
    fg_service: "Complete",
    last_run_date: "07/02/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Completed",
    notary_name: "William Davis",
    notary_phone: "814452817",
    req_type: "Order"
  },
  {
    id: "fg8",
    loan_number: "0100578913",
    fg_score: 940,
    fg_service: "Complete",
    last_run_date: "07/03/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Completed",
    notary_name: "Sophia Miller",
    notary_phone: "815452918",
    req_type: "Query"
  },
  {
    id: "fg9",
    loan_number: "0100578914",
    fg_score: 960,
    fg_service: "Complete",
    last_run_date: "07/04/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Completed",
    notary_name: "James Wilson",
    notary_phone: "816453019",
    req_type: "Order"
  },
  {
    id: "fg10",
    loan_number: "0100578919",
    fg_score: 905,
    fg_service: "Complete",
    last_run_date: "07/05/2025",
    ti_name: "Fraudguard Report-Closer",
    ti_status: "Completed",
    notary_name: "Isabella Moore",
    notary_phone: "817453120",
    req_type: "Query"
  }
];
  
    const { loanNumber } = req.query;  
    // Get all fraudGuardRecords for this loan
    const records = fraudGuardRecords.filter(r => r.loan_number === loanNumber);  
    if (records.length > 0) {
      res.status(200).json(records);
    } else {
      res.status(404).json({ message: "No records found for this loan number" });
    }  
}
