
import { execSync } from "child_process";

const isWindows = process.platform === "win32";
const command = isWindows ?
	"npm run generate-ts-protobuf-win32" :
	"npm run generate-ts-protobuf-posix";

execSync(command, {
	stdio: "inherit"
});