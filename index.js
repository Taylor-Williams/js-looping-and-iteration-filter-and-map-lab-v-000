// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.map(function(driver){
    if(driver.revenue > revenue){
      return driver
    }
  })
}