function forLoop(array){
    for (var i=0; i < 25; i++){
        array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
    }
    return array
}

function whileLoop(n){
    var i = n;
    while (i > 0){
    console.log(i)
    i--;
    }
    return 'done';
}

function doWhileLoop(array){
    do{
        array.shift();
    } while(array.length > 0);
    return array;
            
}

