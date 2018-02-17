$( document ).ready(function() {
    var character = {
        id: null,
        name: null,
        healthPoints: null,
        attackPower: null,
        counterAttack: null,
        image: null,
        state: null,
        attackPowerIncrease: function () {
            this.attackPower = this.attackPower += 6;
            return;
        }
    }
    
        var lukeSkywalker = Object.create(character);
        lukeSkywalker.name = 'test';
        lukeSkywalker.attackPower = 6;
        lukeSkywalker.attackPowerIncrease();
        console.log(lukeSkywalker);

    
    // console.log(lukeSkywalker);
    // var luke_skywalker = Object.create(characters);
    // luke_skywalker.id = 'Luke Skywalker';
    // console.log(luke_skywalker.id);

});

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

console.log(add());

function Movie(title, stub, video) {
    this.title = title;
    this.stub = stub;
    this.video = video;
};

var the_wizard_of_oz = Movie('The Wizard of Oz','asdf','assets/videos/the_wizard_of_oz.mp4');
console.log(the_wizard_of_oz);