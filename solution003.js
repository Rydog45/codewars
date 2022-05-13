//Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like 

function valAndUnits(s) {

        const [, val, units] = s.match(/^(-?\d+(?:\.\d+)?)\s*(\S*)$/)
        return {val: parseFloat(val), units}
}