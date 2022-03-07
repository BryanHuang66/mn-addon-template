import { profile } from "profile"
import { isOCNull, log, showHUD } from "utils/common"
// import { util as autostandardize } from "./autostandardize"
import {fetch,post} from "utils/network"
/*
   UI界面样式
*/
const config: IConfig = {
  name: "自动触发部件",
  intro: '以下为自动触发模块，详情请点击查看文档帮助',
  link: "",  //Todo：Replacing link
  settings: [ 
    /*
    设置模块样式
    用法：
    {
      key:"控件名称",
      type: cellViewType.*****,
      label:"显示的名称"
    }
    支持控件：
      - switch
      - inlineInput
      - input
      - plainText
      - select
      - multiSelect
    */
  ],
  actions: [
    /*
    不需要填写
    */
  ]
}



const util = {
  /*
  定义控件相关动作
  */
}

const action: IActionMethod = {
  /*
    不需要填写
  */
}

function excerptHandler(_note:MbBookNote,_lastExcerptText?:string){

} 

export { config,util, action,excerptHandler }