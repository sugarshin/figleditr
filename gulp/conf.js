const DIR = module.exports.DIR = {
  SITE_ROOT_PATH: '/figleditr',
  SRC: 'src',
  DEST: 'public'
};

module.exports.serve = {
  notify: false,
  startPath: DIR.SITE_ROOT_PATH,
  server: {
    baseDir: './',
    index: `${DIR.DEST}${DIR.SITE_ROOT_PATH}/`,
    routes: {
      [DIR.SITE_ROOT_PATH]: `${DIR.DEST}/`,
      [`${DIR.SITE_ROOT_PATH}/fonts`]: `${DIR.DEST}/fonts`
    }
  }
};

module.exports.scripts = {
  browserifyOpts: {
    entries: [`./${DIR.SRC}/js/index.js`],
    extensions: ['.jsx'],
    transform: [
      ['babelify', {
        babelrc: false,
        presets: ['es2015', 'stage-0', 'react']
      }],
      'envify'
    ]
  },
  dest: `${DIR.DEST}/js`
};

module.exports.uglify = {
  src: `./${DIR.DEST}/js/index.js`,
  dest: `${DIR.DEST}/js`,
  opts: {
    preserveComments(node, comment) {
      return comment.value.indexOf('This header is generated by licensify') > -1;
    }
  }
};

module.exports.stylus = {
  src: [
    `${DIR.SRC}/**/*.styl`,
    `!${DIR.SRC}/**/_**/*.styl`,
    `!${DIR.SRC}/**/_*.styl`
  ],
  dest: `${DIR.DEST}/css`
};

module.exports.minifyCss = {
  src: `${DIR.DEST}/css/main.css`,
  dest: `${DIR.DEST}/css`
};

module.exports.clean = {
  path: [`${DIR.DEST}`]
};

module.exports.copy = {
  html: {
    src: `${DIR.SRC}/index.html`,
    dest: `${DIR.DEST}`
  },
  figlet: {
    src: './node_modules/figlet/fonts/**',
    dest: `${DIR.DEST}/fonts`
  }
};

module.exports.htmlReplace = {
  src: `${DIR.SRC}/index.html`,
  dest: `${DIR.DEST}`
};
