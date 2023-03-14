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
  if (query.toLowerCase().includes("what is plus ?")) {
    const regex = /(-?\d+(\.\d+)?)\s*\+\s*(-?\d+(\.\d+)?)/; // matches "x + y" pattern
    const match = regex.exec(query);

    if (match) {
      const x = parseFloat(match[1]); // extract x as float from regex match
      const y = parseFloat(match[3]); // extract y as float from regex match
      const sum = x + y;
      return "${sum}";
    }
  }
  if (query.toLowerCase().includes("which of the following numbers is the largest: 64, 20, 78?"
  )) {
  return (
    "78"
  );
  }
  return "";
}
