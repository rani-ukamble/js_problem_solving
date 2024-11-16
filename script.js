// Question1 

function addtoList() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    let li1 = document.createElement("li")

    li1.textContent = `name: ${name} , email: ${email}`

    document.getElementById("user-list").appendChild(li1)

    document.getElementById("name").value = ''
    document.getElementById("email").value = ''
}


// Question2

function validate_username() {
    const userPattern = /^[a-zA-Z0-9]{4,12}$/
    let uname = document.getElementById("uname").value
    let val = userPattern.test(uname)

    if (val) {
        document.getElementById("validate").textContent = "Valid"
        document.getElementById("validate").style.color = "green"
    }
    else {
        document.getElementById("validate").textContent = "InValid"
        document.getElementById("validate").style.color = "red"

    }

}


function validateUsernames(usernames) {
    const userPattern = /^[a-zA-Z0-9]{4,12}$/
    return usernames.filter(uname => userPattern.test(uname))
}
let usernames = ["user_01", "john123", "invalid user", "xyz@!", "cggfghf"];
// console.log(validateUsernames(usernames))






// Question 3


let market = {
    "name": "Global Stock Exchange",
    "location": "New York",
    "date": "2024-11-14",
    "indices": [
        {
            "name": "S&P 500",
            "symbol": "SPX",
            "companies": [
                {
                    "name": "Apple Inc.",
                    "symbol": "AAPL",
                    "sector": "Technology",
                    "currentPrice": 175.65,
                    "priceChange": -2.35,
                    "marketCap": "2.78T",
                    "dividends": {
                        "annualYield": 0.58,
                        "payoutRatio": 24.5
                    },
                    "historicalPrices": [
                        { "date": "2024-11-13", "close": 178.00 },
                        { "date": "2024-11-12", "close": 176.50 },
                        { "date": "2024-11-11", "close": 179.30 }
                    ]
                },
                {
                    "name": "Tesla Inc.",
                    "symbol": "TSLA",
                    "sector": "Automotive",
                    "currentPrice": 250.75,
                    "priceChange": +5.50,
                    "marketCap": "880B",
                    "dividends": {
                        "annualYield": 0.00,
                        "payoutRatio": 0.0
                    },
                    "historicalPrices": [
                        { "date": "2024-11-13", "close": 245.25 },
                        { "date": "2024-11-12", "close": 247.00 },
                        { "date": "2024-11-11", "close": 244.00 }
                    ]
                }
            ]
        },
        {
            "name": "NASDAQ",
            "symbol": "IXIC",
            "companies": [
                {
                    "name": "Google LLC",
                    "symbol": "GOOG",
                    "sector": "Technology",
                    "currentPrice": 2850.90,
                    "priceChange": +18.75,
                    "marketCap": "1.9T",
                    "dividends": {
                        "annualYield": 0.00,
                        "payoutRatio": 0.0
                    },
                    "historicalPrices": [
                        { "date": "2024-11-13", "close": 2832.15 },
                        { "date": "2024-11-12", "close": 2835.00 },
                        { "date": "2024-11-11", "close": 2825.20 }
                    ]
                },
                {
                    "name": "Microsoft Corp.",
                    "symbol": "MSFT",
                    "sector": "Technology",
                    "currentPrice": 345.10,
                    "priceChange": +4.20,
                    "marketCap": "2.60T",
                    "dividends": {
                        "annualYield": 0.90,
                        "payoutRatio": 32.5
                    },
                    "historicalPrices": [
                        { "date": "2024-11-13", "close": 340.90 },
                        { "date": "2024-11-12", "close": 341.00 },
                        { "date": "2024-11-11", "close": 338.75 }
                    ]
                }
            ]
        }
    ]
}

// console.log(market)

// console.log(JSON.stringify(market, null, 2)); 



// Question3.1

// Write a function filterPositivePriceChange(marketData) that 
// filters and returns all companies that have a priceChange
// greater than 0.


function filterPositivePriceChange(market) {
    let res = []

    market.indices.forEach(index => {
        const pos = index.companies.filter(company => company.priceChange > 0)
        res.push(pos)
    })
    return res
}
// console.log(filterPositivePriceChange(market)) 


// Q2) Write a function findCompanyBySymbol(marketData, symbol) that returns the company details based on the provided symbol. 

function findCompanyBySymbol(market, symbol) {
    let res = []
    market.indices.forEach(item => {
        const company = item.companies.filter((ele) => ele.symbol === symbol)
        res.push(company)
    })
    return res
}
// console.log(findCompanyBySymbol(market, 'GOOG')) 



// Q3) Write a function sortCompaniesByMarketCap(market) that returns the companies sorted by their marketCap in descending order. 

function sortCompaniesByMarketCap(market) {
    let company_array = market.indices.flatMap(ind => ind.companies);
    // console.log(company_array);

    company_array.sort((a, b) => {
        // Replace 'T' and 'B' and then convert to numeric values
        let marketCapA = parseFloat(a.marketCap.replace('T', 'e12').replace('B', 'e9'));
        let marketCapB = parseFloat(b.marketCap.replace('T', 'e12').replace('B', 'e9'));

        return marketCapB - marketCapA;  // Sorting in descending order
    });

    console.log(company_array);

}

sortCompaniesByMarketCap(market)



// Q4) Write a function findAndSortHighCapCompanies(marketData) that filters out companies with a market cap above 1 trillion and sorts them by priceChange in descending order.

function findAndSortHighCapCompanies(market){
    let company = market.indices.flatMap(id=>id.companies)

    let  highCapCompanies = companies.map((item)=>parseFloat(item.marketCap.replace('T', 'e12').replace('B', 'e9')))
    let ans = res_company.filter((item)=>item.marketCap>1000000000000)

    let highCapCompanies1 = companies.filter(company => {
        let marketCap = parseFloat(company.marketCap.replace('T', 'e12').replace('B', 'e9'));
        return marketCap > 1e12;  // 1 trillion in scientific notation
    });

    console.log(ans)
}

findAndSortHighCapCompanies(market)




// *****************************************************

