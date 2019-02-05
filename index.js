// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.map(function(driver){
    if(driver.revenue > revenue){
      return driver
    }
  })
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
