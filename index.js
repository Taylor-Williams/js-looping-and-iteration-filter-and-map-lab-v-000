// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}
function driverNamesWithRevenueOver(drivers, revenue){
  const newDrivers = driversWithRevenueOver(drivers, revenue)
  return newDrivers.map(driver => driver.name)
}
function exactMatch(drivers, matcher){
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}
function exactMatchToList(drivers, match){
  return drivers.map(function(driver){
    if(driver[match.keys.first] === match.values.first){
      return driver.name
    }
  })
}
