const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
  // 菜单类型
  menuType: Number,
  // 菜单名称
  menuName: String,
  // 权限标识
  menuCode: String,
  // 路由地址
  path: String,
  // 图标
  icon: String,
  // 组件地址
  component: String,
  // 菜单状态
  menuState: Number,
  // 
  parentId: [mongoose.Types.ObjectId],
  // 创建时间
  'createTime': { type: Date, default: Date.now() },
  // 更新时间
  'updateTime': { type: Date, default: Date.now() }
})
module.exports = mongoose.model('menu', menuSchema, 'menus')