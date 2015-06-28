// config

const D = {
  PATH: '/figleditr',
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
        obj[D.PATH] = `${D.DEST}/`;
        obj[`${D.PATH}/font-name.json`] = `${D.DEST}/font-name.json`;
        obj[`${D.PATH}/fonts`] = `${D.DEST}/fonts`;
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
    dest: `${D.DEST}/js`
  },

  uglify: {
    src: `./${D.DEST}/js/main.js`,
    dest: `${D.DEST}/js`
  },

  jade: {
    src: [
      `${D.SRC}/**/*.jade`,
      `!${D.SRC}/**/_**/*.jade`,
      `!${D.SRC}/**/_*.jade`
    ],
    dest: `${D.DEST}`
  },

  stylus: {
    src: [
      `${D.SRC}/**/*.styl`,
      `!${D.SRC}/**/_**/*.styl`,
      `!${D.SRC}/**/_*.styl`
    ],
    dest: `${D.DEST}/css`
  },

  minifyCss: {
    src: `${D.DEST}/css/main.css`,
    dest: `${D.DEST}/css`
  },

  clean: {
    path: [`${D.DEST}`]
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
    src: `${D.DEST}/index.html`,
    dest: `${D.DEST}`,
    replacements: [
      ['main.js?v', `main.min.js?v${Date.now()}`],
      ['main.css?v', `main.min.css?v${Date.now()}`]
    ]
  }

}
