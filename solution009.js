// Trigrams are a special case of the n-gram, where n is 3. One trigram is a continous sequence of 3 chars in phrase. Wikipedia

// return all trigrams for the given phrase
// replace spaces with underscore (_)
// return an empty string for phrases shorter than 3

function trigrams( phrase ) {
    if(phrase.length < 3) return '';
    let result = '';
    let workStr = phrase.replace(/ /g, '_');
    for(let i = 0; i < phrase.length; i++) {
      result += workStr.slice(0, 3) + ' ';
      workStr = workStr.slice(1); 
      if(workStr.length < 3) break;
      
    }
    return result.trim();
  }