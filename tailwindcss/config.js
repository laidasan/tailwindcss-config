const defineEnum = object => {
  try {
    const enumObject = {}
    Object.keys(object).forEach((propsName) => {
      Object.defineProperty(enumObject, propsName, {
        value: object[propsName],
        enumerable: true, // 可列舉
        configurable: false, // 不給予刪除
        writable: false // 不可重新賦值
      })
    })
    return Object.freeze(enumObject)
  } catch (error) {
    return object
  }
}

/**
 *
 * @param {number} frequency 迴圈次數
 * @param {number} level 每次遞增值
 * @desc 單位 px
 */
const createProgressiveFn = level => frequency => {
  const result = {}
  for (let i = 0; i <= frequency; i++) {
    result[i] = `${i * level}px`
  }
  return result
}

const progressWithLevel4 = createProgressiveFn(4)
const progressWithLevel1 = createProgressiveFn(1)

const progressFractionFn = denominator => {
  const result = {}
  for (let i = 1; i < denominator; i++) {
    result[`${i}/${denominator}`] = `${i / denominator * 100}%`
  }
  return result
}

// add custom utilities to tailwindcss
/**
 *
 * @param {string} propsName css 屬性名稱
 * @param {string} className util 名稱
 * @param {number} denominator 分母
 */
const createCustomProgressFractionFn = (propsName) => (className) => (denominator) => {
  const result = {}
  for (let i = 1; i < denominator; i++) {
    const value = {
      [propsName]: `${i / denominator * 100}%`
    }
    result[`.${className}${i}\\/${denominator}`] = value
  }
  return result
}
// flex start
// flex-basis default config
const customFlexBasisUtilDefault = defineEnum({
  '.basis-0': {
    'flex-basis': '0'
  },
  '.basis-1\\/2': {
    'flex-basis': '50%'
  },
  '.basis-1\\/3': {
    'flex-basis': '33.333333%'
  },
  '.basis-2\\/3': {
    'flex-basis': '66.666667%'
  },
  '.basis-1\\/4': {
    'flex-basis': '25%'
  },
  '.basis-3\\/4': {
    'flex-basis': '75%'
  },
  '.basis-1\\/5': {
    'flex-basis': '20%'
  },
  '.basis-2\\/5': {
    'flex-basis': '40%'
  },
  '.basis-3\\/5': {
    'flex-basis': '60%'
  },
  '.basis-4\\/5': {
    'flex-basis': '80%'
  },
  '.basis-1\\/6': {
    'flex-basis': '16.666666%'
  },
  '.basis-5\\/6': {
    'flex-basis': '83.333333%'
  }
})

/**
 *
 * @param {number} frequency 迴圈次數
 */
// const customFlexBasis = function (denominator) {
//   const result = {}
//   for (let i = 1; i < denominator; i++) {
//     const value = {
//       'flex-basis': `${i / denominator * 100}%`
//     }
//     result[`.basis-${i}\\/${denominator}`] = value
//   }
//   return result
// }

const customFlexBasis = createCustomProgressFractionFn('flex-basis')('basis-')

const customFlexBasisUtil = defineEnum({
  ...customFlexBasisUtilDefault,
  ...customFlexBasis(12)
})
// flex end

// typography
const customTypographyUtil = defineEnum({
  '.h1': {
    'font-size': '28px',
    'line-height': '38px'
  },
  '.h2': {
    'font-size': '24px',
    'line-height': '32px'
  },
  '.h3': {
    'font-size': '22px',
    'line-height': '32px'
  },
  '.h4': {
    'font-size': '20px',
    'line-height': '28px'
  },
  '.h5': {
    'font-size': '16px',
    'line-height': '22px'
  }
})
// typography end

// gradient
// linear gradient
const gradientColors = [
  {
    name: 'gd-red',
    start: '#965464',
    stop: '#c66f84'
  },
  {
    name: 'gd-orange',
    start: '#bc6841',
    stop: '#D08A6A'
  },
  {
    name: 'gd-yellow',
    start: '#df9833',
    stop: '#e6bb7e'
  },
  {
    name: 'gd-green',
    start: '#88c427',
    stop: '#b5db77'
  },
  {
    name: 'gd-cyan',
    start: '#07a6bb',
    stop: '#7edbe7'
  },
  {
    name: 'gd-blue',
    start: '#3f66bf',
    stop: '#4e91ff'
  },
  {
    name: 'gd-purple',
    start: '#6f5ab9',
    stop: '#a494da'
  }
]

const customGradient = function (gradientColors) {
  if (!(gradientColors instanceof Array)) return {}

  return gradientColors.reduce((result, { name, start, stop }) => {
    const gradientX = {
      'background-image': `linear-gradient(to right , ${start} , ${stop})`
    }
    const gradientY = {
      'background-image': `linear-gradient(to top , ${start} , ${stop})`
    }

    result[`.${name}-x`] = gradientX
    result[`.${name}-y`] = gradientY
    return result
  }, {})
}

const customGradientUtil = defineEnum({
  ...customGradient(gradientColors)
})

module.exports = {
  progressWithLevel4,
  progressWithLevel1,
  progressFractionFn,
  customFlexBasisUtil,
  customTypographyUtil,
  customGradientUtil
}
