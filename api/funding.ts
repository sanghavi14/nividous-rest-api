import axios from "axios";
import csv from "csvtojson";

export default function handler(req, res) {
  try {     
    const csvUrl = "LoanInformationData.csv";

    // Fetch CSV file
    const response = await axios.get(csvUrl);

    // Convert CSV to JSON
    const jsonArray = await csv().fromString(response.data);

    return jsonArray;
  } catch (error) {
    console.error("Error fetching/parsing CSV:", error);
    throw error;
  }
}
