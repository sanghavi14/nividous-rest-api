export default function handler(req, res) {   

  const appEvents = [
    {
      id: 1,
      loan_number: "0100578962",
      Event_Name: "BorrowerRequested NewLoanAmt",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "07/30/2021 17:15:29",
      Event_Reason: "Borrower Requested New Loan Amount"
    },
    {
      id: 2,
      loan_number: "0100578962",
      Event_Name: "LoanLevelPricingAdj Req",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "03/28/2021 20:37:15",
      Event_Reason: "PRICING-Change to Points and/or Credit for Interest Rate"
    },
    {
      id: 3,
      loan_number: "0100578962",
      Event_Name: "Recalc QMLoanType",
      Event_Type: "QM Loan Type",
      Event_Status: "Completed",
      Event_DateTime: "12/24/2025 09:38:04",
      Event_Reason: "QM Loan Type Calc run"
    },
    {
      id: 4,
      loan_number: "0100578962",
      Event_Name: "Rerun ComplAnalyzer",
      Event_Type: "ComplianceAnalyzer",
      Event_Status: "Completed",
      Event_DateTime: "08-10-2021 07:47",
      Event_Reason: "Finance Charge Changed"
    },
    {
      id: 5,
      loan_number: "0100578962",
      Event_Name: "Update APR",
      Event_Type: "APR",
      Event_Status: "Completed",
      Event_DateTime: "09-07-2021 02:09",
      Event_Reason: "ReCalculate APR"
    },
  
    {
      id: 6,
      loan_number: "0100578911",
      Event_Name: "BorrowerRequested NewLoanAmt",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "07/30/2021 17:15:29",
      Event_Reason: "Borrower Requested New Loan Amount"
    },
    {
      id: 7,
      loan_number: "0100578911",
      Event_Name: "LoanLevelPricingAdj Req",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "03/28/2021 20:37:15",
      Event_Reason: "PRICING-Change to Points and/or Credit for Interest Rate"
    },
    {
      id: 8,
      loan_number: "0100578911",
      Event_Name: "Recalc QMLoanType",
      Event_Type: "QM Loan Type",
      Event_Status: "Completed",
      Event_DateTime: "12/24/2025 09:38:04",
      Event_Reason: "QM Loan Type Calc run"
    },
    {
      id: 9,
      loan_number: "0100578911",
      Event_Name: "Rerun ComplAnalyzer",
      Event_Type: "ComplianceAnalyzer",
      Event_Status: "Completed",
      Event_DateTime: "08-10-2021 07:47",
      Event_Reason: "Finance Charge Changed"
    },
    {
      id: 10,
      loan_number: "0100578911",
      Event_Name: "Update APR",
      Event_Type: "APR",
      Event_Status: "Completed",
      Event_DateTime: "09-07-2021 02:09",
      Event_Reason: "ReCalculate APR"
    },
  
    {
      id: 11,
      loan_number: "0100578913",
      Event_Name: "BorrowerRequested NewLoanAmt",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "07/30/2021 17:15:29",
      Event_Reason: "Borrower Requested New Loan Amount"
    },
    {
      id: 12,
      loan_number: "0100578913",
      Event_Name: "LoanLevelPricingAdj Req",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "03/28/2021 20:37:15",
      Event_Reason: "PRICING-Change to Points and/or Credit for Interest Rate"
    },
    {
      id: 13,
      loan_number: "0100578913",
      Event_Name: "Recalc QMLoanType",
      Event_Type: "QM Loan Type",
      Event_Status: "Completed",
      Event_DateTime: "12/24/2025 09:38:04",
      Event_Reason: "QM Loan Type Calc run"
    },
    {
      id: 14,
      loan_number: "0100578913",
      Event_Name: "Rerun ComplAnalyzer",
      Event_Type: "ComplianceAnalyzer",
      Event_Status: "Completed",
      Event_DateTime: "08-10-2021 07:47",
      Event_Reason: "Finance Charge Changed"
    },
    {
      id: 15,
      loan_number: "0100578913",
      Event_Name: "Update APR",
      Event_Type: "APR",
      Event_Status: "Completed",
      Event_DateTime: "09-07-2021 02:09",
      Event_Reason: "ReCalculate APR"
    },
  
    {
      id: 16,
      loan_number: "0100578919",
      Event_Name: "BorrowerRequested NewLoanAmt",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "07/30/2021 17:15:29",
      Event_Reason: "Borrower Requested New Loan Amount"
    },
    {
      id: 17,
      loan_number: "0100578919",
      Event_Name: "LoanLevelPricingAdj Req",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "03/28/2021 20:37:15",
      Event_Reason: "PRICING-Change to Points and/or Credit for Interest Rate"
    },
    {
      id: 18,
      loan_number: "0100578919",
      Event_Name: "Recalc QMLoanType",
      Event_Type: "QM Loan Type",
      Event_Status: "Completed",
      Event_DateTime: "12/24/2025 09:38:04",
      Event_Reason: "QM Loan Type Calc run"
    },
    {
      id: 19,
      loan_number: "0100578919",
      Event_Name: "Rerun ComplAnalyzer",
      Event_Type: "ComplianceAnalyzer",
      Event_Status: "Completed",
      Event_DateTime: "08-10-2021 07:47",
      Event_Reason: "Finance Charge Changed"
    },
    {
      id: 20,
      loan_number: "0100578919",
      Event_Name: "Update APR",
      Event_Type: "APR",
      Event_Status: "Completed",
      Event_DateTime: "09-07-2021 02:09",
      Event_Reason: "ReCalculate APR"
    },
  
    {
      id: 21,
      loan_number: "0100578972",
      Event_Name: "BorrowerRequested NewLoanAmt",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "07/30/2021 17:15:29",
      Event_Reason: "Borrower Requested New Loan Amount"
    },
    {
      id: 22,
      loan_number: "0100578972",
      Event_Name: "LoanLevelPricingAdj Req",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "03/28/2021 20:37:15",
      Event_Reason: "PRICING-Change to Points and/or Credit for Interest Rate"
    },
    {
      id: 23,
      loan_number: "0100578972",
      Event_Name: "Recalc QMLoanType",
      Event_Type: "QM Loan Type",
      Event_Status: "Completed",
      Event_DateTime: "12/24/2025 09:38:04",
      Event_Reason: "QM Loan Type Calc run"
    },
    {
      id: 24,
      loan_number: "0100578972",
      Event_Name: "Rerun ComplAnalyzer",
      Event_Type: "ComplianceAnalyzer",
      Event_Status: "Completed",
      Event_DateTime: "08-10-2021 07:47",
      Event_Reason: "Finance Charge Changed"
    },
    {
      id: 25,
      loan_number: "0100578972",
      Event_Name: "Update APR",
      Event_Type: "APR",
      Event_Status: "Completed",
      Event_DateTime: "09-07-2021 02:09",
      Event_Reason: "ReCalculate APR"
    },
  
    {
      id: 26,
      loan_number: "0100578982",
      Event_Name: "BorrowerRequested NewLoanAmt",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "07/30/2021 17:15:29",
      Event_Reason: "Borrower Requested New Loan Amount"
    },
    {
      id: 27,
      loan_number: "0100578982",
      Event_Name: "LoanLevelPricingAdj Req",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "03/28/2021 20:37:15",
      Event_Reason: "PRICING-Change to Points and/or Credit for Interest Rate"
    },
    {
      id: 28,
      loan_number: "0100578982",
      Event_Name: "Recalc QMLoanType",
      Event_Type: "QM Loan Type",
      Event_Status: "Completed",
      Event_DateTime: "12/24/2025 09:38:04",
      Event_Reason: "QM Loan Type Calc run"
    },
    {
      id: 29,
      loan_number: "0100578982",
      Event_Name: "Rerun ComplAnalyzer",
      Event_Type: "ComplianceAnalyzer",
      Event_Status: "Completed",
      Event_DateTime: "08-10-2021 07:47",
      Event_Reason: "Finance Charge Changed"
    },
    {
      id: 30,
      loan_number: "0100578982",
      Event_Name: "Update APR",
      Event_Type: "APR",
      Event_Status: "Completed",
      Event_DateTime: "09-07-2021 02:09",
      Event_Reason: "ReCalculate APR"
    },
  
    {
      id: 31,
      loan_number: "0100578992",
      Event_Name: "BorrowerRequested NewLoanAmt",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "07/30/2021 17:15:29",
      Event_Reason: "Borrower Requested New Loan Amount"
    },
    {
      id: 32,
      loan_number: "0100578992",
      Event_Name: "LoanLevelPricingAdj Req",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "03/28/2021 20:37:15",
      Event_Reason: "PRICING-Change to Points and/or Credit for Interest Rate"
    },
    {
      id: 33,
      loan_number: "0100578992",
      Event_Name: "Recalc QMLoanType",
      Event_Type: "QM Loan Type",
      Event_Status: "Completed",
      Event_DateTime: "12/24/2025 09:38:04",
      Event_Reason: "QM Loan Type Calc run"
    },
    {
      id: 34,
      loan_number: "0100578992",
      Event_Name: "Rerun ComplAnalyzer",
      Event_Type: "ComplianceAnalyzer",
      Event_Status: "Completed",
      Event_DateTime: "08-10-2021 07:47",
      Event_Reason: "Finance Charge Changed"
    },
    {
      id: 35,
      loan_number: "0100578992",
      Event_Name: "Update APR",
      Event_Type: "APR",
      Event_Status: "Completed",
      Event_DateTime: "09-07-2021 02:09",
      Event_Reason: "ReCalculate APR"
    },
  
    {
      id: 36,
      loan_number: "0100578991",
      Event_Name: "BorrowerRequested NewLoanAmt",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "07/30/2021 17:15:29",
      Event_Reason: "Borrower Requested New Loan Amount"
    },
    {
      id: 37,
      loan_number: "0100578991",
      Event_Name: "LoanLevelPricingAdj Req",
      Event_Type: "Re-Disclosure CD",
      Event_Status: "Completed",
      Event_DateTime: "03/28/2021 20:37:15",
      Event_Reason: "PRICING-Change to Points and/or Credit for Interest Rate"
    },
    {
      id: 38,
      loan_number: "0100578991",
      Event_Name: "Recalc QMLoanType",
      Event_Type: "QM Loan Type",
      Event_Status: "Completed",
      Event_DateTime: "12/24/2025 09:38:04",
      Event_Reason: "QM Loan Type Calc run"
    },
    {
      id: 39,
      loan_number: "0100578991",
      Event_Name: "Rerun ComplAnalyzer",
      Event_Type: "ComplianceAnalyzer",
      Event_Status: "Completed",
      Event_DateTime: "08-10-2021 07:47",
      Event_Reason: "Finance Charge Changed"
    },
    {
      id: 40,
      loan_number: "0100578991",
      Event_Name: "Update APR",
      Event_Type: "APR",
      Event_Status: "Completed",
      Event_DateTime: "09-07-2021 02:09",
      Event_Reason: "ReCalculate APR"
    }
  ];

  const { loanNumber } = req.query;  
  // Get all appEvents for this loan
  const records = appEvents.filter(r => r.loan_number === loanNumber);  
  if (records.length > 0) {
    res.status(200).json(records);
  } else {
    res.status(404).json({ message: "No records found for this loan number" });
  }
  
}
