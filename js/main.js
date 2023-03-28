var userSelectedColor = document.querySelector('.your-chosen-color');
var colorPicker = document.getElementById('color-picker');
var colorPalletContainer = document.querySelector('.color-palletes');
var header = document.querySelector('header');
var headerParagraph = document.querySelector('header p');
var hexColor = document.getElementById('color-hex');
var heroSection = document.querySelector(".hero");



function hexToRgb (color)
{
    let hex = color[0] == '#' ? color.slice(1) : color;
    let c;


    if (hex.length !== 6)
    {
        hex = ((() =>
        {
            const result = [];
            for (c of Array.from(hex))
            {
                result.push(`${c}${c}`);
            }
            return result;
        })()).join('');
        

    }

    
    const colorStr = hex.match(/#?(.{2})(.{2})(.{2})/).slice(1);
    const rgb = colorStr.map(col => parseInt(col, 16));
    rgb.push(1);
    return rgb;
}

function rgbToHsl(rgb)
{
    const r = rgb[0] / 255;    
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    const add = max + min;

    const hue =
        min === max ?
        0
        : r === max ?
            (((60 * (g - b)) / diff) + 360) % 360
        : g === max ?
            ((60 * (b - r)) / diff) + 120
        :
            ((60 * (r - g)) / diff) + 240;
    
    const lum = 0.5 * add;

    const sat =
        lum === 0 ?
            0
            : lum === 1 ?
                1
                : lum <= 0.5 ?
                    diff / add
                    :
                    diff / (2 - add);
    
    const h = Math.round(hue);
    const s = Math.round(sat * 100);
    const l = Math.round(lum * 100);
    const a = rgb[3] || 1;

    return [h, s, l, a];
};


// from text box 

hexColor.addEventListener('change', () =>
{
    var theee_clr = hexColor.value;
    var chosen_clr = rgbToHsl(hexToRgb(theee_clr));

    var chosen_clr_hue = chosen_clr[0];
    let brightness_value = brightness_fixer(chosen_clr[2]);


    function brightness_fixer(brightness)
    {
        let thee_brightnes = brightness;
        
        if (thee_brightnes >= 75)
        {
            thee_brightnes -= 40;
        } else if (thee_brightnes <= 25)
        {
            thee_brightnes += 40;
        }

        return thee_brightnes;
    }

    heroSection.style.display = "none";
    userSelectedColor.innerHTML = "Your color : " + hexColor.value;
    
    complement = color_pallet_l(complementary(chosen_clr,chosen_clr_hue,brightness_value));
    split_com = color_pallet_l(split_complementary(chosen_clr, chosen_clr_hue, brightness_value));
    triad = color_pallet_l(triadic(chosen_clr, chosen_clr_hue, brightness_value));
    tetra = color_pallet_l(tetradic(chosen_clr, chosen_clr_hue, brightness_value));
    mono = color_pallet_l(monochromatic(chosen_clr, chosen_clr_hue, brightness_value));
    ano = color_pallet_l(anologous(chosen_clr, chosen_clr_hue, brightness_value));
    cul = color_pallet_l(cool(chosen_clr, chosen_clr_hue, brightness_value));

    // footer = document.querySelector("footer");
    // footer.classList.remove("bottom");

    colorPicker.value = hexColor.value;
    colorPalletContainer.innerHTML = complement;
    colorPalletContainer.innerHTML += split_com;
    colorPalletContainer.innerHTML += triad;
    colorPalletContainer.innerHTML += tetra;
    colorPalletContainer.innerHTML += mono;
    colorPalletContainer.innerHTML += ano;
    colorPalletContainer.innerHTML += cul;
    

});


// from color picker 

colorPicker.addEventListener('change', () =>
{
    var theee_clr = colorPicker.value;
    var chosen_clr = rgbToHsl(hexToRgb(theee_clr));

     var chosen_clr_hue = chosen_clr[0];
    let brightness_value = brightness_fixer(chosen_clr[2]);


    function brightness_fixer(brightness)
    {
        let thee_brightnes = brightness;
        
        if (thee_brightnes >= 75)
        {
            thee_brightnes -= 40;
        } else if (thee_brightnes <= 25)
        {
            thee_brightnes += 40;
        }

        return thee_brightnes;
    }

    heroSection.style.display = "none";

    userSelectedColor.innerHTML = "Your color : " + colorPicker.value;
    
    complement = color_pallet_l(complementary(chosen_clr,chosen_clr_hue,brightness_value));
    split_com = color_pallet_l(split_complementary(chosen_clr, chosen_clr_hue, brightness_value));
    triad = color_pallet_l(triadic(chosen_clr, chosen_clr_hue, brightness_value));
    tetra = color_pallet_l(tetradic(chosen_clr, chosen_clr_hue, brightness_value));
    mono = color_pallet_l(monochromatic(chosen_clr, chosen_clr_hue, brightness_value));
    ano = color_pallet_l(anologous(chosen_clr, chosen_clr_hue, brightness_value));
    cul = color_pallet_l(cool(chosen_clr, chosen_clr_hue, brightness_value));

    footer = document.querySelector("footer");
    footer.classList.remove("bottom");

    hexColor.value = colorPicker.value;
    colorPalletContainer.innerHTML = complement;
    colorPalletContainer.innerHTML += split_com;
    colorPalletContainer.innerHTML += triad;
    colorPalletContainer.innerHTML += tetra;
    colorPalletContainer.innerHTML += mono;
    colorPalletContainer.innerHTML += ano;
    colorPalletContainer.innerHTML += cul;
    

});

function complementary (chosen_clr,chosen_clr_hue,brightness_value)
{
    const sch_name = "complementary"; 
    const inclination = 180;
    const new_hue = chosen_clr_hue - inclination;
    
    var main_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1]}%,${chosen_clr[2]}%,${chosen_clr[3]})`;
    var sec_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1]}%,${brightness_value +20}%,${chosen_clr[3]})`;
    var forth_clr = `hsl(${new_hue}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`;
    var third_clr = `hsl(${new_hue}deg,${chosen_clr[1]}%,${brightness_value - 10}%,${chosen_clr[3]})`;
    var fifth_clr = `hsl(${new_hue}deg,${chosen_clr[1]-30}%,${brightness_value - 10}%,${chosen_clr[3]})`;
    
    return [sch_name,main_clr, sec_clr, third_clr, forth_clr,fifth_clr];
}

