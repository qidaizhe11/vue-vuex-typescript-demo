const digitsRE = /(\d{3})(?=\d)/g

export function currencyFilter(value: any, currency: any, decimals: any) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) {
    return ''
  }
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  const stringified = Math.abs(value).toFixed(decimals)
  const intVal = decimals ? stringified.slice(0, -1 - decimals) : stringified
  const i = intVal.length % 3
  const head = i > 0 ? intVal.slice(0, i) + (intVal.length > 3 ? ',' : '') : ''
  const floatVal = decimals ? stringified.slice(-1 - decimals) : ''
  const sign = value < 0 ? '-' : ''
  return (
    sign + currency + head + intVal.slice(i).replace(digitsRE, '$1,') + floatVal
  )
}
