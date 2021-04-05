module.exports.updateInventory = updateInventory;

function updateInventory(currentInventory, newInventory) {

    var inventory = {};

    //Write currentInventory to a object/dictionary
    currentInventory.forEach(item => {
        inventory[item[1]] = item[0];
    })

    //Get list of keys to iterate
    var keys = Object.keys(inventory);

    //Iterate new inventory items
    newInventory.forEach(item => {
        
        //Get index of new inventory items, against current inventory
        var index = keys.indexOf(item[1]);
        
        //Update existing inventory total
        if(index > -1) {
            inventory[keys[index]] = inventory[keys[index]] + item[0];
        }
        else {
            //Add new inventory item
            inventory[item[1]] = item[0];
        }
    })

    //Convert inventories object to array
    var entries = Object.entries(inventory)

    //Sort entries by inventory name alphabetically, and remap values
    return entries.sort(sortByItemName).map(x => {
        return [x[1], x[0]];
    })

    function sortByItemName(a,b) {
        var nameA = a[0].toUpperCase()
        var nameB = b[0].toUpperCase()

        return nameA < nameB ? -1 : nameA < nameB ? 1 : 0;
    }
}