//Computed Property Names:
function objectifyOld (key,value) {
  let obj = {}
  obj[key] = value;
  return obj;
}
function objectifyNew(key,value) {
  return {[key]: value}
}
objectifyNew('name1', 'daniel');
console.log(name1);

/*Arrow Functions: */

//old school Functions:
function add (x,y) {
  return x + y;
}
//expression functions
var add = function (x,y) {
  return x + y;
}
//New style:
var addArrowStyle = (x,y) => {return x + y}

//Array of Users Old way:
users.map(function(user){});
//As above so below
users.map(()=>{})

//Real Word Example:
//Old Style: 
function getTweets(uid){
  return fetch('https://api.users.com/' + uid)
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    return response.data
  })
  .then(function (tweets){
    return tweets.filer(function(tweet) {
      return tweet.stars > 50
    })
  })
  .then(function (tweets) {
    return tweets.filter(function (tweet) {
      return tweets.rts > 50
    })
  })
}
//New Way: 
function getTweets(uid){
  return fetch('https://api.users.com/' + uid)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    return response.data
  })
  .then( (tweets) =>{
    return tweets.filer((tweet) => {
      return tweet.stars > 50
    })
  })
  .then( (tweets) => {
    return tweets.filter((tweet) => {
      return tweet.rts > 50
    })
  })
}

//And even more since if its one line we can remove
function getTweets(uid){
  return fetch('https://api.users.com/' + uid)
  .then((response) => response.json())
  .then((response) => response.dat)
  .then((tweets) => tweets.filer((tweet) => tweet.stars > 50))
  .then((tweets) =>tweets.filter((tweet) => tweet.rts > 50))
}

