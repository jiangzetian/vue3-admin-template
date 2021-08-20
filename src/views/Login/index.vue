<template>
	<a-row class="layout" type="flex" justify="center" align="middle">
		<a-card class="login_card" bodyStyle="height:100%;padding:unset;" hoverable>
			<div class="card_body">
				<div class="login_img">
					<img src="https://via.placeholder.com/320x180/fff.png?text=Tian-Admin">
					<p>Tian-Admin</p>
				</div>
				<div class="login_form">
					<a-form class="form" ref="loginFormRef" layout="vertical" :rules="loginRules" :model="loginForm">
						<a-form-item label="账号:" name="username">
							<a-input v-model:value="loginForm.username" size="large" />
						</a-form-item>
						<a-form-item label="密码:" name="password">
							<a-input-password v-model:value="loginForm.password" size="large" />
						</a-form-item>
						<a-form-item>
							<a-button type="primary" size="large" block @click="onSubmit">提交</a-button>
						</a-form-item>
					</a-form>
				</div>
			</div>
		</a-card>
	</a-row>
</template>

<script lang="ts">
	import {defineComponent,reactive,ref,toRaw} from 'vue'
	import {useRouter} from 'vue-router'
	import axios from 'axios';
	interface formState {
		username: string,
		password: string,
	}
	export default defineComponent({
		name: 'login',
		setup(props, context) {
			const router = useRouter();
			const loginFormRef = ref();
			const loginForm: formState = reactive({
				username: 'admin',
				password: 'admin',
			});

			const loginRules = {
				username: [{
					required: true,
					message: '请输入用户名',
					trigger: 'blur'
				}, ],
				password: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'
				}, ],
			};

			const onSubmit = () => {
				loginFormRef.value.validate().then(() => {
					axios({
						url: '/mock/api/login',
						method: 'POST',
						data: toRaw(loginForm),
					}).then(res => {
						router.push({path: '/'})
					})
				})
			};
			return {
				loginFormRef,
				loginForm,
				loginRules,
				onSubmit
			}
		}
	})
</script>

<style lang="less" scoped>
	.layout {
		width: 100%;
		height: 100%;
		background: #f5f5fa;

		.login_card {
			width: 100%;
			height: 100%;
			max-width: 1000px;
			max-height: 550px;
			border-radius: 10px;
			background: #fff;
		}

		.card_body {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
		}

		.login_img {
			background: #1890ff;
			width: 40%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			img {
				padding: 10px;
				background: #fff;
				max-width: 160px;
			}

			p {
				margin: 20px 0;
				font-size: 22px;
				color: #fff;
			}
		}

		.login_form {
			width: 60%;
			display: flex;
			justify-content: center;
			align-items: center;

			.form {
				width: 100%;
				max-width: 380px;
			}
		}
	}
</style>
