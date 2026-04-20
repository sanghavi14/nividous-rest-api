import data,{getWireBankContacts} from "./data.js";

export default function handler(req, res) {   
  
    const wireBankContacts = [
      // ================= 0100578962 =================
      {
        id: 1,
        loan_number: "0100578962",
        address_type: "Wire Bank",
        name: "John A. Smith",
        city: "Dallas",
        state: "TX",
        zip_plus: "75201-1234",
        short_name: "JSMITH",
        aba_num: "111000025",
        account_num: "100057896201",
        account_name: "Smith Family Trust"
      },
      {
        id: 2,
        loan_number: "0100578962",
        address_type: "Wire Bank-Final",
        name: "Mary L. Johnson",
        city: "Houston",
        state: "TX",
        zip_plus: "77002-3344",
        short_name: "MJOHNSON",
        aba_num: "111000026",
        account_num: "100057896202",
        account_name: "Johnson Household"
      },
      {
        id: 3,
        loan_number: "0100578962",
        address_type: "Wire Revision Bank",
        name: "Robert T. Brown",
        city: "Austin",
        state: "TX",
        zip_plus: "73301-5566",
        short_name: "RBROWN",
        aba_num: "111000027",
        account_num: "100057896203",
        account_name: "Brown Enterprises"
      },
      {
        id: 4,
        loan_number: "0100578962",
        address_type: "Wire Revision Bank-Final",
        name: "Patricia M. Davis",
        city: "San Antonio",
        state: "TX",
        zip_plus: "78205-7788",
        short_name: "PDAVIS",
        aba_num: "111000028",
        account_num: "100057896204",
        account_name: "Davis Family LLC"
      },
    
      // ================= 0100578972 =================
      {
        id: 5,
        loan_number: "0100578972",
        address_type: "Wire Bank",
        name: "Michael J. Wilson",
        city: "Seattle",
        state: "WA",
        zip_plus: "98109-3456",
        short_name: "MWILSON",
        aba_num: "325070760",
        account_num: "100057897201",
        account_name: "Wilson Living Trust"
      },
      {
        id: 6,
        loan_number: "0100578972",
        address_type: "Wire Bank-Final",
        name: "Linda K. Miller",
        city: "Portland",
        state: "OR",
        zip_plus: "97201-1122",
        short_name: "LMILLER",
        aba_num: "325070761",
        account_num: "100057897202",
        account_name: "Miller Family Fund"
      },
      {
        id: 7,
        loan_number: "0100578972",
        address_type: "Wire Revision Bank",
        name: "James R. Taylor",
        city: "San Jose",
        state: "CA",
        zip_plus: "95112-3344",
        short_name: "JTAYLOR",
        aba_num: "325070762",
        account_num: "100057897203",
        account_name: "Taylor Holdings"
      },
      {
        id: 8,
        loan_number: "0100578972",
        address_type: "Wire Revision Bank-Final",
        name: "Barbara S. Moore",
        city: "San Francisco",
        state: "CA",
        zip_plus: "94105-7788",
        short_name: "BMOORE",
        aba_num: "325070763",
        account_num: "100057897204",
        account_name: "Moore Family Trust"
      },
    
      // ================= 0100578982 =================
      {
        id: 9,
        loan_number: "0100578982",
        address_type: "Wire Bank",
        name: "William C. Anderson",
        city: "Houston",
        state: "TX",
        zip_plus: "77002-9988",
        short_name: "WANDERSN",
        aba_num: "113000023",
        account_num: "100057898201",
        account_name: "Anderson Family LLC"
      },
      {
        id: 10,
        loan_number: "0100578982",
        address_type: "Wire Bank-Final",
        name: "Elizabeth D. Thomas",
        city: "Boston",
        state: "MA",
        zip_plus: "02108-5566",
        short_name: "ETHOMAS",
        aba_num: "11000028",
        account_num: "100057898202",
        account_name: "Thomas Family Fund"
      },
      {
        id: 11,
        loan_number: "0100578982",
        address_type: "Wire Revision Bank",
        name: "Christopher J. White",
        city: "Atlanta",
        state: "GA",
        zip_plus: "30303-1122",
        short_name: "CWHITE",
        aba_num: "61000104",
        account_num: "100057898203",
        account_name: "White Holdings"
      },
      {
        id: 12,
        loan_number: "0100578982",
        address_type: "Wire Revision Bank-Final",
        name: "Sophia L. Martin",
        city: "New York",
        state: "NY",
        zip_plus: "10018-7890",
        short_name: "SMARTIN",
        aba_num: "26009593",
        account_num: "100057898204",
        account_name: "Martin Family Trust"
      },
    
      // ================= 0100578991 =================
      {
        id: 13,
        loan_number: "0100578991",
        address_type: "Wire Bank",
        name: "Daniel R. Harris",
        city: "Chicago",
        state: "IL",
        zip_plus: "60606-4321",
        short_name: "DHARRIS",
        aba_num: "71000013",
        account_num: "100057899101",
        account_name: "Harris Enterprises"
      },
      {
        id: 14,
        loan_number: "0100578991",
        address_type: "Wire Bank-Final",
        name: "Emily K. Clark",
        city: "Phoenix",
        state: "AZ",
        zip_plus: "85004-2345",
        short_name: "ECLARK",
        aba_num: "122105278",
        account_num: "100057899102",
        account_name: "Clark Family Fund"
      },
      {
        id: 15,
        loan_number: "0100578991",
        address_type: "Wire Revision Bank",
        name: "Matthew B. Lewis",
        city: "Denver",
        state: "CO",
        zip_plus: "80202-8765",
        short_name: "MLEWIS",
        aba_num: "123000220",
        account_num: "100057899103",
        account_name: "Lewis Holdings"
      },
      {
        id: 16,
        loan_number: "0100578991",
        address_type: "Wire Revision Bank-Final",
        name: "Olivia S. Walker",
        city: "Miami",
        state: "FL",
        zip_plus: "33101-5678",
        short_name: "OWALKER",
        aba_num: "62000019",
        account_num: "100057899104",
        account_name: "Walker Family Trust"
      },
    
      // ================= 0100578992 =================
      {
        id: 17,
        loan_number: "0100578992",
        address_type: "Wire Bank",
        name: "Andrew P. Young",
        city: "Las Vegas",
        state: "NV",
        zip_plus: "89101-2233",
        short_name: "AYOUNG",
        aba_num: "12240012",
        account_num: "100057899201",
        account_name: "Young Holdings"
      },
      {
        id: 18,
        loan_number: "0100578992",
        address_type: "Wire Bank-Final",
        name: "Grace H. King",
        city: "Salt Lake City",
        state: "UT",
        zip_plus: "84101-4455",
        short_name: "GKING",
        aba_num: "12400001",
        account_num: "100057899202",
        account_name: "King Family Fund"
      },
      {
        id: 19,
        loan_number: "0100578992",
        address_type: "Wire Revision Bank",
        name: "Henry C. Scott",
        city: "San Diego",
        state: "CA",
        zip_plus: "92101-6677",
        short_name: "HSCOTT",
        aba_num: "32508001",
        account_num: "100057899203",
        account_name: "Scott Enterprises"
      },
      {
        id: 20,
        loan_number: "0100578992",
        address_type: "Wire Revision Bank-Final",
        name: "Ava L. Green",
        city: "Los Angeles",
        state: "CA",
        zip_plus: "90001-8899",
        short_name: "AGREEN",
        aba_num: "32508002",
        account_num: "100057899204",
        account_name: "Green Family Trust"
      },
    
      // ================= 0100578911 =================
      {
        id: 21,
        loan_number: "0100578911",
        address_type: "Wire Bank",
        name: "Ryan J. Adams",
        city: "Dallas",
        state: "TX",
        zip_plus: "75201-1111",
        short_name: "RADAMS",
        aba_num: "11110001",
        account_num: "100057891101",
        account_name: "Adams Family Trust"
      },
      {
        id: 22,
        loan_number: "0100578911",
        address_type: "Wire Bank-Final",
        name: "Chloe M. Baker",
        city: "Austin",
        state: "TX",
        zip_plus: "73301-2222",
        short_name: "CBAKER",
        aba_num: "11110002",
        account_num: "100057891102",
        account_name: "Baker Holdings"
      },
      {
        id: 23,
        loan_number: "0100578911",
        address_type: "Wire Revision Bank",
        name: "Jack D. Nelson",
        city: "Houston",
        state: "TX",
        zip_plus: "77002-3333",
        short_name: "JNELSON",
        aba_num: "11110003",
        account_num: "100057891103",
        account_name: "Nelson Enterprises"
      },
      {
        id: 24,
        loan_number: "0100578911",
        address_type: "Wire Revision Bank-Final",
        name: "Zoe R. Carter",
        city: "San Antonio",
        state: "TX",
        zip_plus: "78205-4444",
        short_name: "ZCARTER",
        aba_num: "11110004",
        account_num: "100057891104",
        account_name: "Carter Family Fund"
      },
    
      // ================= 0100578912 =================
      {
        id: 25,
        loan_number: "0100578912",
        address_type: "Wire Bank",
        name: "Ethan W. Phillips",
        city: "Chicago",
        state: "IL",
        zip_plus: "60606-5555",
        short_name: "EPHILL",
        aba_num: "71002001",
        account_num: "100057891201",
        account_name: "Phillips Trust"
      },
      {
        id: 26,
        loan_number: "0100578912",
        address_type: "Wire Bank-Final",
        name: "Lily A. Roberts",
        city: "Boston",
        state: "MA",
        zip_plus: "02108-6666",
        short_name: "LROBERTS",
        aba_num: "11002002",
        account_num: "100057891202",
        account_name: "Roberts Family Fund"
      },
      {
        id: 27,
        loan_number: "0100578912",
        address_type: "Wire Revision Bank",
        name: "Noah S. Turner",
        city: "Denver",
        state: "CO",
        zip_plus: "80202-7777",
        short_name: "NTURNER",
        aba_num: "12302003",
        account_num: "100057891203",
        account_name: "Turner Holdings"
      },
      {
        id: 28,
        loan_number: "0100578912",
        address_type: "Wire Revision Bank-Final",
        name: "Mia J. Collins",
        city: "Seattle",
        state: "WA",
        zip_plus: "98109-8888",
        short_name: "MCOLLINS",
        aba_num: "32502004",
        account_num: "100057891204",
        account_name: "Collins Family Trust"
      },
    
      // ================= 0100578913 =================
      {
        id: 29,
        loan_number: "0100578913",
        address_type: "Wire Bank",
        name: "Lucas P. Stewart",
        city: "Miami",
        state: "FL",
        zip_plus: "33101-9999",
        short_name: "LSTEWART",
        aba_num: "62002001",
        account_num: "100057891301",
        account_name: "Stewart Enterprises"
      },
      {
        id: 30,
        loan_number: "0100578913",
        address_type: "Wire Bank-Final",
        name: "Ella G. Reed",
        city: "New York",
        state: "NY",
        zip_plus: "10018-1010",
        short_name: "EREED",
        aba_num: "26002002",
        account_num: "100057891302",
        account_name: "Reed Family Fund"
      },
      {
        id: 31,
        loan_number: "0100578913",
        address_type: "Wire Revision Bank",
        name: "Logan H. Bennett",
        city: "Atlanta",
        state: "GA",
        zip_plus: "30303-1111",
        short_name: "LBENNETT",
        aba_num: "61002003",
        account_num: "100057891303",
        account_name: "Bennett Holdings"
      },
      {
        id: 32,
        loan_number: "0100578913",
        address_type: "Wire Revision Bank-Final",
        name: "Harper K. Mitchell",
        city: "Phoenix",
        state: "AZ",
        zip_plus: "85004-1212",
        short_name: "HMITCHELL",
        aba_num: "12202004",
        account_num: "100057891304",
        account_name: "Mitchell Family Trust"
      },
    
      // ================= 0100578914 =================
      {
        id: 33,
        loan_number: "0100578914",
        address_type: "Wire Bank",
        name: "Benjamin R. Perez",
        city: "Houston",
        state: "TX",
        zip_plus: "77002-1313",
        short_name: "BPEREZ",
        aba_num: "11302001",
        account_num: "100057891401",
        account_name: "Perez Holdings"
      },
      {
        id: 34,
        loan_number: "0100578914",
        address_type: "Wire Bank-Final",
        name: "Sofia N. Morgan",
        city: "Dallas",
        state: "TX",
        zip_plus: "75201-1414",
        short_name: "SMORGAN",
        aba_num: "11102002",
        account_num: "100057891402",
        account_name: "Morgan Family Fund"
      },
      {
        id: 35,
        loan_number: "0100578914",
        address_type: "Wire Revision Bank",
        name: "Henry L. Cooper",
        city: "Austin",
        state: "TX",
        zip_plus: "73301-1515",
        short_name: "HCOOPER",
        aba_num: "11102003",
        account_num: "100057891403",
        account_name: "Cooper Enterprises"
      },
      {
        id: 36,
        loan_number: "0100578914",
        address_type: "Wire Revision Bank-Final",
        name: "Victoria J. Parker",
        city: "San Antonio",
        state: "TX",
        zip_plus: "78205-1616",
        short_name: "VPARKER",
        aba_num: "11102004",
        account_num: "100057891404",
        account_name: "Parker Family Trust"
      },
    
      // ================= 0100578919 =================
      {
        id: 37,
        loan_number: "0100578919",
        address_type: "Wire Bank",
        name: "David C. Edwards",
        city: "Chicago",
        state: "IL",
        zip_plus: "60606-1717",
        short_name: "DEDWARDS",
        aba_num: "71002010",
        account_num: "100057891901",
        account_name: "Edwards Holdings"
      },
      {
        id: 38,
        loan_number: "0100578919",
        address_type: "Wire Bank-Final",
        name: "Emma L. Foster",
        city: "Boston",
        state: "MA",
        zip_plus: "02108-1818",
        short_name: "EFOSTER",
        aba_num: "11002011",
        account_num: "100057891902",
        account_name: "Foster Family Trust"
      },
      {
        id: 39,
        loan_number: "0100578919",
        address_type: "Wire Revision Bank",
        name: "Oliver J. Gray",
        city: "Denver",
        state: "CO",
        zip_plus: "80202-1919",
        short_name: "OGRAY",
        aba_num: "12302012",
        account_num: "100057891903",
        account_name: "Gray Enterprises"
      },
      {
        id: 40,
        loan_number: "0100578919",
        address_type: "Wire Revision Bank-Final",
        name: "Isabella R. Hughes",
        city: "Seattle",
        state: "WA",
        zip_plus: "98109-2020",
        short_name: "IHUGHES",
        aba_num: "32502013",
        account_num: "100057891904",
        account_name: "Hughes Family Fund"
      }
    ];
   const { loanNumber } = req.query;
   //const loanNumber = req.params.loanNumber;            
   const records = wireBankContacts.filter(r => r.loan_number === loanNumber);  
   if (records.length > 0) {
      res.status(200).json(records);
    } else {
      res.status(404).json({ message: "No WireBank contact found for this loan number" });
    }  
}
