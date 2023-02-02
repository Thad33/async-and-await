const data = [  "Harry", "Ross", "Bruce", "Cook", "Carolyn",  "Morgan", "Albert", "Walker", "Randy", "Reed",  "Larry", "Barnes", "Lois", "Wilson", "Jesse",  "Campbell", "Ernest", "Rogers", "Theresa", "Patterson",  "Henry", "Simmons", "Michelle", "Perry", "Frank",  "Butler", "Shirley"];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

getData()
  .then(displayData)
  .catch(error => console.error(error));

function displayData(data) {
  console.log(data);
}
