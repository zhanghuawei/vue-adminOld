function checkSpecificKey(str) {
    if (str) {
        var specialKey = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'"
        for (var i = 0; i < str.length; i++) {
            if (specialKey.indexOf(str.substr(i, 1)) !== -1) {
                return false
            }
        }
        return true
    }
}

function checkPhoneNumber(str) {
    if (str && str.length === 11 && (/^1[34578]\d{9}$/.test(str))) {
        return true
    } else {
        return false
    }
}
export default {
    check_character(rule, value, callback) { // 特殊字符校验
        if (!checkSpecificKey(value)) {
            console.log(rule)
            callback(new Error('不能包含特殊符号!'))
        } else {
            callback()
        }
    },
    check_phone(rule, value, callback) {
        if (!value) {
            return false
        }
        if (!checkPhoneNumber(value)) {
            callback(new Error('请输入正确手机号！'))
        } else {
            callback()
        }
    }

}
