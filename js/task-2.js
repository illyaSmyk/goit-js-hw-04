function calcAverageCalories(days) {
    const numbers = [];

    for (const day of days) {
        numbers.push(day.calories);
    }
    
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    const average = Math.round (total / numbers.length);
    if (numbers.length === 0) { return "No data for this week"; }
    
    return average === 0 ? "No data for this week" : average;
}

console.log(
calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
])
); // 3180

console.log(
calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
])
); // 2270

