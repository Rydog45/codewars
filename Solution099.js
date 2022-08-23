// Create a function that takes in a list of button inputs and returns the final state.

function likeOrDislike(buttons) {
    let bape = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === bape) {
        bape = 'Nothing'
      } else {
        bape = buttons[i]
      }
    }
  
    return bape
  }