/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = '/learning-react-hooks'

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? SUB_DIRECTORY : '',
  assetPrefix: isProd ? SUB_DIRECTORY : '',
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : ''
  },
  trailingSlash: true
}
