<template>
    <div class="login">
        <group>
            <x-input title="" name="mobile" placeholder="请输入手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
            <x-input title="" type="password" placeholder="请输入登录密码" v-model="password" :min="6" :max="16" required></x-input>
        </group>
        <box gap="10px 25px">
            <x-button type="primary" @click.native="handleLogin">登录</x-button>
            <x-button type="default" link="/Reg">注册</x-button>
        </box>
    </div>
</template>

<script>
    import { XInput, Box, Group, XButton,Divider } from 'vux'

    export default {
        name: 'login',
        data() {
            return {
                mobile: '', //手机号
                password: '', //密码
            }
        },
        methods: {
            handleGetCode() {
                if(this.mobile) {
                    this.getCode.disabled = true;
                    this.getCode.txt = '获取中...';
                    let seconds = 60;
                    let self = this;
                    let time = setInterval(function() {
                        --seconds;
                        self.getCode.txt = seconds + 's';
                        if(seconds <= 0) {
                            clearInterval(time);
                            self.getCode.disabled = false;
                            self.getCode.txt = '获取验证码';
                        }
                    }, 1000)
                } else {
                    this.$vux.toast.text('请先填写手机号');
                }
            },
            handleLogin() {
                if(!this.mobile || !this.password ) {
                    this.$vux.toast.text('您有未填项，不能注册')
                } else {
                    this.$vux.toast.text('登录成功')
                    this.$router.push('/')
                }
            }
        },
        created() {
            this.title = '登录';
        },
        components: {
            XInput,
            XButton,
            Group,
            Divider,
            Box
        }
    }
</script>