//Hämtar button med dess id och sparar det på variabeln themetoggle 
let themeToggle = document.getElementById("theme-switch");

//Skapar en variabel som kommer hämta temat via nyckeln theme i localstorage 
let savedTheme = localStorage.getItem("theme");

if(savedTheme)
{
    //lägger till det sparade temat på body-elementet
    document.body.classList.toggle(savedTheme);
   
    //Uppdaterar texten på knapen beroende på vilket tema som sparats
 if(savedTheme === "light-theme" )
 {
    themeToggle.innerText ="Switch to regular theme";
 }
 else
 {
    
    themeToggle.innerText ="Switch to light-theme";
 }

}
//När minnet rensas kommer följande tema visas:
else
{
    
    //Togglar inget eftersom det inte finns något att tema att togla till,
    localStorage.setItem("theme", "regular-theme");
    themeToggle.innerText ="Switch to light-theme";
}


themeToggle.addEventListener("click",()=>
{
   
   document.body.classList.toggle("light-theme");
   //ingen toggle för det andra temat än då det inte finns 

   if(document.body.classList.contains("light-theme"))
   {
     localStorage.setItem("theme","light-theme");
     themeToggle.innerText ="Switch to regular theme";
   }

   else
   {
    localStorage.setItem("theme","regular-theme");
    themeToggle.innerText ="Switch to light theme";

   }


});

