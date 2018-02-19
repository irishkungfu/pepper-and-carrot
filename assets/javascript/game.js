var phase = 'select_character'; // Select Character, Attack, Select Defender
var characterCount = 4;
var attacker;
var defender;
characterList = ['pepper', 'thyme', 'sage', 'cumin'];
var defenderCounter = 3;



var pepper = {
    id: 'pepper',
    name: 'Pepper',
    counterAttack: 8,
    hp: 120,
    attackPower: 8,
    incrementAttack: function () { this.attackPower += this.attackPower },
}
var thyme = {
    id: 'thyme',
    name: 'Thyme',
    counterAttack: 8,
    hp: 1800,
    attackPower: 100,
    incrementAttack: function () { this.attackPower++ },
}

var sage = {
    id: 'sage',
    name: 'The Sage',
    counterAttack: 8,
    hp: 150,
    attackPower: 20,
    incrementAttack: function () { this.attackPower++ },
}
var cumin = {
    id: 'cumin',
    name: 'Cumin',
    counterAttack: 8,
    hp: 150,
    attackPower: 20,
    incrementAttack: function () { this.attackPower++ },
}
$(function (){
    $('#pepper_hp').text('HP: ' + pepper.hp);
    $('#sage_hp').text('HP: ' + sage.hp);
    $('#cumin_hp').text('HP: ' + cumin.hp);
    $('#thyme_hp').text('HP: ' + thyme.hp);
});

$( document ).ready(function() {
    
    $('.character-wrapper').click(function () {
        var area = $(this).parent().prop('id'); // Identify which section you are in
        // var getHtml;
        console.log('phase = ' + phase);
        character = $(this).children().prop('id');

    
        if (area === 'select-your-character_area') {
            $(this).parent().prop('id', 'select-defender_area')

            var getHtml = $(this).children().html();
            console.log(getHtml)

            $('#attacker_card').replaceWith(getHtml);
            $(this).parent().prop('id', 'select-defender_area')
            phase = 'select_defender';

            characterCount--;
            attacker = eval(character);
            console.log('attacker = ' + attacker.name);
            $(this).remove();
            console.log(characterCount);

            
        } 
        else if (area === 'select-defender_area' && phase === 'select_defender') {
            $('#defender_container').children().prop('id', 'defender_card');
            var getHtml = $(this).children().html();

            $('#defender_card').replaceWith(getHtml);
            $(this).parent().prop('id', 'select-defender_area')


            characterCount--;

            if (characterCount === 0) {
                // $(this).parent().hide(1000);

                var placeholder = '<div class="px-1 col-3 character-wrapper invisible"><div class="card p-1"><div class="card-body"><img src="assets/images/pepper.jpg" class="img-fluid character-image" alt=""><div class="caption">Pepper<br><small">HP - 100</small></div></div></div></div>';
                $(this).parent().replaceWith(placeholder);
            }
            phase = 'attack';
            defender = eval(character);
            console.log('defender = ' + defender.name);
            console.log(characterCount);
            $(this).remove();
        }
    });
    $('#attack_button').click(function () {
        if (phase === 'attack') {
            var attackerHpId = '#' + attacker.id + "_hp";
            var defenderHpId = '#' + defender.id + "_hp";

            console.log('attack phase is operational');

            attacker.hp = attacker.hp - defender.counterAttack;
            $(attackerHpId).text("HP: " + attacker.hp);
            defender.hp = defender.hp - attacker.attackPower;
            $(defenderHpId).text("HP: " + defender.hp);
            $('#battle-status').text("You attacked " + defender.name + " for " + attacker.attackPower + " damage! " + defender.name + " responded with a counter attack, you took " + defender.counterAttack + " damage.");

            if (attacker.hp <= 0 ) {
                $('#battle-status').text('you lost!')
                phase = 'lost';
                console.log('works');
                // add in reset button --thinking change the button id and run through different click event
            }
            if (defender.hp <= 0) {
                $('#battle-status').text('You have slain ' + defender.name + '!')
                phase = "select_defender";
                defenderCounter--;
                if (defenderCounter === 0) {
                    $('#battle-status').text('You have have defeated all the other witches!')
                }
            }
            attacker.incrementAttack();
        }
    });
});