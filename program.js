const Jimp = require("jimp");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;


require("yargs")
        .scriptName("YouTube-Thumbnail-Formatter")
        .usage("$0 <cmd> [args]")
        .command(
                "format [fileName]",
                "welcome ter yargs!",
                (yargs) => {
                        yargs.positional("fileName", {
                                type: "string",
                                default: `${Date()}.png`,
                                describe: "Saves the picture",
                        });
                },
                function (argv) {
                        console.log("The", argv.fileName, "has been saved!");
                }
        )
        .help().argv;


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
