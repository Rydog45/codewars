// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name){
    const arr = name.split(' ');
    return arr[0].charAt(0) + '.' + arr[1].charAt(0)
}