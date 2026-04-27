
export default function handler(req, res) {   

  const cashToCloseRecords = [
  {
    id: "ctc2",
    loan_num: "0100578962",
    max_loan_amt: 15000,
    min_loan_amt: 7000,
    actual_amt: 12000,
    escr_shortage_amt: 3200,
    proposed_pmt: 5100,
    cash_to_close: 6000,
    liquid_asset_avail: 45000,
    cash_to_br_uw_approve: 45000
  },
  {
    id: "ctc3",
    loan_num: "0100578972",
    max_loan_amt: 20000,
    min_loan_amt: 10000,
    actual_amt: 18000,
    escr_shortage_amt: 2500,
    proposed_pmt: 6200,
    cash_to_close: 7200,
    liquid_asset_avail: 52000,
    cash_to_br_uw_approve: 52000
  },
  {
    id: "ctc4",
    loan_num: "0100578982",
    max_loan_amt: 18000,
    min_loan_amt: 9000,
    actual_amt: 15000,
    escr_shortage_amt: 4100,
    proposed_pmt: 5800,
    cash_to_close: 6900,
    liquid_asset_avail: 48000,
    cash_to_br_uw_approve: 48000
  },
  {
    id: "ctc5",
    loan_num: "0100578991",
    max_loan_amt: 22000,
    min_loan_amt: 12000,
    actual_amt: 20000,
    escr_shortage_amt: 3500,
    proposed_pmt: 7300,
    cash_to_close: 8100,
    liquid_asset_avail: 60000,
    cash_to_br_uw_approve: 60000
  },
  {
    id: "ctc6",
    loan_num: "0100578992",
    max_loan_amt: 25000,
    min_loan_amt: 15000,
    actual_amt: 23000,
    escr_shortage_amt: 2700,
    proposed_pmt: 7900,
    cash_to_close: 8600,
    liquid_asset_avail: 65000,
    cash_to_br_uw_approve: 65000
  },
  {
    id: "ctc7",
    loan_num: "0100578911",
    max_loan_amt: 14000,
    min_loan_amt: 6000,
    actual_amt: 11000,
    escr_shortage_amt: 3000,
    proposed_pmt: 4900,
    cash_to_close: 5500,
    liquid_asset_avail: 42000,
    cash_to_br_uw_approve: 42000
  },
  {
    id: "ctc8",
    loan_num: "0100578912",
    max_loan_amt: 16000,
    min_loan_amt: 8000,
    actual_amt: 14000,
    escr_shortage_amt: 2800,
    proposed_pmt: 5300,
    cash_to_close: 6100,
    liquid_asset_avail: 47000,
    cash_to_br_uw_approve: 47000
  },
  {
    id: "ctc9",
    loan_num: "0100578913",
    max_loan_amt: 17000,
    min_loan_amt: 8500,
    actual_amt: 14500,
    escr_shortage_amt: 3600,
    proposed_pmt: 5600,
    cash_to_close: 6400,
    liquid_asset_avail: 49000,
    cash_to_br_uw_approve: 49000
  },
  {
    id: "ctc10",
    loan_num: "0100578914",
    max_loan_amt: 21000,
    min_loan_amt: 11000,
    actual_amt: 19000,
    escr_shortage_amt: 3300,
    proposed_pmt: 7000,
    cash_to_close: 7800,
    liquid_asset_avail: 58000,
    cash_to_br_uw_approve: 58000
  },
  {
    id: "ctc11",
    loan_num: "0100578919",
    max_loan_amt: 23000,
    min_loan_amt: 13000,
    actual_amt: 21000,
    escr_shortage_amt: 2900,
    proposed_pmt: 7500,
    cash_to_close: 8200,
    liquid_asset_avail: 62000,
    cash_to_br_uw_approve: 62000
  }
];

  const { loanNumber } = req.query;  
  // Get all cashToCloseRecords for this loan
  const records = cashToCloseRecords.filter(r => r.loan_num === loanNumber);  
  if (records.length > 0) {
    res.status(200).json(records);
  } else {
    res.status(404).json({ message: "No records found for this loan number" });
  }
  
}
