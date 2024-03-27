import packge from '../../package.json'

export const runtimeInfo = {
  year: new Date().getFullYear(),
  version: packge.version,
}
