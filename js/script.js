const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} love to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");
// console.log(sora, clover, baxter, cleo, francine);
// clover.sleep();
// baxter.play();
// console.log(clover, baxter);

// Update Properties & Create an Array of Objects
// Clover and Francine are both quite tired. Change the value
// of the isTired property to 8 for Clover. Also, change the
// value of the isTired property to 9 for Francine.
clover.isTired = 8;
francine.isTired = 9;

// Create an array called allPets that includes all pet
// objects as elements.
const allPets = [sora, clover, baxter, cleo, francine];
// Log out the allPets array to verify all five objects are
// showing up as array elements.
// console.log(allPets);

// Display Pets in the Browser
// Create a function called showPets. Use petArray as an
// argument.
// Grab the pets variable that’s selecting the “all-pets”
// unordered list. Use innerHTML to set pets to an empty
// string. This will clear your list whenever showPets is run,
// so that you can update it with fresh info.
const showPets = function (petArray) {
  // empty list
  pets.innerHTML = " ";

  // Use a for...of loop to loop over the petArray. In the
  // for...of loop, declare a variable called status with a
  // value of “ready to play!”. Hint: Use let to declare the
  // status variable because you’ll be reassigning the value.
  // Below the status variable and inside the for...of loop,
  // write an if statement to check if the pet’s isTired
  // property is greater or equal to 7. If so, change the
  // value of the status variable to “sleeping”.
  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    // Below the if statement, but still in the for...of loop,
    // declare a variable li for a list. In the value, create a
    // list element using document.createElement. Use innerHTML
    // to add the pet name, species, and status to the list
    // item like: <name> the <species> is <status>. Replace
    // <name> and <species> with the pet’s name and species.
    // Replace <status> with the status variable. In the value
    // of the li.innerHTML, add a span with class of “pet-name”
    // around the pet’s name. This will change the color of the
    // pet’s name to help it stand out!
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;

    // Append the li variable to the pets element.
    pets.append(li);
  }
};
// Below the showPets function, add a click event to the
// statusButton. In the event handler, call the showPets
// function. Pass the allPets array as an argument
// to the function.
statusButton.addEventListener("click", function () {
  showPets(allPets);
});

// Reload the browser preview window and click the Show Pet
// Status button. You should see all five pets displayed with
// their species and status indicated!
