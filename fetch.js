//getData()
const reactionArray = new Array()
//console.log(reactionArray)
let nodesFormat = "";


async function getData()
{
    // loading data from a local file
    const response = await fetch('test.csv');
    const data = await response.text();
    return data;
}

async function processData()
{
    const data = await getData();
    // cleaning and parsing the data
    const table = data.split('\n').slice(1,-1); //separate the lines and remove the header
    table.forEach(element => {
        const row = element.split(','); // separate the elements of each lines
        const cidsreactant = row[14]; // isolating the reactants
        const cidsproduct = row[15]; // isolation the products
        //console.log("Reactants:",cidsreactant,"Product:",cidsproduct);

        const reactArray = new Array();
        const reactant = cidsreactant.split('|'); //separating the reactants
        reactant.forEach(function(obj){
            reactArray.push(parseInt(obj));
        })
        //console.log(reactant); 

        const productArray = new Array();
        const product = new Array(cidsproduct.split('|')); // sepatating the products
        product.forEach(function(obj){
            productArray.push(parseInt(obj));
        })
        //console.log(product)

        const oneReactionArray = new Array(reactArray,productArray);
        reactionArray.push(oneReactionArray);
        return reactionArray;
    });

    //console.log(reactionArray);
    return reactionArray;
}

// FORMATING DATA
processData().then(() => {
    //console.log(reactionArray)
    for (let i = 0; i < reactionArray.length; i++) {
        for (let j = 0; j < reactionArray[i].length; j++) {
            if ((j%2)==0)
            {
                for (let k = 0; k < reactionArray[i][j].length; k++) 
                {
                    nodesFormat = nodesFormat + "{ data: { id: 'reactant: " + reactionArray[i][j][k] + "' } }, \n";
                }
            }
            else
            {
                for (let k = 0; k < reactionArray[i][j].length; k++) 
                {
                    nodesFormat = nodesFormat + "{ data: { id: 'product: " + reactionArray[i][j][k] + "' } }, \n";
                }
            }
        }
    }
    console.log(reactantData);
    return reactantData;
});
