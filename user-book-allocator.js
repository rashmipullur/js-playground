// This function takes the number of users and the number of books as input parameters and returns an array where each element represents the distribution of books to a user.

function distributeBooksToUsers(numUsers, numBooks) {
  if (numBooks < numUsers) {
    return "Not enough books to distribute to all users.";
  }

  const result = [];
  let booksPerUser = Math.floor(numBooks / numUsers);
  let remainingBooks = numBooks % numUsers;

  for (let i = 1; i <= numUsers; i++) {
    if (i <= remainingBooks) {
      result.push(`${i}:${booksPerUser + 1}`);
    } else {
      result.push(`${i}:${booksPerUser}`);
    }
  }

  return result;
}

// Example usage:
console.log(distributeBooksToUsers(5, 5));
console.log(distributeBooksToUsers(5, 6));

