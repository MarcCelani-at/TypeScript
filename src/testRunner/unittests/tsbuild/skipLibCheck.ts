namespace ts {
    describe("unittests:: tsbuild:: on project with skipLibCheck set to true", () => {
        let projFs: vfs.FileSystem;
        before(() => {
            projFs = loadProjectFromDisk("tests/projects/skipLibCheck");
        });
        after(() => {
            projFs = undefined!;
        });

        verifyTsc({
            subScenario: `program options include skipLibCheck`,
            fs: () => projFs,
            scenario: "skipLibCheck",
            commandLineArgs: ["--b", "/src", "--verbose"],
        });
        verifyTsc({
            subScenario: `command line argument overrides json`,
            fs: () => projFs,
            scenario: "skipLibCheck",
            commandLineArgs: ["--b", "/src", "--skipLibCheck", "false", "--verbose"],
        });
    });
}
