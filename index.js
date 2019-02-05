// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  const newDrivers = []
  newDrivers = drivers.map(function(driver){
    if(driver.revenue > revenue){
      return driver
    }
  })
  return newDrivers
}
function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.map(function(driver){
    if(driver.revenue > revenue){
      return driver.name
    }
  })
}
function exactMatch(drivers, match){
  return drivers.map(function(driver){
    if(driver[match.keys.first] === match.values.first){
      return driver
    }
  })
}
function exactMatchToList(drivers, match){
  return drivers.map(function(driver){
    if(driver[match.keys.first] === match.values.first){
      return driver.name
    }
  })
}
