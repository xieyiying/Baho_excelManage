import table from './table/index'
import dialog from './dialog/index'
const install = function(Vue){
  if(install.installed) return
  Vue.component(table.name, table);
  Vue.component(dialog.name, dialog);

}
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
  install
}