import { PluginAPI, ProjectOptions } from '@vue/cli-service'
import archiver from 'archiver'
import path from 'path'
import fs from 'fs'

module.exports = (api: PluginAPI, options: ProjectOptions) => {
  const { build } = api.service.commands
  const buildFn = build.fn

  build.fn = (...args: object[]) => buildFn(...args).then(() => {
    console.log('Project is Builded')

    const { outputDir } = options

    const filename = outputDir + '.zip'
    const filepath = path.resolve(api.getCwd(), filename)

    const output = fs.createWriteStream(filepath)

    output.on('close', () => {
      // console.log(archive.pointer() + ' total bytes')
      console.log('close')
    })

    const archive = archiver('zip', {
      zlib: {
        level: 9
      }
    })

    archive.pipe(output)

    const subDir = outputDir as string
    archive.directory(subDir, subDir)
    archive.finalize()
  })
}