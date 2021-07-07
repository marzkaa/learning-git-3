const calculateStylePoints = (styleNotes) => {
    const maxNote = Math.max(...styleNotes);
    const minNote = Math.min(...styleNotes);
    const sum = styleNotes.reduce((acc, cur) => acc + cur);
  
    return sum - minNote - maxNote;
  };
  
  module.exports = calculateStylePoints;