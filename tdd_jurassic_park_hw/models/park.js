const Park = function (name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.getDinosaurCollection = function () {
    return this.dinosaurCollection
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const index = this.dinosaurCollection.indexOf(dinosaur)
    if (index === -1) return // check can be put in place to make sure dinosaur is in the list before removal or check that index is not -1 (if (index === -1) return)
    this.dinosaurCollection.splice(index, 1)
}




// popular dino - assign variable
// max guests - assign variable
// loop through dinosaurs
// conditional - if guestsAttractedPerDay is higher than current maxGuest variable reassign dinosaur to variables.
// once loop has completed
// return the most popular dinosaur
Park.prototype.findMostPopularDinosaur = function () {
    let mostPopularDinosaur = null // could assume the first one is the most popular so let mostPopularDinosaur = this.dinosaurCollecxtion[0]
    let maxGuests = 0 // not necessary can just track the dino and check that > mostPopularDinosaur.guestsAttractedPerDay

    for (const dinosaur of this.dinosaurCollection) {
        if (dinosaur.guestsAttractedPerDay > maxGuests) {
            mostPopularDinosaur = dinosaur
            maxGuests = dinosaur.guestsAttractedPerDay
        }
    }
    return mostPopularDinosaur
}

// parameter - species
// variable - empty list/array (dino by species)
//  for loop, matching species append to array
// return dinosaur

Park.prototype.findDinosaurBySpecies = function (species) {
    const dinosaurBySpecies = []

    for (const dinosaur of this.dinosaurCollection) {
        if (dinosaur.species === species) {
            dinosaurBySpecies.push(dinosaur)
        }
    }
    return dinosaurBySpecies
}

Park.prototype.totalVisitorsPerDay = function () {
    let totalVisitors = 0

    for (const dinosaur of this.dinosaurCollection) {
        totalVisitors += dinosaur.guestsAttractedPerDay
    }
    return totalVisitors
}

Park.prototype.totalVisitorsPerYear = function () {
    const visitorsPerDay = this.totalVisitorsPerDay()
    const dayInAYear = 365
    return visitorsPerDay * dayInAYear
}

Park.prototype.totalRevenuePerYear = function () {
    const visitorsPerYear = this.totalVisitorsPerYear()
    const revenuePerTicket = this.ticketPrice
    return visitorsPerYear * revenuePerTicket
}

// from solution for removing by species:
// Park.prototype.removeBySpecies = function (species) {
//     const newDinosaurs = [];
  
//     for (const dinosaur of this.dinosaurs) {
//       if (dinosaur.species !== species) {
//         newDinosaurs.push(dinosaur);
//       }
//     }
  
//     this.dinosaurs = newDinosaurs;
//   }

// from solution to return number of diets by diet
// Park.prototype.numberOfDinosaursByDiet = function () {
//     const numberOfDinosaursByDiet = {};
  
//     for (const dinosaur of this.dinosaurs) {
//       if (numberOfDinosaursByDiet[dinosaur.diet]) {
//         numberOfDinosaursByDiet[dinosaur.diet] += 1;
//       }
//       else {
//         numberOfDinosaursByDiet[dinosaur.diet] = 1;
//       }
//     }
  
//     return numberOfDinosaursByDiet;
//   }


module.exports = Park;
