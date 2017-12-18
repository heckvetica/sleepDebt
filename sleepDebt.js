// hours per day of sleep.
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 9.5;
      break;
    case 'tuesday':
      return 6.5;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 7.5;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8.5;
      break;
    case 'sunday':
      return 9;
    default:
      return 'invalid day';
  }
}

//let's add the hours
const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

// calculation for ideal sleep amount
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}


// Calculation for sleep
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    return 'You have gotten the ideal amount of sleep!';
  } else if (actualSleepHours > idealSleepHours) {
    return `You have ${actualSleepHours - idealSleepHours} hours more than you should.  Try to wake up earlier.`;
  } else {
    return `You have ${idealSleepHours - actualSleepHours} hours less than ideal.  Get some rest.`;
  }
}

console.log(calculateSleepDebt());
