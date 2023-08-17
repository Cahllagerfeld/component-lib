const replaceFiles = require("replace-in-files");

async function fix() {
	try {
		const { countOfMatchesByPaths } = await replaceFiles({
			files: "packages/**/dist/**/*.d.{ts,cts}",
			from: /class-variance-authority\/dist\/types/g,
			to: "class-variance-authority/types"
		});
		console.log("Fixed:", countOfMatchesByPaths);
	} catch (error) {
		console.error("Error fixing bad imports in d.ts files:", error);
	}
}

fix();
