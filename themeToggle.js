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
   themeToggle.innerText ="Switch to light-theme";
 }
 else
 {
    themeToggle.innerText ="Switch to dark-theme";
 }

}
//När minnet rensas kommer följande tema visas:
else
{
    
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", "light-theme");
    themeToggle.innerText ="Switch to dark-theme";
}


themeToggle.addEventListener("click",()=>
{
   
   document.body.classList.toggle("light-theme");
   document.body.classList.toggle("dark-theme");

   if(document.body.classList.contains("light-theme"))
   {
     localStorage.setItem("theme","light-theme");
     themeToggle.innerText ="Switch to dark theme";
   }
   
   else
   {
    localStorage.setItem("theme","dark-theme");
    themeToggle.innerText ="Switch to light theme";

   }
   
});

