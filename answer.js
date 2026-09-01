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





// Question No. 3

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    else if (username.includes(" ")) {
        return "No Space Allowed";
    }
    else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    else {
        return "Available";
    }
}




// Question No. 4

// Question No. 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + waitingMinutes * 2;

    if (isNight) {
        fare = fare + (fare * 20 / 100);
    }

    return fare;
}




// Question No. 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    }
    else if (requiredRate <= 12) {
        verdict = "Tough";
    }
    else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};


