var data = {
    "1020304050" : {"loanNumber": "1020304050", "loanType": "FHA"},
    "1020304051" : {"loanNumber": "1020304050", "loanType": "VA"},
};

export function getLoanInfo(loanNumber){
    return data[loanNumber];
}

export default data;
