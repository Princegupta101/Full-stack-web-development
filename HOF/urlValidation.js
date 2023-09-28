function isURLValid(url) {
    const urlRegex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
  
    return urlRegex.test(url);
  }

  const validURL = "https://www.example.com";
  const invalidURL = "ftp://www.example.com";
  
  if (isURLValid(validURL)) {
    console.log(`${validURL} is a valid URL.`);
  } else {
    console.log(`${validURL} is not a valid URL.`);
  }
  
  if (isURLValid(invalidURL)) {
    console.log(`${invalidURL} is a valid URL.`);
  } else {
    console.log(`${invalidURL} is not a valid URL.`);
  }
  