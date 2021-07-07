const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let hillNormal = (distance - kPoint) * 2;
    let hillBig = (distance - kPoint) * 1.8;
    let hillMammoth = (distance - kPoint) * 1.2;
  
    switch (hillSize) {
      case 'normal':
        return 60 + hillNormal;
      case 'big':
        return 60 + hillBig;
      case 'mammoth':
        return 120 + hillMammoth;
      default:
        return 'Only three hills available';
    };
  };
  
  module.exports = calculateDistancePoints;