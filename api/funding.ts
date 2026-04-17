//import axios from "axios";
//import csv from "csvtojson";

export default function handler(req, res) {
  try {     
     

    return "This is just a test";
  } catch (error) {
    console.error("Error fetching/parsing CSV:", error);
    throw error;
  }
}
