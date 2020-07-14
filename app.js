const yargs = require("yargs");
const notes = require("./notes");
yargs.command({
  command: "add",
  describe: "add a new note ",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    content: {
      describe: "Note content",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.content);
  },
});
yargs.command({
  command: "remove",
  describe: "remove a note ",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "list notes ",
  handler() {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "read one note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.getNote(argv.title);
  },
});

yargs.parse();
