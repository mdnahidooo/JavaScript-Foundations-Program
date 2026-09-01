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

// console.log(validateUsername("nahid123"));
// console.log(validateUsername("na"));
// console.log(validateUsername("n a"));
// console.log(validateUsername("nahid"));
// console.log(validateUsername("nahid islam"));
// console.log(validateUsername("superadmin99"));
// console.log(validateUsername("Admin_Rahim"));


