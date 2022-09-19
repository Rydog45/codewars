// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array

function warnTheSheep(queue) {
    queue.reverse()
    let wolfPosition = queue.indexOf('wolf') 
    return   !wolfPosition ?"Pls go away and stop eating my sheep" :  `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!` 
    }