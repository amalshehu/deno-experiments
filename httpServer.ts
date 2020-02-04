async function getUserAsync(name) {
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json();
  return data;
}

// console.log('/home', Deno.dir('home'));

getUserAsync('amalshehu').then(data => console.log('Github user', data.id));
