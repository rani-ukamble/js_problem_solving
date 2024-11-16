const busRoutes = [
    // Route 1: From Location A to Location D
    [
        "Route 1: A → D", // Route name
        ["A", "B", "C", "D"], // Stops
        [120, 80, 150, 0], // Passengers at each stop
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


// 1.Write a function to calculate the total number of passengers across all routes.
function total_passengers(busRoutes) {
    let lst = busRoutes.map(item => {
        return item[2]
    }).flat()
    return lst.reduce((a, b) => a + b, 0)
}
// console.log(total_passengers(busRoutes))    


// 2. Write a function that finds the route with the least number of stops and returns its name.
function findRouteWithLeastStops(busRoutes) {
    return busRoutes.reduce((mini, p) => p[1].length < mini[1].length ? p : mini)[0]
}

// console.log(findRouteWithLeastStops(busRoutes))


// 3. Write a function to create a new array containing only the stop names from all routes (flattened).
function allroutes(busRoutes) {
    return busRoutes.map(item => item[1]).flat()
}
// console.log(allroutes(busRoutes))

C:\testing\Python\jsPractice\ProblemSolvingQuestions\script3.js

// 4. Write a function to find all routes that start or end at a specific stop, e.g., "A".
function route_with_same_start_and_end(busRoutes, route) {
    let lst = busRoutes.filter(i => i[1][0] == route || i[1][i[1].length - 1] == route)
    return lst.map(item => item[0])
}

// console.log(route_with_same_start_and_end(busRoutes, "A")) 


// 5. Write a function to filter routes that have a travel time exceeding a given limit for any stop interval.

function filterRoutesByTravelTime(busRoutes, timeLimit) {
    return busRoutes.filter(route =>
        route[3].some(interval => interval > timeLimit)).map(i => i[0])
}
// console.log(filterRoutesByTravelTime(busRoutes, 10)) 





// 6. Write a function to find and return the stop with the highest cumulative passenger count across all routes.

function findStopWithHighestPassengers(busRoutes) {
    return
}


// #Sorting

// 7. Modify the sortRoutesByAverageDemand function to return routes sorted in descending order of total travel time instead of average passenger demand.

function sortRoutesByAverageDemand(busRoutes) {
    let lst = busRoutes.map(item => {
        return [item[0], item[3].reduce((sum, p) => sum + p, 0) / item[3].length]
    })
    return lst.sort((a, b) => b[1] - a[1])
}
// console.log(sortRoutesByAverageDemand(busRoutes))



// 8.Write a function to sort the routes by the number of stops they have, in ascending order.
function sortByNumberofStops(busRoutes) {
    let lst = busRoutes.map(item => {
        name: item[0];
        sum_stops = item[3].reduce((sum, p) => sum + p, 0)
        return [item[0], sum_stops]
    })
    return lst.sort((a, b) => a[1] - b[1])
}
// console.log(sortByNumberofStops(busRoutes)) 


// #Reducing and Calculating 

// 9. Write a function to calculate the average travel time per stop for each route and return a new array of route names and averages.
function averageTravelTimePerStop(busRoutes) {
    let lst = busRoutes.map(item => {
        avg_travel_time = item[3].reduce((a, b) => a + b, 0) / item[3].length
        return [item[0], avg_travel_time]
    })
    return lst
}
// console.log(averageTravelTimePerStop(busRoutes)) 



// #Complex Combinations

// 10. Write a function to calculate the stop with the maximum number of passengers across all routes. 

function stopsWithMaxPassengers(busRoutes) {
    let lst = busRoutes.map(item => {
        total_passengers = item[2].reduce((sum, p) => sum + p, 0)
        return [item[0], total_passengers]
    })
    return lst.sort((a, b) => b[1] - a[1])[0]
}
// console.log(stopsWithMaxPassengers(busRoutes)) 


// 11. Write a function to create a summary of all routes in the format:

// {
//     routeName: "Route 1: A → D",
//     stops: 4,
//     totalPassengers: 440,
//     averageDemand: 110,
//     totalTravelTime: 26
// }

function summary(busRoutes) {
    let lst = busRoutes.map(item => {
        stops = item[1].length;
        totalPassengers = item[2].reduce((sum, p) => sum + p, 0);
        averageDemand = item[2].reduce((sum, p) => sum + p, 0) / item[3].length;
        totalTravelTime = item[3].reduce((sum, p) => sum + p, 0)
        // return [item[0], stops, totalPassengers, averageDemand, totalTravelTime]
        return {
            routeName: item[0],
            stops: stops,
            totalPassengers: totalPassengers,
            averageDemand: averageDemand,
            totalTravelTime: totalTravelTime
        };
    })
    return lst
}
// console.log(summary(busRoutes)) 


// 12. Write a function that finds and returns the route where the ratio of passengers to travel time is the highest.
function findMaxRatio(busRoutes){
    let lst = busRoutes.map(item => {
        sumPsassengers = item[2].reduce((sum, p)=>sum+p, 0)
        sum_time = item[3].reduce((sum, p)=>sum+p, 0)
        return [item[0], sumPsassengers/sum_time]
    })
    return lst.sort((a, b)=>b[1]-a[1])[0]
}
// console.log(findMaxRatio(busRoutes)) 


// #Custom Conditions 

// 13. Write a function that removes all routes where the total passenger demand is less than a given threshold.
function remove_routes(busRoutes, threshold){
    return busRoutes.filter(item=>{
        totalDemand = item[2].reduce((sum, p)=>sum+p, 0)
        return totalDemand>threshold
    })
}
// console.log(remove_routes(busRoutes, 400))



// 14. Write a function that adds a new property to each route indicating whether it has any stop with zero passengers.
function zero_passengers(busRoutes){
    return busRoutes.map(item=>{
        let zero_passengers= item[2].some(passengers=>passengers===0)
        return {...item, zero_passengers}
    })
}
// console.log(zero_passengers(busRoutes))


// #Real-World Use Cases

// 15. Write a function to simulate adding a new stop to a route, increasing its travel time and passenger demand proportionally.
function addNewStop(route, newroute){
    route[1].push(newroute)
    let avgPass = route[2].reduce((a, b)=>a+b, 0)/route[2].length
    route[2].push(avgPass)
    let avgDemand = route[3].reduce((a, b)=>a+b, 0) /route[3].length
    route[3].push(avgDemand)
    return route
}
console.log(addNewStop(busRoutes[0], "F"))  



