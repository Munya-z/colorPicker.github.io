function split_complementary (chosen_clr, chosen_clr_hue, brightness_value)
{
    const inclination = 150;
    const sch_name = "split complementary";

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
