// small program that looks up your zipcode in New York city

let temp = "You live in Borough: "
let zipcode = 11201



if (zipcode >= 10001 && zipcode <= 10292) {
    console.log(temp.replace("Borough", "Manhattan").toUpperCase());
} else if (zipcode >= 10301 && zipcode <= 10314) {
    console.log(temp.replace("Borough", "Staten Island").toUpperCase());
} else if (zipcode >= 10451 && zipcode <= 10499) {
    console.log(temp.replace("Borough", "Bronx").toUpperCase());
} else if (zipcode >= 11101 && zipcode <= 11120 || zipcode >= 11351 && zipcode <= 11499) {
    console.log(temp.replace("Borough", "Queens").toUpperCase());
} else if (zipcode >= 11201 && zipcode <= 11256) {
    console.log(temp.replace("Borough", "Brooklyn").toUpperCase());
}