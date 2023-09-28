function isValidLinkedInProfileURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    return regex.test(url);
  }
  const validURL = "https://www.linkedin.com/in/johndoe123";
  const invalidURL1 = "https://www.linkedin.com/in/username-with-dashes-123";
  const invalidURL2 = "https://www.linkedin.com/in/short";
  const invalidURL3 = "https://www.linkedin.com/not-in-format";
  
  console.log(`Valid URL: ${isValidLinkedInProfileURL(validURL)}`);
  console.log(`Invalid URL 1: ${isValidLinkedInProfileURL(invalidURL1)}`);
  console.log(`Invalid URL 2: ${isValidLinkedInProfileURL(invalidURL2)}`);
  console.log(`Invalid URL 3: ${isValidLinkedInProfileURL(invalidURL3)}`);
  