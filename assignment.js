// feetToMile
function feetToMile(feet){
    if (feet<0){
        return "Distance's value can never be negative.Please check again."
    }
    else{
        var mile = feet/5280 ;
        return mile;
    }
}


// woodCalculator
function woodCalculator(chair,table,bed){
    if (chair<0){
        if (table<0){
            if (bed<0){
                return "The values for all three items are negative which is not possible.Please check again.";
            }
            else{
                var woodForBed = bed*5;
                return "The values for chair and table are negative.Pleasse check again.Wood needed to build bed:"+woodForBed;
            }
        }
        else{
            var woodForBed = bed*5;
            var woodForTable = table*3;
            var woodForTableAndBed = woodForBed+woodForTable;
            return "The values for chair is negative.Pleasse check again.Wood needed to build bed and table:"+woodForTableAndBed;
        }
    }
    else{
        var woodForBed = bed*5;
        var woodForTable = table*3;
        var woodForChair = chair*1;
        var totalWood = woodForChair+woodForTable+woodForBed;
        return totalWood;
    }
}


// brickCalculator
function brickCalculator(totalFloor){
    if (totalFloor<=0){
        return "The number of floor of a building can never be less or equal zero.Please check again.";
    }
    else{
        if (totalFloor>20){
            var brickForTenFeet = (totalFloor-20)*10*1000;
            var brickForBuilding = brickForTenFeet+(12*10*1000)+(15*10*1000);
        }
        if (totalFloor<=20 && totalFloor>10){
            var brickForTwelveFeet = (totalFloor-10)*12*1000;
            brickForBuilding = brickForTwelveFeet+(15*10*1000);
        }
        if (totalFloor<=10){
            brickForBuilding = totalFloor*15*1000;
        }
        return brickForBuilding;
    }
}


//tinyFriend
function tinyFriend(friendNameList){
    if (friendNameList.length == 0){
        return "Your friend list is empty.Please check again.";
    }
    else{
        var tiniestFriend = friendNameList[0].length;
        var tiniestFriendName = friendNameList[0];
        for (var i=1;i<=friendNameList.length-1;i++){
            var currentFriendName = friendNameList[i];
            var currentFriendNameLength = currentFriendName.length;
            if (tiniestFriend>currentFriendNameLength){
                tiniestFriend = currentFriendNameLength;
                tiniestFriendName = currentFriendName;
            }
        }
        return tiniestFriendName;
    }
}

