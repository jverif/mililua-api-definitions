
import { execSync } from "child_process";
import { mkdirSync } from "fs";
import path from "path";

const isWindows = process.platform === "win32";

const inputFile = path.join("protobufs", "gil.proto");
const outputPath = path.join("src", "generated", "protobufs");
const protoPath = path.join("protobufs");
const tsPlugin = isWindows ?
	path.join("node_modules", ".bin", "protoc-gen-ts_proto.cmd") : 
	path.join("node_modules", ".bin", "protoc-gen-ts_proto");

mkdirSync(outputPath, {recursive: true});

const command = `protoc --proto_path=${protoPath} --plugin=protoc-gen-ts_proto=${tsPlugin} --ts_proto_out=${outputPath} ${inputFile}`;

execSync(command, {
	stdio: "inherit",
});