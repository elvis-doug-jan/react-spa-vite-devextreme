export const isNumeric = (num: number) => {
  return !isNaN(num)
}

export const truncate = (str: string, max = 20) => {
  return str.length > max ? str.substr(0, max - 1) + '…' : str
}

export const getValues = (data: any, values = []): any[] => {
  if (typeof data !== 'object') {
    return [...values, data]
  }
  return Object.values(data).flatMap((v): any => getValues(v, values))
}

export const getOnlyPathsNavigate = (arr: any[]) => {
  return getValues(arr).filter(
    (_) => typeof _ === 'string' && _.startsWith('/')
  )
}

export const getCurrentNavigatePath = (navigation: string[]) => {
  const paths = getOnlyPathsNavigate(navigation)

  const windowPath = window.location.pathname
  if (windowPath) {
    console.log(paths)
    return paths.find((_) => windowPath.startsWith(_))
  }
}
