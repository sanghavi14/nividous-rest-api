// api/loan.js
// import axios from "axios";
// import csv from "csvtojson";
const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
    // Get loanNumber from query string (e.g., ?loanNumber=123)
    const { loanNumber } = req.query;

    if (loanNumber === "99") {
        res.status(200).json(readCsvAsJson());
    }
    
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
    } else if (loanNumber === "301") {
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

function readCsvAsJson() {
  const filePath = path.join("", "LoanInformationData.csv");
  const csvData = fs.readFileSync(filePath, "utf-8");

  const lines = csvData.trim().split("\n");
  const headers = lines[0].split(",");

  const records = lines.slice(1).map(line => {
    const values = line.split(",");
    const record = {};
    headers.forEach((header, index) => {
      record[header.trim()] = values[index]?.trim();
    });
    return record;
  });

  return records;
}
