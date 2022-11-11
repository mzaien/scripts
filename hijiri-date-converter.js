#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title hijri-date
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🗓
// @raycast.argument1 { "type": "text", "placeholder": "date" }

// @raycast.packageName gregorian-to-hijri

// Documentation:
// @raycast.description gregorian date to hijri
// @raycast.author mzaien
// @raycast.authorURL https://github.com/mzaien


if (Number.isNaN(Date.parse(process.argv[2])) | process.argv[2] === "") {
  console.log(process.argv[2]+ " is not valid a date")
  return null
}

let proc = require('child_process').spawn('pbcopy');
const formateDate = Intl.DateTimeFormat("default",{calendar:"islamic-umalqura"}).format(new Date(process.argv[2]))
proc.stdin.write(formateDate); proc.stdin.end();
console.log(`formatted date: ${formateDate}`)

