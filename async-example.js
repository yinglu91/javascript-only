// async - data fetch

// Callback Function
const fetchData = (userId, callback) => {
  setTimeout(()=> {
    const fakeData = {
      id: userId,
      name: "George"
    };
    callback(fakeData);
  }, 300);
};

const cb = data => {
  console.log(`Here's your data:`, data);
}

fetchData(5, cb);

// Promises
// new Promise(() => {}); -- definition
const fetchData2 = userId => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if (Math.random() < 0.2) {
        reject("Fetch failed!")
      }
      const fakeData = {
        id: userId,
        name: "George"
      };
      resolve(fakeData);
    }, 300);
  });
}

// call fetchData2

fetchData2(10)
.then(user => {
  console.log(`In fetchData2, here's your data: `, user);
})
.catch(err => {
  console.error(`In fetchData2, err: `, err);
})

Promise.all([fetchData2(7), fetchData2(11)])
.then(users => {
  console.log(`In all, here's your data: `, users);
})
.catch(err => {
  console.error(`In all, err: `, err);
})

// Async-Await
const fetchUser = async userId => {
  try {
   const user = await fetchData2(userId);
   console.log(`In Async-Await, here's your data: `, user);
  } catch(err) {
   console.error(`In Async-Await, err: `, err);
  }
}

fetchUser(100);

/*
Callbacks, Promises, and Async-Await in JavaScript
https://www.youtube.com/watch?v=QDsyvBzfiZo
Sep 8, 2019

$ node async-example.js
Here's your data: { id: 5, name: 'George' }
In fetchData2, here's your data:  { id: 10, name: 'George' }
In all, here's your data:  [ { id: 7, name: 'George' }, { id: 11, name: 'George' } ]
In Async-Await, here's your data:  { id: 100, name: 'George' }

$ node async-example.js
Here's your data: { id: 5, name: 'George' }
In fetchData2, err:  Fetch failed!
In Async-Await, here's your data:  { id: 100, name: 'George' }
In all, err:  Fetch failed!

$ node async-example.js
Here's your data: { id: 5, name: 'George' }
In fetchData2, err:  Fetch failed!
In Async-Await, err:  Fetch failed!
In all, err:  Fetch failed!
*/