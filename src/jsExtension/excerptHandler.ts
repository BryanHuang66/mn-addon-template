import {log} from "utils/common"
import {excerptHandler} from "addons/autoDetect"


export default async (_note: MbBookNote, _lastExcerptText?: string) => {
    log("开始处理摘录","handleExcerpt")
    excerptHandler(_note,_lastExcerptText)
    log("结束处理摘录","handleExcerpt")
}