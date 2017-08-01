const argv = require('yargs').argv
const webpackConfig = require('./webpack.config')
const path = require('path')

const TEST_BUNDLER = './tests/test-bundler.js'

const karmaConfig = {
  basePath: '../',
  browsers: ['PhantomJS'],
  singleRun: !argv.watch,
  files: [{
    pattern  : TEST_BUNDLER,
    watched  : false,
    served   : true,
    included : true
  }],
  frameworks: ['mocha'],
  reporters: ['mocha', /*'coverage-istanbul'*/],
  coverageIstanbulReporter: {
    // reports can be any that are listed here:
    // https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
    reports: ['html', 'text'],

    // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
    // dir: path.join(__dirname, 'coverage'),
    dir: path.join(webpackConfig.output.path, 'coverage'),

    // if using webpack and pre-loaders, work around webpack breaking the source path
    fixWebpackSourcePaths: true,

    // stop istanbul outputting messages like `File [${filename}] ignored, nothing could be mapped`
    skipFilesWithNoCoverage: false,

      // Most reporters accept additional config options. You can pass these through the `report-config` option
    'report-config': {

      // all options available at:
      // eslint-disable-next-line max-len
      // https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
      html: {
        // outputs the report in ./coverage/html
        subdir: 'html'
      }

    },

      // enforce percentage thresholds
      // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
    thresholds: {
      emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
      global: { // thresholds for all files
        statements: 90,
        lines: 90,
        branches: 90,
        functions: 90
      },
      each: { // thresholds per file
        statements: 90,
        lines: 90,
        branches: 90,
        functions: 90,
        overrides: {
          'baz/component/**/*.js': {
            statements: 98
          }
        }
      }
    }
  },
  preprocessors: {
    [TEST_BUNDLER]: ['webpack'],
    'src/**/modules/*.js': ['coverage']
  },
  logLevel: 'WARN',
  browserConsoleLogOptions: {
    terminal: true,
    format: '%b %T: %m',
    level: '',
  },
  webpack: {
    entry: TEST_BUNDLER,
    devtool: 'cheap-module-source-map',
    module: webpackConfig.module,
    plugins: webpackConfig.plugins,
    resolve: webpackConfig.resolve,
    externals: {
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react',
    },
  },
  webpackMiddleware: {
    stats: 'errors-only',
    noInfo: true,
  },
}

module.exports = (cfg) => cfg.set(karmaConfig)
