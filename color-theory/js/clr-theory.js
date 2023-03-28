var section = document.querySelector("section");
var nav_elements = document.querySelectorAll(".nav-element");
var nav_el_arr = Array.prototype.slice.call(nav_elements, 0);
var switch_btn = document.querySelector("#switch")
var arr_of_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const starter = nav_el_arr[0];
//this adds the neccesary info mation as the page changes dynamically 
function addText (element, el_index = 0)
{

    line_clr = toggleDarkAndLightmod();
    const infomation_arr = [
        `
        <h3>hue</h3>
        <p>This Is The Dominant Color Family Of The Specific Color. White, Black And Grey Are Never Refferd To As Hues</p>
        <h3>tint</h3>
        <p>mixter of pure colors and only white</p>
        <h3>tone</h3>
        <p>mixture of pure colors and only grey. tone colors are complex, subtle and pleasing to the eyes.</p>
        <h3>shade</h3>
        <p>mixture of pure colors and black</p>
        <h3>temparature</h3>
        <h4>cool</h4>
        <p>A hue that has a blue added to it. freshness, winter stillness and calming are refered to as PASSIVE COLORS</p>
        <h4>warm</h4>
        <p>a hue that has a red ond or yellow added to it.</p> <p>mostly represents passion, cozziness, energy and motion.</p>
        <p>Are reffered to as ACTIVE COLORS becouse they take more focal attention but depending on how rich a color is, a passive color can be a main color</p>
            

        `,
        `
        <p>these are colors that work well together when used in a desing. These work best whenm one color is used as a dominant color and the rest as accent</p>
        <h3>dominant color</h3>
        <p>the main color of the project. this color is used more than the other colors</p>
        <h3>secondary colors</h3>
        <p>these are used with less brightness and saturation to help the main color shine and grab all the attention unless the situation requires for the secondary color to take more attention</p>
        `,
        `<img src="../asserts/color-hamonies/with-${line_clr}-lines/${nav_el_arr[2].innerHTML}.svg">
        <p>this is a color scheme where two colors from oposite sides of the color wheel are used. there can be one main color and the other can be a secondary color.</p>
        <p> different saturations and brightnesses of each hue(color) can be used to create a much more complex and pleasing design </p>
        `,
        `<img src="../asserts/color-hamonies/with-${line_clr}-lines/${nav_el_arr[3].innerHTML}.svg">
        <p>this is a color scheme where two colors from oposite sides of the color wheel are used but the adjustioned hues of the opposite hue are used instead of that hue . there can be one main color and the others can be a secondary colors.</p>
        <p> different saturations and brightnesses of each hue(color) can be used to create a much more complex and pleasing design </p>
        `,
        `<img src="../asserts/color-hamonies/with-${line_clr}-lines/${nav_el_arr[4].innerHTML}.svg">
        <p>this color scheem involves 3 colors evenly spaced across the color wheel. As always one color can be a main color and the rest will be used as secondary or accent colors</p>
        <p> different saturations and brightnesses of each hue(color) can be used to create a much more complex and pleasing design </p>
        `,
        `<img src="../asserts/color-hamonies/with-${line_clr}-lines/${nav_el_arr[5].innerHTML}.svg">
        <p>this color scheem has for hues that are found by creating a sort of x acroos the color wheel. there can be one main color and the other can be a secondary color.</p>
        <p> different saturations and brightnesses of each hue(color) can be used to create a much more complex and pleasing design </p>
        `,
        `<img src="../asserts/color-hamonies/with-${line_clr}-lines/${nav_el_arr[6].innerHTML}.svg">
        <p>the is just one hue paired with different brightnesses and saturation values</p>
        `,
        `<img src="../asserts/color-hamonies/with-${line_clr}-lines/${nav_el_arr[7].innerHTML}.svg">
        <p>this is made by choosing the 4 to 5 adjustioned hues and using those. Alsways to remember to make one the main color and use different saturation and brightness values for a more balanced design</p>

        `,
        `<img src="../asserts/color-hamonies/with-${line_clr}-lines/${nav_el_arr[8].innerHTML}.svg">
        <p>these are all the colors from red through yellow</p>
        `,
        `<img src="../asserts/color-hamonies/with-${line_clr}-lines/${nav_el_arr[9].innerHTML}.svg">
        <p>these are all the colors from purple through green</p>
        `
    ];
    

    if (element.classList.contains("active"))
    {
        section.innerHTML = `
            <div class="text-container">
            <h1>${element.innerHTML}</h1>

            ${infomation_arr[el_index]}

            </div>
                `;
    }
} 
//changes between dark and light mode 
function toggleDarkAndLightmod ()
{
    let line_clr;
    if (document.body.classList.contains("dark-mode"))
    {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
        
        return "white";

    } else
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        
        return "black";
    };
};
        
addText(starter,0);//to make sure there is text as soon as the page has loaded 
        
//toggling the active class       
for (let index = 0; index < nav_el_arr.length; index++) {
    const element = nav_el_arr[index];
            
    element.addEventListener("click",()=>{       
        for (let i = 0; i <= arr_of_numbers.length - 1; i++)
        {
                    
            if(i != index){
                nav_el_arr[i].classList.remove("active")
            }else{
                element.classList.add("active");
            }
                
            addText(element,index); 
        }
               
    })
};

//toggling the dark-mode  class
switch_btn.addEventListener('click', () =>
{
    var mode_teller = document.querySelector(".switch-label");

    if (document.body.classList.contains("dark-mode"))
    {
        mode_teller.innerHTML = "light-mode";
        document.body.classList.remove("dark-mode");
    } else
    {
        mode_teller.innerHTML = "dark-mode";
        document.body.classList.add("dark-mode");
    }
    toggleDarkAndLightmod();

})