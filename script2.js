
const busRoutes = [
    // Route 1: From Location A to Location D
    [
        "Route 1: A → D", // Route name
        ["A", "B", "C", "D"], // Stops
        [120, 80, 150, 90], // Passengers at each stop
        [5, 8, 6, 7] // Time intervals between stops (in minutes)
    ],

    // Route 2: From Location B to Location E
    [
        "Route 2: B → E", // Route name
        ["B", "C", "D", "E"], // Stops
        [100, 140, 110, 60], // Passengers at each stop
        [10, 7, 5, 10] // Time intervals between stops (in minutes)
    ],
    // Route 3: From Location C to Location F
    [
        "Route 3: C → F", // Route name
        ["C", "D", "E", "F"], // Stops
        [80, 50, 120, 130], // Passengers at each stop
        [15, 12, 10, 6] // Time intervals between stops (in minutes)
    ],
    // Route 4: From Location A to Location E
    [
        "Route 4: A → E", // Route name
        ["A", "B", "C", "D", "E"], // Stops
        [230, 90, 80, 50, 70], // Passengers at each stop
        [6, 8, 5, 9, 7] // Time intervals between stops (in minutes)
    ]
];


// Q1) Write a function filterRoutesByHighDemand(busRoutes) that filters and returns all routes where at least one stop has passenger demand greater than 100. 

function filterRoutesByHighDemand(busRoutes) {
    return busRoutes.filter((index) => {
        return index[2].some((item) => item > 100)
    })
    //  return ans      
}

// console.log(filterRoutesByHighDemand(busRoutes)) 



// Q2) Write a function findRouteWithMaxDemand(busRoutes) that finds the route with the highest passenger demand at any stop and returns the route's name. 

function findRouteWithMaxDemand(busRoutes) {
    let maxRoute = busRoutes.map((item) => {
        routeName: item[0],
            maxPassengers = Math.max(...item[2])
        return maxPassengers;
    }).reduce((max, curr) => max.maxPassengers > curr.maxPassengers ? max : curr)

    let res = busRoutes.filter(item => {
        if (item[2].includes(maxRoute)) return true;
    })
    return res[0][0]

}

// console.log(findRouteWithMaxDemand(busRoutes)) 



// Q3) Write a function sortRoutesByAverageDemand(busRoutes) that sorts the routes by their average 
// passenger demand in ascending order. 

function sortRoutesByAverageDemand(busRoutes) {
    return busRoutes.sort((a, b)=>{
        const a1 = a[2].reduce((sum, p)=>sum+p)/a[2].length
        const b1 = b[2].reduce((sum, p)=>sum+p)/a[2].length
        return b1-a1
    })

}
// console.log(sortRoutesByAverageDemand(busRoutes)) 



// Q4) Write a function calculateTotalDemand(busRoutes) that calculates and returns an array where each element is an array with the route name and its total passenger demand. 

function calculateTotalDemand(busRoutes){
    return busRoutes.map(item =>{
        const routeName= item[0];
        const totalDemand = item[2].reduce((sum, p)=>sum+p, 0)
        return [routeName, totalDemand]
    }).sort((a, b)=>b[1]-a[1])

}
// console.log(calculateTotalDemand(busRoutes)) 



// Q5) Write a function calculateTotalTravelTime(busRoutes) that returns an array where each element contains the route name and its total travel time. 

function calculateTotalTravelTime(busRoutes){
    return busRoutes.map(item=>{
        routeName = item[0];
        TotalTravelTime = item[3].reduce((sum, p)=>sum+p)
        return [routeName, TotalTravelTime]
    })
}
console.log(calculateTotalTravelTime(busRoutes))
