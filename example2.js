const yargs = require("yargs")
        .scriptName("pirate-parser")
        .usage("$0 <cmd> [args]")
        .command(
                "hello [name]",
                "welcome ter yargs!",
                (yargs) => {
                        yargs.positional("name", {
                                type: "string",
                                default: "Cambi",
                                describe: "the name to say hello to",
                        });
                },
                function gimmeName (argv) {
        return argv.name;
                }
        )
        .help().argv;

console.log(yargs.gimmeName(argv.name));
