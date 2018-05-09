"use strict"
const Buffer = require("safe-buffer").Buffer
const through = require("through2")
const PluginError = require("plugin-error")
const format = require("prettier-eslint")

const PLUGIN_NAME = "@o2team/gulp-prettier-eslint"

module.exports = function(formatOptions) {
  formatOptions = formatOptions || {}

  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, "Streaming not supported"))
    }

    const unformattedCode = file.contents.toString("utf8")

    formatOptions = Object.assign({}, formatOptions || {}, {
      text: unformattedCode,
      filePath: file.path
    })

    try {
      const formattedCode = format(formatOptions)

      if (formattedCode !== unformattedCode) {
        file.isPrettier = true
        file.contents = Buffer.from(formattedCode)
      }

      this.push(file)
    } catch (error) {
      this.emit("error", new PluginError(PLUGIN_NAME, error))
    }

    callback()
  })
}
