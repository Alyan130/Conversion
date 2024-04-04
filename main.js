import inquirer from "inquirer";
console.log("Conversions:");
let conversion = await inquirer.prompt([
    {
        message: "Select Conversion from the menu",
        type: "list",
        name: "select",
        choices: ["Temperature", "Currency", "Weight", "Time"],
    },
]);
if (conversion.select == "Temperature") {
    let temp = await inquirer.prompt([
        {
            message: "Select type of conversion :",
            type: "list",
            name: "cnv1",
            choices: ["Centigrade to Fahrenheit", "Fahrenheit to Centigrade"],
        },
        {
            message: "Enter the value to Convert",
            type: "number",
            name: "value",
        },
    ]);
    switch (temp.cnv1) {
        case "Centigrade to Fahrenheit":
            let f = (9 / 5 * temp.value) + 32;
            console.log(`Temperature in fahrenheit : ${f}`);
            break;
        case "Fahrenheit to Centigrade":
            let c = (temp.value - 32) * 5 / 9;
            console.log(`Temperature in  celsuis : ${c}`);
    }
}
else if (conversion.select == "Weight") {
    let weight = await inquirer.prompt([
        {
            message: "Select type of conversion :",
            type: "list",
            name: "cnv2",
            choices: ["Kilgoram to Gram", "Gram to Kilogram", "Kilogram to Pound", "Pound to Kilogram"],
        },
        {
            message: "Enter the value to Convert",
            type: "number",
            name: "value",
        },
    ]);
    switch (weight.cnv2) {
        case "Kilgoram to Gram":
            let g = weight.value * 1000;
            console.log(`Weight in gram : ${g}`);
            break;
        case "Gram to Kilogram":
            let k = weight.value / 1000;
            console.log(`Weight in  kilgoram : ${k}`);
            break;
        case "Kilogram to Pound":
            let p = weight.value * 2.2;
            console.log(`Weight in  pounds: ${p}`);
            break;
        case "Pound to Kilogram":
            let k1 = weight.value / 2.2;
            console.log(`Weight in  kilgorams: ${k1}`);
            break;
    }
}
else if (conversion.select == "Currency") {
    let currency = await inquirer.prompt([
        {
            message: "Select type of converison",
            type: "list",
            name: "cnv3",
            choices: ["Pkr to USD", "USD to Pkr", "Pkr to Pound", "Pound to Pkr"],
        },
        {
            message: "Enter the value to Convert",
            type: "number",
            name: "value",
        },
    ]);
    switch (currency.cnv3) {
        case "Pkr to USD":
            let USD = currency.value / 277.86;
            console.log(`Amount in USD: ${USD}`);
            break;
        case "USD to Pkr":
            let pkr = currency.value * 277.86;
            console.log(`Amount in Pkr : ${pkr}`);
            break;
        case "Pkr to Pound":
            let pd = currency.value / 0.0028;
            console.log(`Amount in Pound : ${pd}`);
            break;
        case "Pound to Pkr":
            let pkr1 = currency.value * 0.0028;
            console.log(`Amount in Pkr : ${pkr1}`);
            break;
    }
}
else {
    let time = await inquirer.prompt([
        {
            message: "Select type of converison",
            type: "list",
            name: "cnv4",
            choices: ["Hours to Minutes", "Minutes to hours"],
        },
        {
            message: "Enter the value to Convert",
            type: "number",
            name: "value",
        },
    ]);
    switch (time.cnv4) {
        case "Hours to Minutes":
            let min = time.value * 60;
            console.log(`Time in Minutes : ${min}`);
            break;
        case "Minutes to hours":
            let h = time.value / 60;
            console.log(`Time in Hours : ${h}`);
            break;
    }
}
