<style lang="less" scoped>
<<<<<<< HEAD
.bg {
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
    background: url('../../imgs/bg.jpg') no-repeat center fixed;
    background-size: cover;
}
=======
>>>>>>> 85bd6d7a9505d05d8b2f3abea77dc82de601e61f
.login_content{
    width: 3rem;
    font-size: .14rem;
    padding: .2rem;
    margin: 0 auto;
    background: rgba(255,255,255,.2);
    .login_name {
        color: #000;
        font-weight: 600;
        margin-bottom: .22rem;
    }
    .loginOther {
        margin: 22px 0;
        .el-checkbox {
            float: left;
            color: rgba(0, 0, 0, 0.65);
        }
        span {
            font-size: .12rem;
            color: #1890ff;
            cursor: pointer;
        }
    }
    .register {
        text-align: right;
        span {
             font-size: .12rem;
            color: #1890ff;
            cursor: pointer;
        }
    }
    .el-button {
        .el-input()
    }
    .el-input{
        width: 2.2rem;
    }
}

</style>
<template>
<div class="bg">
    <div class="login_content">
<<<<<<< HEAD
        <div class="width_220">
            <div class="login_name">登录</div>
            <el-form :model="loginData" :rules="rules" ref="loginData" :label-position='labelPosition' label-width="0px" class="demo-ruleForm">
                <el-form-item prop="loginName">
                    <el-input type="text" v-model="loginData.loginName" autocomplete="off" placeholder="请输入证号/注册账号/登录名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginData.password" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <div class="loginOther clearfix">
                    <el-checkbox v-model="checked">记住我</el-checkbox>
                    <router-link tag="span" to="/find_password">忘记密码</router-link>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitLogin('loginData')">提交</el-button>
                </el-form-item>
                <div class="register">
                    <router-link tag="span" to="/register">还没有账户，马上注册</router-link>
                </div>

            </el-form>
            </div>
=======
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
>>>>>>> 85bd6d7a9505d05d8b2f3abea77dc82de601e61f
    </div>
</div>
</template>
<script>
import { login } from '@/api/login.js'
import validator from '@/utils/validator.js'
// import { promptMessage } from '@/utils/publicFunction.js'
let validatorInput = (rule, value, callback) => {
    validator.check_character(rule, value, callback)
}
export default {
    data() {
        return {
            labelPosition: 'right',
            checked: false,
            dialogVisible: false,
            loginData: {
                loginName: 'admin',
                passworld: '123123'
            },
            rules: {
                loginName: [
                    { required: true, message: '请输入用户名', trigger: 'change' },
                    { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' },
                    { validator: validatorInput, trigger: 'change' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' },
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' },
                    { validator: validatorInput, trigger: 'change' }
                ]
            }
        }
    },
    beforeMount() {
        this.loginData.loginName = localStorage.getItem('username')
    },
    methods: {
        submitLogin(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    login(this.loginData).then((res) => {
                        console.log(1)
                    })
                }
            })
        }
    }
}
</script>
