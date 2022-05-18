import chalk from 'chalk';
import Jimp from "jimp";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
const dateAndTime = new Date();
if(!argv.dimension) warning("Dimensions is not specified!. Run $/usr/bin/env node program.js --dimension=YouTube or arbitrary values like: --dimension=1270*768 to change the selected file.");

if(!argv.format) warning("Format is not specified!. Run $/usr/bin/env node program.js --format=jpg or png, tiff, bmp, git. If not specifies, png would automatically be assigned.");

const widthAndHeight = argv.dimension.split('*');


if (argv.format == "jpg") {
        const format = "jpg";
}
if (argv.format == "bmp") {
        const format = "bmp";
}
if (argv.format == "tiff") {
        const format = "tiff";
}
if (argv.format == "gif") {
        const format = "gif";
} else {
        const format = "png";
}


const newName =dateAndTime.getFullYear().toString()+dateAndTime.getMonth()+dateAndTime.getDate()+dateAndTime.getHours()+dateAndTime.getMinutes()+dateAndTime.getSeconds()+dateAndTime.getMilliseconds().toString()+"."+argv.format;
console.log(newName);
console.log(argv);
console.log(argv._.toString());
