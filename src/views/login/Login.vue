<style lang="less" scoped>
.login_content{
    width: 375px;
    font-size: .14rem;
    margin: .5rem auto;
    .loginOther {
        margin: 22px 0;
        padding-left: 70px;
        .el-checkbox {
            float: left;
            color: rgba(0, 0, 0, 0.65);
        }
        span {
            float: right;
            color: #1890ff;
            cursor: pointer;
        }
    }
    .register {
        text-align: right;
        span {
            color: #1890ff;
            cursor: pointer;
        }
    }
    .el-button {
        width: 100%;
    }
    .loginFooter{
        position: absolute;
        bottom: 0;
    }
    .validateNO{
        margin-left: 10px;
    }
    .informationForm{
        text-align: left;
        .dialog-footer {
            .el-button{
                width: 20%;
                display:inline-block;
            }
        }
    }

}

</style>
<template>
    <div class="login_content">
        <div class="login_name">登录</div>
        <el-form :model="loginData" :rules="rules" ref="loginData" :label-position='labelPosition' label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名：" prop="loginName">
                <el-input type="text" v-model="loginData.loginName" autocomplete="off" placeholder="请输入证号/注册账号/登录名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input type="password" v-model="loginData.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <div class="loginOther clearfix">
                <el-checkbox v-model="checked">记住我</el-checkbox>
                <!-- <span>忘记密码</span> -->
                <router-link tag="span" to="/find_password">忘记密码</router-link>
            </div>
            <el-form-item>
                <el-button type="primary" @click="submitLogin('loginData')">提交</el-button>
            </el-form-item>
            <div class="register">
                <router-link tag="span" to="/register">还没有账户，马上注册</router-link>
            </div>

        </el-form>
        <el-dialog class="informationForm" title="信息验证" :visible.sync="dialogVisible"  width="480px" lock-scroll>
            <span>
                <el-form  ref="phone" :model="phone" :rules="rules" :label-position='labelPosition' label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号码：">{{phone.phoneNum}}</el-form-item>
                    <el-form-item label="验证码：" prop="code">
                        <el-col :span="12">
                            <el-input type="code" v-model.number="phone.code" autocomplete="off" placeholder="输入验证码"></el-input>
                        </el-col>
                        <el-col :span="8" class="validateNO">
                            <el-button  @click="getCode('getCodeID')" id="getCodeID" ref="getCodeID">{{codeShow}}</el-button>
                        </el-col>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('phone')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { login } from '@/api/login.js'

export default {
    data() {
        return {
            labelPosition: 'right',
            checked: false,
            dialogVisible: false,
            times: 60,
            codeShow: '获取验证码',
            loginData: {
                loginName: ''
            },
            flag: true,
            phone: {},
            resData: {},
            timer: null,
            rules: {}
        }
    },
    beforeMount() {
        this.loginData.loginName = localStorage.getItem('username')
    },
    methods: {
        submitLogin() {
            login().then((res) => {
                console.log(1)
            })
        }
    }
}
</script>
