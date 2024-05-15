// Open up a text editor of your choice and complete the following Javascript exercises.

// ### Exercise #2

// #### Part 1

// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan.
// Create an array that has these three names in order.

const arrName = ['Sofia', 'David', 'Juan'];
console.log(arrName);

// #### Part 2

// Two more people get added to the back of the line - Sara and Augustin.
// The first person in line is called to the teller.
// What does the queue look like?

arrName.push('Sara', 'Augustin');
arrName.shift();
console.log(arrName);

// #### Part 3

// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line.
// What does the queue look like? 

arrName.splice(1, 0, 'Renata');
arrName.push('Elena');
console.log(arrName);