function split_complementary (chosen_clr, chosen_clr_hue, brightness_value)
{
    const inclination = 150;
    const sch_name = "split_complementary";

    var main_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1]}%,${chosen_clr[2]}%,${chosen_clr[3]})`;
    var sec_clr = `hsl(${chosen_clr_hue - inclination}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`;
    var third_clr = `hsl(${chosen_clr_hue + inclination}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`;
    var forth_clr = `hsl(${chosen_clr_hue + inclination}deg,${chosen_clr[1]}%,${brightness_value + 20}%,${chosen_clr[3]})`;
    var fifth_clr = `hsl(${chosen_clr_hue + inclination}deg,${chosen_clr[1]}%,${brightness_value - 40}%,${chosen_clr[3]})`;

    return [sch_name,main_clr, sec_clr, third_clr, forth_clr,fifth_clr];
}

function triadic (chosen_clr,chosen_clr_hue,brightness_value)
{
    var inclination = 120;
    const sch_name = "triadic";

    var main_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1]}%,${chosen_clr[2]}%,${chosen_clr[3]})`;
    var fifth_clr =`hsl(${chosen_clr_hue -inclination}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`;
    var third_clr =`hsl(${chosen_clr_hue + inclination}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`;
    var forth_clr = `hsl(${chosen_clr_hue + inclination}deg,${chosen_clr[1]}%,${brightness_value - 20}%,${chosen_clr[3]})`;
    var sec_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1] - 30}%,${chosen_clr[2]}%,${chosen_clr[3]})`;
    
    return [sch_name,main_clr, sec_clr, third_clr, forth_clr,fifth_clr];

}


function tetradic (chosen_clr,chosen_clr_hue,brightness_value)
{
    const sch_name = "tetradic";
    const inclination = 25;
    var main_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1]}%,${chosen_clr[2]}%,${chosen_clr[3]})`;
    var sec_clr = `hsl(${chosen_clr_hue + inclination}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`;
    var third_clr = `hsl(${chosen_clr_hue + (180 + inclination)}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`;
    var forth_clr = `hsl(${chosen_clr_hue + 180}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`;
    var fifth_clr = `hsl(${chosen_clr_hue + 180}deg,${chosen_clr[1] - 34}%,${brightness_value}%,${chosen_clr[3]})`;

    return [sch_name,main_clr, sec_clr, third_clr, forth_clr,fifth_clr];
    
}

