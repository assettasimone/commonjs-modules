import hobbiesF from "./hobbies.js";

import namesF from "./names.js"

function peoplesF() {
    const names = namesF("Simone", "Assetta");
    const fullName = names.firstName + ' ' + names.lastName

    const hobbies = hobbiesF("warhammer", "camper", "moto")
    const hobbiesStr = `${hobbies}`

    const people = {
        fullName,
        hobbiesStr
    }

    console.log(people);

    return people

}


peoplesF();