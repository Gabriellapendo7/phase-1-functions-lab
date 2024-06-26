// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blockNumber) {
    const headquartersBlock = 42;
    const feetPerBlock = 264;
    let distance = Math.abs(headquartersBlock - blockNumber) * feetPerBlock;
    return distance;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    const feetPerBlock = 264;
    return Math.abs(endingBlock - startingBlock) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let price = 0;
    if (distance <= 400) {
        price = 0;
    } else if (distance > 400 && distance <= 2000) {
        price = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        price = 25;
    } else {
        return 'cannot travel that far';
    }
    return price;

}