"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var archiver_1 = __importDefault(require("archiver"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
module.exports = function (api, options) {
    var build = api.service.commands.build;
    var buildFn = build.fn;
    build.fn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return buildFn.apply(void 0, args).then(function () {
            console.log('Project is Builded');
            var outputDir = options.outputDir;
            var filename = outputDir + '.zip';
            var filepath = path_1.default.resolve(api.getCwd(), filename);
            var output = fs_1.default.createWriteStream(filepath);
            output.on('close', function () {
                // console.log(archive.pointer() + ' total bytes')
                console.log('close');
            });
            var archive = (0, archiver_1.default)('zip', {
                zlib: {
                    level: 9
                }
            });
            archive.pipe(output);
            var subDir = outputDir;
            archive.directory(subDir, subDir);
            archive.finalize();
        });
    };
};
