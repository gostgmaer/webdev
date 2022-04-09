const fs = require('fs')

const fname = process.argv[2]||'Application'
// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
/* fs.mkdir('Dogs', { recursive: true }, (err) => {
  if (err) throw err;
}); */

/* console.log('mak dir') */

fs.mkdirSync(fname);



fs.writeFile(`${fname}/index.html`, 'Remove Content', function (err) {
  if (err) throw err;
  console.log('Html File has been Saved');
});
fs.writeFile(`${fname}/styles.css`, 'Remove Content', function (err) {
  if (err) throw err;
  console.log('Css File is Saved');
});
fs.writeFile(`${fname}/script.js`, 'Remove Content', function (err) {
  if (err) throw err;
  console.log('JavaScript File Has Saved!');
});


