// create subprocess
const p = Deno.run({
  args: ['echo', 'hello']
});

// await its completion
await p.status();
