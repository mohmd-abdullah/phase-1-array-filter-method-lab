function findMatching(driversNames, name) {
    const results = driversNames.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return results
}

function fuzzyMatch(driversNames, firstLetters) {
    const results = driversNames.filter(driver => driver[0] === firstLetters[0])
    return results
}

function matchName(driversObj, name) {
    const results = driversObj.filter(driver => driver.name === name)
    return results
}