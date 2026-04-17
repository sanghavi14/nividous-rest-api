// api/loan.js
export default function handler(req, res) {
    // Get loanNumber from query string (e.g., ?loanNumber=123)
    const { loanNumber } = req.query;

    if (loanNumber === "101") {
        res.status(200).json({
            status: "Active",
            balance: 5000,
            dueDate: "2026-05-15",
            type: "Personal"
        });
    } else if (loanNumber === "202") {
        res.status(200).json({
            status: "Paid",
            balance: 0,
            dueDate: "N/A",
            type: "Auto"
        });
    } else {
        res.status(404).json({
            error: "Loan not found",
            message: "Please check the loan number and try again."
        });
    }
}
