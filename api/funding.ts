//import axios from "axios";
//import csv from "csvtojson";

export default function handler(req, res) {
  try {     
     

    res.status(200).json({
            status: "Active",
            balance: 5000,
            dueDate: "2026-05-15",
            type: "Personal"
        });
    
  } catch (error) {
    console.error("Error fetching/parsing CSV:", error);
    throw error;
  }
}
