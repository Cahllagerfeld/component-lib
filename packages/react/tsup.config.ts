import { defineConfig } from "tsup";

const PURE_CALLS = [
	"cloneElement",
	"createContext",
	"createElement",
	"createFactory",
	"createRef",
	"forwardRef",
	"isValidElement",
	"memo",
	"lazy"
];

export default defineConfig({
	entry: ["src/index.ts"],
	treeshake: true,
	external: ["react"],
	format: ["cjs", "esm"],
	minify: true,
	dts: true,
	pure: PURE_CALLS
});
