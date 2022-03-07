/*全局通用配置
    也就是说，
    对于任何的文档
    Uitableview初始化后都长成这样
*/
const AddOnName:string = "autodetect"

const profileType = {
    autodetect: {
      panelPostion: [1], // 不要删除（面板位置）
      panelHeight: [1], // 不要删除（面板高度）
      doubleClick: false // 不要删除（双击动作）

    }, //保持与文件名一致（小写）
  }

/*单独文档配置
    也就是说，
    对于每个文档，
    都可以配置一个独立的值，
    需要注意的是，
    在docprofile中添加的初始变量和处事变量值
    都需要在profileType中添加
*/
const docProfileType = {
    autodetect: {
      
    },
    }




export { profileType, docProfileType }

