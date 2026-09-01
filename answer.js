// Question No. 1

function describeValue(value) {
    let type = typeof value;
    let result;

    if (value) {
        result = "truthy";
    } else {
        result = "falsy";
    }

    return type + " | " + result;
}




// Question No. 2

function getDayType(day) {
    day = day.toLowerCase();

    if (day === "friday" || day === "saturday") {
        return "Weekend";
    }
    else if (
        day === "sunday" ||
        day === "monday" ||
        day === "tuesday" ||
        day === "wednesday" ||
        day === "thursday"
    ) {
        return "Working Day";
    }
    else {
        return "Invalid Day";
    }
}


// console.log(getDayType("Tangail"));