// A coder friend of yours gave you some queries which -he promises- will return interesting results. But some of the queries contain outdated filters which don't work anymore. Hence, you decide to code a function named is_valid (isValid for js) which takes in a search query of type str and validates that every filter within the query is up-to-date. If only one filter is invalid, then the entire query is invalid.

const isValid = query => {
    return (query.match(/[\w-]+(?=:)/g) || []).every(x => FILTERS.includes(x));
  }