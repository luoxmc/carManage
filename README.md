统一修改，针对所有接口：
一：出参第一层级增加progress（页码）字段，配合同级的location（流程名or页面名）字段，代表的意义为需要跳转的这个步骤对应的页码
二：流程修改
	（1）删除 - idCardFront（身份证正面）、idCardBack（身份证反面）、photo（免冠照片）、contract（协议签署）步骤
		即：以后所有接口的location中都不会再返回以上步骤值
	（2)新增 - idCardInfo（身份证信息确认）
	（3)修改 - 身份证正面反面合并到身份证信息确认页面、协议签署合并到选择账户页面
		ps：简单说明一下，，接口并没有对此做什么特殊处理
三：开户结果页
	1⃣ 开户结果页可以从几个地方跳转过去，列举如下：
	（1）登录页（已完成开户的账户）
	（2）驳回情况下修复完成所有步骤后，会跳转到结果页
	（3）正常开户流程，完成最后一步 riskEvaluationReceipt（风险匹配）后会跳转到结果页
	因为情况比较多，建议可以做一个统一处理，只要后端接口返回的location为result（结果页）的情况下，通通跳转结果页。
	2⃣ 根据接口返回值，展示结果页的不同情况
		返回的lcoation为result时，出参格式一般如下：（*代表格式可变，此处用*代替）
		{
		    "progress": null,
		    "message": "",
		    "reject": "1",
		    "location": "result",
		    "token": "phUnM07H0X5oBr/7/Ma5wVVg3l9RdjM2x9L1KfG8ZAIYHlzOKoqXG1TyRcwzf1f0",
		    "status": "success",
		    "code": 200,
		    "pubkey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8rPqGGsar+BWI7vAtaaDOqphy41j5186hCU9DcchV4HWiv0HvQ3KXAEqHfZiAHZSyMSRMmDZVnqJwCVWFvKUPqU1RsCPZ9Imk+9ZXVkM3DDdw74v/s6YMNx8cTuxybRCJUfOKbyC79cnHgmQqqkODv+EnprBtNKE4k8g90jNmbwIDAQAB",
		    "info": {
		        "type": 6,
		        "info": *
		    }
		}
		说明：
			type（结果页类型）- 1、初审（刚完成开户）； 2、初审 （之前就完成开户了）；3、复审；4、开户成功；5、部分开户成功 ；6、驳回；7、开户失败
			info（展示该种类型的结果页所需的数据）- 按需返回，不同type返回的info结构不一样，type为 1、2、3 时，不返回info字段
		info结构详解：
			第一种：type为4或者5（开户成功 或者 部分开户成功），均返回开立的账户信息，info的结构如下，list为账号信息列表，其中flag代表该条目是否成功，0、成功 1、失败。 tip为提示文案
				{
		            "list": [
		                {
		                    "flag": 0,
		                    "name": "姓名",
		                    "value": "刘莎"
		                },
		                {
		                    "flag": 0,
		                    "name": "手机号",
		                    "value": "188****9223"
		                },
		                {
		                    "flag": 0,
		                    "name": "客户号",
		                    "value": "2280017129"
		                },
		                {
		                    "flag": 0,
		                    "name": "沪基金",
		                    "value": "F22***0605"
		                },
		                {
		                    "flag": 0,
		                    "name": "沪A账户",
		                    "value": "A16***1708"
		                },
		                {
		                    "flag": 0,
		                    "name": "深A账户",
		                    "value": "019***4494"
		                },
		                {
		                    "flag": 0,
		                    "name": "深基金",
		                    "value": "001***6694"
		                },
		                {
		                    "flag": 0,
		                    "name": "银行存管账户",
		                    "value": "--"
		                }
		            ],
		            "tip" : "为了您的信息安全，账户信息将以短信形式发送至您的手机，请查收！如未及时收到，请耐心等待。"
		        }
		    第二种：type为6（驳回），返回所有的驳回项，info的结构如下，内容为所有驳回项列表
		    	[
		            "客户姓名读取错误",
		            "联系地址填写不详细（请精确到门牌号、村、组等）"
		        ]
		    第三种：type为7（开户失败），返回所有的失败项，info的结构如下，内容为所有失败提示
		    	[
		            "尊敬的客户，您申请的证券账号未能开立成功，详询推荐人或95571，亦可临柜进行办理，谢谢！"
		        ]




新增接口
1、开户首页跳转or登录页面获取页码接口
地址：/api/login/tokaihu
入参：无
出参：
{
    "progress": "1/13",
    "message": "",
    "location": "login",
    "status": "success",
    "code": 200,
    "pubkey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8rPqGGsar+BWI7vAtaaDOqphy41j5186hCU9DcchV4HWiv0HvQ3KXAEqHfZiAHZSyMSRMmDZVnqJwCVWFvKUPqU1RsCPZ9Imk+9ZXVkM3DDdw74v/s6YMNx8cTuxybRCJUfOKbyC79cnHgmQqqkODv+EnprBtNKE4k8g90jNmbwIDAQAB"
}
说明：该接口设计为点击首页点击“立即开户”按钮时调用，获取下一步的步骤和页码
	但是h5开户，用户可以跳过首页，直接到登录页面，建议h5开户在登录页面初始化时调用


2、开户结果页驳回时获取下一步的接口
地址：/api/login/toreject
入参：无
出参：
{
    "progress": "4/13",
    "message": "",
    "reject": "1",
    "location": "updateUserInfo",
    "token": "phUnM07H0X5oBr/7/Ma5wVVg3l9RdjM2x9L1KfG8ZAIYHlzOKoqXG1TyRcwzf1f0",
    "status": "success",
    "code": 200,
    "pubkey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8rPqGGsar+BWI7vAtaaDOqphy41j5186hCU9DcchV4HWiv0HvQ3KXAEqHfZiAHZSyMSRMmDZVnqJwCVWFvKUPqU1RsCPZ9Imk+9ZXVkM3DDdw74v/s6YMNx8cTuxybRCJUfOKbyC79cnHgmQqqkODv+EnprBtNKE4k8g90jNmbwIDAQAB",
    "info": {
        "rejectItems": [
            "name",
            "addr"
        ]
    }
}
说明：与登录接口的处理逻辑类似
	location: 路径
	info.rejectItems: 驳回的条目列表


