function compile(inputFile) {
  const fs = require("fs");

  const outputJs = inputFile + '.js';
  const input = inputFile;

  const svelte = require("svelte/compiler");

  const source = fs.readFileSync(input, "utf8");
  const result = svelte.compile(source, {
    format: "esm",
    generate: "dom",
    filename: outputJs
  });

  fs.writeFileSync(outputJs, result.js.code);
}

compile('src/friends/Friends.svelte');
compile('src/App.svelte');
compile('src/greeting/Greeting.svelte');
compile('src/merge-sort/MergeSort.svelte');
compile('src/treeview/Treeview.svelte');
