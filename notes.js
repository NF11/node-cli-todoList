const fs = require("fs");
const chalk = require("chalk");

const getNote = function (title) {
  const notes = loadNotes();
  const duplicatedNote = notes.find((note) => note.title === title);
  if (!duplicatedNote) {
    console.log(chalk.red("no note found"));
  } else {
    console.log("title is :" + duplicatedNote.title);
    console.log("the content is :" + duplicatedNote.content);
  }
};
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow("your note title "));
  notes.forEach((data) => {
    console.log(data.title);
  });
};
const addNote = (title, content) => {
  const notes = loadNotes();
  // const duplicatedNotes = notes.filter((note) => note.title === title);
  const duplicatedNote = notes.find((note) => note.title === title);
  if (!duplicatedNote) {
    notes.push({
      title: title,
      content: content,
    });
    saveNotes(notes);
    console.log(chalk.green("new note added"));
  } else {
    console.log(chalk.redBright("note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notesToKeep.length !== notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green("note removed"));
  } else {
    console.log(chalk.redBright("note title d'ont exist"));
  }
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json").toString();
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
