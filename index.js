import { version, isV3 } from "./components/Changelog.js";
import Data from './components/Data.js'
export * from './apps/index.js'

let index = {
	atlas: {}
}
if (isV3) {
	index = await Data.importModule('/plugins/howe-plugin/adapter', 'index.js')
}
export const atlas = index.atlas || {}

console.log(`参考面板插件${version}初始化~`);

setTimeout(async function() {
	let msgStr = await redis.get('howe:restart-msg')
	let relpyPrivate = async function() {}
	if (!isV3) {
		let common = await Data.importModule('/lib', 'common.js')
		if (common && common.default && common.default.relpyPrivate) {
			relpyPrivate = common.default.relpyPrivate
		}
	}
	if (msgStr) {
		let msg = JSON.parse(msgStr)
		await relpyPrivate(msg.qq, msg.msg)
		await redis.del('howe:restart-msg')
		let msgs = [`当前参考面板插件版本: ${version}`]
		await relpyPrivate(msg.qq, msgs.join('\n'))
	}
}, 1000)