let count = 0;

let buttonCreature = {
    name: "My Question Mark Button",
    species: "Mysterious Item",
    favoriteFood: "Pizza",
    moods: ["Happy", "Scared", "Anger", "Sadness", "Disgust", "Worried"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "My Emotions are " + currentMood;

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);


});