let counter = 0
function increment(){
    counter++;
    document.getElementById('counter').innerHTML = counter
}
function decrement(){
    if (counter>0) {
        counter--;

    } else {
        counter=0;
    }
    document.getElementById('counter').innerHTML = counter
}
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter
}
