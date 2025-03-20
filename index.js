//Making a rpg, rpg will be text base with few pictures
//features it will have a back button, ability to use prompt
//or button for combat
//normally i have a main game loop
//but instead will just event checking
//will use window.open for a secondary window display stats
//will be base on a rock,paper,sissor

//need global



function updateBtn(){
//get the imgBox element
let img = document.getElementById("imgBox")
//get the radio group
let radioGroup = document.getElementsByName("Btnchar")
let gTxt = document.getElementById("mainTxt")
for(let radioButton of radioGroup)
{
    if(radioButton.checked)
    {
        let selectedValue = radioButton.value
        switch(selectedValue)
        {
            case "Warrior":
                img.src = "Warrior.jpg"
                gTxt.textContent = "Born to blacksmiths in a frontier village, Thorne learned to wield weapons before he could properly hold them. His village was a constant target for raids due to its rich iron mines. At sixteen, when raiders struck again, Thorne picked up his father's unfinished sword and discovered his natural talent for combat, successfully defending his home."
                break;
            case "Mage":
                img.src = "Mage.jpg"
                gTxt.textContent = "Elara's magical abilities manifested unexpectedly during a village festival when she accidentally conjured lights in the night sky. Fearful villagers, superstitious of magic, forced her family to send her to the Academy of Arcane Studies in the distant city."
                break;
            case "Archer":
                img.src = "Archer.jpg"
                gTxt.textContent = "Thorne grew up in a forest village where hunting was essential for survival. His father taught him archery at a young age, and he quickly became the most skilled hunter in the region."
                break;
        }
    }
}
}

function goNext()
{
    let character = {
        name: "",
        class: "",
        health: 100
    
    }
    let radioGroup = document.getElementsByName("Btnchar")
    //prompt for character name
    character.name = prompt("Enter character name")
    for(let radioButton of radioGroup)
        {
            if(radioButton.checked)
            {
                
                 character.class = radioButton.value
                 window.alert(character.name +" This class you choice is " + character.class)
                 
            }
        }
       
        // //only way to save info is with parameters
        // //im sure we cover this in the lesson plan
        // const jsonString = JSON.stringify(character)
        // const endcoded = encodeURIComponent(jsonString)

    window.location.href = "battle.html"
}










