function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;
    const progressInterval = 1000; 
  
    const countdownInterval = setInterval(() => {
      console.log(`Time remaining: ${remainingTime} seconds`);
      remainingTime--;
  
      if (remainingTime < 0) {
        clearInterval(countdownInterval);
        const randomNum = Math.floor(Math.random() * 100); 
        console.log(`Random Number Generated: ${randomNum}`);
      }
    }, progressInterval);
  
    setTimeout(() => {
      clearInterval(countdownInterval);
      const randomNum = Math.floor(Math.random() * 100); 
      console.log(`Random Number Generated: ${randomNum}`);
    }, delayInSeconds * 1000); 
  }
  
  const delayInSeconds = 3; 
  generateRandomNumberWithDelay(delayInSeconds);
  