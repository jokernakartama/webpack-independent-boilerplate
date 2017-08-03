import hi from '~/hello'
import allStyles from '@/index.styl'

const hello = '<h1>Hello world</h1>'
hi(hello)
// include styles at the end
allStyles.use()
