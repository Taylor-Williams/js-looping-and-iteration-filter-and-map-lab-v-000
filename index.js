// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}
function driverNamesWithRevenueOver(drivers, revenue){
  const newDrivers = driversWithRevenueOver(drivers, revenue)
  return newDrivers.map(driver => driver.name)
}
function exactMatch(drivers, match){
  return drivers.filter(function(driver){
    let isMatch = false
    for(const key in match) {
      isMatch = drivers[key] === match[key]
    }
    return isMatch
  })
}
function exactMatchToList(drivers, match){
  return drivers.map(function(driver){
    if(driver[match.keys.first] === match.values.first){
      return driver.name
    }
  })
}
