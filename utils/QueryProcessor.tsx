export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "David M. and Adriana P."
    );
  }
  if (query.toLowerCase().includes("plus")) {
    const regex = /(\d+)\s*\plus\s*(\d+)/;
    const match = query.match(regex);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const sum = x + y;
      return `${sum}`;
    }
  }
  if (query.toLowerCase().includes("minus")) {
    const regex = /(\d+)\s*\minus\s*(\d+)/;
    const match = query.match(regex);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const sum = x - y;
      return `${sum}`;
    }
  }
  if (query.toLowerCase().includes("multiplied")) {
    const regex = /(\d+)\s*\multiplied\sby\s*(\d+)/;
    const match = query.match(regex);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const sum = x * y;
      return `${sum}`;
    }
  }
  if (query.toLowerCase().includes("largest")) {
    const regex = /which of the following numbers is the largest: (\d+), (\d+), (\d+)/; // regular expression to match "which of the following numbers is the largest: x, y, z"
    const match = query.toLowerCase().match(regex);
    
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const z = parseInt(match[3]);
      const largest = Math.max(x, y, z);
      return `${largest}`;
    }
  }
  if (query.toLowerCase().includes("primes")) {
    const regex = /Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/; // regular expression to match "Which of the following numbers are primes: x, y, z, a, b?"
    const match = query.toLowerCase().match(regex);
    
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const z = parseInt(match[3]);
      const a = parseInt(match[4]);
      const b = parseInt(match[5]);
  
      const primes = [x, y, z, a, b].filter((num) => {
        if (num < 2) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      });
      
      return `${primes.join(", ")}`;
    }
  }
  return "";
}
