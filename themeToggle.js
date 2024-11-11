//Hämtar button med dess id och sparar det på variabeln themetoggle 
let themeToggle = document.getElementById("theme-switch");

//Skapar en variabel som kommer hämta temat via nyckeln theme i localstorage 
let savedTheme = localStorage.getItem("theme");

if(savedTheme)
{
    //lägger till det sparade temat på body-elementet
    document.body.classList.toggle(savedTheme);
   
    //Uppdaterar texten på knapen beroende på vilket tema som sparats
 if(savedTheme === "dark-theme")
 {
   themeToggle.innerHTML ='<img src="imgs/sun-icon.svg" alt="sun-icon" class="icon" id="sunIcon">';
 }
 else
 {
    themeToggle.innerHTML = '<img src="imgs/moon-icon.svg" alt="moon-icon" class="icon" id="moonIcon">';
 }

}
//När minnet rensas kommer följande tema visas:
else
{
    
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", "light-theme");
    themeToggle.innerHTML = '<img src="imgs/moon-icon.svg" alt="moon-icon" class="icon" id="moonIcon">';
}


themeToggle.addEventListener("click",()=>
{
   
   document.body.classList.toggle("light-theme");
   document.body.classList.toggle("dark-theme");

   if(document.body.classList.contains("light-theme"))
   {
     localStorage.setItem("theme","light-theme");
     themeToggle.innerHTML = '<img src="imgs/moon-icon.svg" alt="moon-icon" class="icon" id="moonIcon">';
   }
   
   else
   {
    localStorage.setItem("theme","dark-theme");
    themeToggle.innerHTML ='<img src="imgs/sun-icon.svg" alt="sun-icon" class="icon" id="sunIcon">';

   }
   
});

