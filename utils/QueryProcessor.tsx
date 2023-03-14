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
  return "";
}
