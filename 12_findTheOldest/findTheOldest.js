const findTheOldest = function(people) {
    let oldest = people[0];
    if(oldest.yearOfDeath == null)
    {
        let d = new Date();
        oldest.yearOfDeath = d.getFullYear();
    }
    for (const person of people) {
        if(person.yearOfDeath == null && person !== oldest)
        {
            let d = new Date();
            person.yearOfDeath = d.getFullYear();
        }
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        personAge = person.yearOfDeath - person.yearOfBirth;
        if(oldestAge < personAge)
        {
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
