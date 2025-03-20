let enemy = {
    name:"",
    class:"",
    health:100,
    attack:8,
    critRate:0.1
}
let character = {
    name: "",
    class: "",
    health: 100,
    attack: 10,
    critRate: 0.5
}
function goBack()
{
    window.history.back() //should work but don't
    window.location.href = "index.html"
}

function statsPage(){
    //ok i get info i saved make new character then save it again

    const newWindow = window.open(
        'characterStats.html',
        'statPage',
        'width=400,height=600,resizable=no,scrollbars=yes,status=yes'
      );
}

function attack()
{   
    // Prevent default form submission behavior
   if (event) {
    event.preventDefault();
 }
    //i honestly need a random function to do the critRate
   let yourDamage = (character.attack * character.critRate) + character.attack
   let enemyDamage = (enemy.attack * enemy.critRate) + enemy.attack
   let cardBody = document.getElementById("cardBody")
   let mainCard = document.getElementById("mainCard")
   let newContent = document.createElement("p");
   let heroHealth = document.getElementById("heroHealth")

        newContent.textContent = "You attacked: " + yourDamage + " damage done!"
         
        if((enemy.health -= yourDamage) < 0)
        {
            enemyHealth.style.width = "" + 0 + "%"
            window.alert("The great evil has been defeated!!!!!!!!!")
        }
        else{
        enemyHealth.style.width = "" + enemy.health + "%"
        newContent.style.marginLeft = "0.5em"
        newContent.style.fontSize ="25px"
        mainCard.appendChild(newContent)
        }
        let newContent2 = document.createElement("p");
        newContent2.textContent = "Enemy attacked: " + enemyDamage + " damage done!"
        if((character.health -= enemyDamage) < 0){
            heroHealth.style.width = "" + 0 + "%"
            window.alert("The great evil has been Won!!!!!!!!!")
        }
        else{
            heroHealth.style.width = "" + character.health + "%"
            newContent2.style.marginLeft = "0.5em"
            newContent2.style.fontSize ="25px"
            mainCard.appendChild(newContent2)
        }
}