import { defineConfig } from "tsup";
import svgr from "esbuild-plugin-svgr";

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
	dts: true,
	pure: PURE_CALLS,
	esbuildPlugins: [svgr({ svgo: false })]
});