function monochromatic (chosen_clr,chosen_clr_hue,brightness_value)
{
    
    var sch_name = "monochromatic";
    var main_clr =`hsl(${chosen_clr_hue}deg,${chosen_clr[1]}%,${chosen_clr[2]}%,${chosen_clr[3]})`;
    var sec_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1] - 20}%,${brightness_value}%,${chosen_clr[3]})`;
    var third_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1] - 40}%,${brightness_value - 20}%,${chosen_clr[3]})`;
    var forth_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1] - 60}%,${brightness_value - 40}%,${chosen_clr[3]})`;
    var fifth_clr = `hsl(${chosen_clr_hue}deg,${chosen_clr[1] + 60}%,${brightness_value -20}%,${chosen_clr[3]})`;


    return [sch_name,main_clr, sec_clr, third_clr, forth_clr,fifth_clr];
}

function anologous (chosen_clr, chosen_clr_hue, brightness_value)
{
    var sch_name = "anologous";
    var main_clr =`hsl(${chosen_clr_hue}deg,${chosen_clr[1]}%,${chosen_clr[2]}%,${chosen_clr[3]})`
    var sec_clr =`hsl(${chosen_clr_hue +30}deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`
    var third_clr =`hsl(${chosen_clr_hue+60}deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`
    var forth_clr =`hsl(${chosen_clr_hue-30}deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`
    var fifth_clr =`hsl(${chosen_clr_hue-60}deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`


    return [sch_name,main_clr, sec_clr, third_clr, forth_clr,fifth_clr];
}

function cool (chosen_clr,chosen_clr_hue,brightness_value)
{
    //purple through green
    const hue = chosen_clr_hue;
    
    if (hue <= 300 && hue >= 85)
    {    
        var scheem_name = "cool";
        var main_clr = `hsl(${chosen_clr_hue }deg,${chosen_clr[1]}%,${chosen_clr[2]}%,${chosen_clr[3]})`
        var sec_clr =`hsl(300deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})`
        var third_clr =`hsl(255deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`
        var forth_clr =`hsl(210deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`      
        var fifth_clr =`hsl(175deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`
    } 
    if(hue <= 84 ||hue >= 310 )
    {
        var scheem_name = "warm";
        var main_clr = `hsl(${chosen_clr_hue }deg,${chosen_clr[1]}%,${chosen_clr[2]}%,${chosen_clr[3]})`
        var sec_clr =`hsl(350deg,${chosen_clr[1]}%,${brightness_value}%,${chosen_clr[3]})` 
        var third_clr =`hsl(10deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`
        var forth_clr =`hsl(45deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`
        var fifth_clr =`hsl(67deg,${chosen_clr[1]}%,${brightness_value }%,${chosen_clr[3]})`
    }
    
    
    return [scheem_name,main_clr, sec_clr, third_clr, forth_clr,fifth_clr];

}


function color_pallet_l (arr)
{
    // class vlo changed to color-show
    // var { name, main_clr, sec_clr, third_clr, forth_clr, fifth_clr } = arr;
    pallete_name = arr[0];

    var color_pallet = `
        <div class='color-pall'>
            <h3 class="head-for-${arr[0]}">${pallete_name}</h3>

            <div class="color-show">
                <div class='clr-pallet'>
                    <div style="background-color: ${arr[1]}"></div>
                    <div style="background-color: ${arr[2]}"></div>
                    <div style="background-color: ${arr[3]}"></div>
                    <div style="background-color: ${arr[4]}"></div>
                    <div style="background-color: ${arr[5]}"></div>
                </div>
       

            </div>
        </div>`;
        return color_pallet;
    
    }