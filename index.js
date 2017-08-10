const UNIQUE_KEY_PROP_NAME = '__unique_key_prop__'
const VALUE_PREFIX = '__value_prefix__' + Date.now() + '_'

const defaultOptions = {
  key: UNIQUE_KEY_PROP_NAME,
  valuePrefix: VALUE_PREFIX
}

let uid = 0

function extend (dest, src) {
  for (const key in src) {
    dest[key] = src[key]
  }
  return dest
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function objectId (obj, options) {
  if (isObject(obj)) {
    const { key, valuePrefix } = extend(extend({}, defaultOptions), options)
    if (key in obj) {
      return obj[key]
    }
    const value = VALUE_PREFIX + uid++
    Object.defineProperty(obj, key, { value })
    return value
  }
  return obj
}

export default objectId