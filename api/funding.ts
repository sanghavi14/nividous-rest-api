export default function handler(req, res) {   

const loans = [
          {
            id: "L1",
            loan_number: "0100578962",
            loanType: "FHA Loan",
            loan_amount: 520000,
            loan_status: "Approved",
            borrower_name: "John Anderson",
            interest_rate: 6.45,
            property_address: "12 Lakeview Dr, Austin, TX, USA",
            property_type: "Single Family",
            occupancy: "Owner-Occupied",
            support_center: "SC1",
            cema: "Yes",
            division: "South",
            cashout: "No",
            doc_type: "Full Doc",
            closing_agent: "Lone Star Title",
            product: "30Y Fixed",
            loan_purpose: "Purchase",
            funding_rework_ti: "No",
            payofff_shortage_ti: "No",
            schl_closing_date: "2026-01-12",
            schl_disb_date: "2026-01-18",
            first_payment_date: "2026-03-01"
          },
          
          {
            id: "L10",
            loan_number: "0100578919",
            loanType: "Govt 25 year",
            loan_amount: 920000,
            loan_status: "Approved",
            borrower_name: "Olivia Young",
            interest_rate: 6.15,
            property_address: "77 Market St, San Francisco, CA, USA",
            property_type: "Single Family",
            occupancy: "Owner-Occupied",
            support_center: "SC1",
            cema: "Yes",
            division: "West",
            cashout: "No",
            doc_type: "Full Doc",
            closing_agent: "Golden Gate Title",
            product: "15Y Fixed",
            loan_purpose: "Refinance",
            funding_rework_ti: "No",
            payofff_shortage_ti: "No",
            schl_closing_date: "2026-01-25",
            schl_disb_date: "2026-01-30",
            first_payment_date: "2026-03-01"
          }
        ];

           const { loanNumber } = req.query;
        //const loanNumber = req.params.loanNumber;
        
        const loan = loans.find(l => l.loan_number === loanNumber);
        
        if (loan) {
          res.status(200).json(loan);
        } else {
          res.status(404).json({ message: "Loan not found" });
        }
  
}
