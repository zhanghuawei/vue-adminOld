export function promptMessage(self, val, title, callbackTWO, flag) { // 弹窗提示封装
    self.$alert(val, title, {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        showCancelButton: flag,
        showConfirmButton: true,
        dangerouslyUseHTMLString: true,
        callback: action => {
            if (action === 'cancel') {
                return false
            }
            if (callbackTWO === undefined) {
                return false
            }
            callbackTWO()
            self.$message({
                type: 'info',
                message: `action: ${action}`
            })
        }
    })
}

export function goBack(self, val) {
    self.$router.push({ path: val })
}
