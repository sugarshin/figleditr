// config

const D = {
  PATH: '/',
  SRC: 'src',
  DEST: 'public'
};

export default {
  D: D,

  serve: {
    notify: false,
    startPath: D.PATH,
    server: {
      baseDir: './',
      index: `${D.DEST}${D.PATH}/`,
      routes: (() => {
        let obj = {};
        obj[D.PATH] = `${D.DEST}${D.PATH}/`;
        return obj;
      })()
    }
  },

  scripts: {
    browserifyOpts: {
      entries: [`./${D.SRC}/js/main.js`],
      // extensions: ['.coffee'],
      transform: ['babelify']
    },
    dest: `${D.DEST}${D.PATH}/js`
  },

  uglify: {
    src: `./${D.DEST}${D.PATH}/js/main.js`,
    dest: `${D.DEST}${D.PATH}/js`
  },

  jade: {
    src: [
      `${D.SRC}/**/*.jade`,
      `!${D.SRC}/**/_**/*.jade`,
      `!${D.SRC}/**/_*.jade`
    ],
    dest: `${D.DEST}${D.PATH}`
  },

  stylus: {
    src: [
      `${D.SRC}/**/*.styl`,
      `!${D.SRC}/**/_**/*.styl`,
      `!${D.SRC}/**/_*.styl`
    ],
    dest: `${D.DEST}${D.PATH}/css`
  },

  minifyCss: {
    src: `${D.DEST}${D.PATH}/css/main.css`,
    dest: `${D.DEST}${D.PATH}/css`
  },

  clean: {
    path: [`${D.DEST}${D.PATH}`]
  },

  copy: {
    figlet: {
      src: './node_modules/figlet/fonts/**',
      dest: `${D.DEST}/fonts`
    },
    octicons: {
      src: './node_modules/octicons/octicons/octicons.{css,eot,svg,ttf,woff}',
      dest: `${D.DEST}/css`
    }
  },

  replace: {
    src: `${D.DEST}${D.PATH}/index.html`,
    dest: `${D.DEST}${D.PATH}`,
    replacements: [
      ['main.js?v', `main.min.js?v${Date.now()}`],
      ['main.css?v', `main.min.css?v${Date.now()}`]
    ]
  }

}
