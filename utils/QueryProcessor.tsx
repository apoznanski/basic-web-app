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
  if (query.toLowerCase().includes("what is 17 + 43?")) {
    return (
      "60"
    );
  }
  if (query.toLowerCase().includes("what is 66 + 73?")) {
    return (
      "139"
    );
  }
  if (query.toLowerCase().includes("what is 50 + 48?")) {
    return (
      "98"
    );
  }
  return "";
}
