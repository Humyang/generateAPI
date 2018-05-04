let raw = [{
        "moduleName": "卡券管理",
        "apiArray": [{
            "path": "/cardTicket/selectAll",
            "type": "get",
            "model": [{
                    "name": "createTime",
                    "comment": "创建时间"
                },
                {
                    "name": "id",
                    "comment": "id"
                },
                {
                    "name": "imgSrc",
                    "comment": "卡券封面图片"
                },
                {
                    "name": "modifyTime",
                    "comment": "修改时间"
                },
                {
                    "name": "operator",
                    "comment": "卡券操作人"
                },
                {
                    "name": "pagePlace",
                    "comment": "卡券页面位置"
                },
                {
                    "name": "place",
                    "comment": "卡券位置"
                },
                {
                    "name": "remark",
                    "comment": "卡券备注"
                },
                {
                    "name": "sort",
                    "comment": "卡券排序"
                },
                {
                    "name": "status",
                    "comment": "卡券状态"
                },
                {
                    "name": "type",
                    "comment": "卡券类型"
                },
                {
                    "name": "url",
                    "comment": "卡券url"
                }
            ]
        }]
    },
    {
        "moduleName": "商户管理",
        "apiArray": [{
                "path": "/merchant/add-bind",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/merchant/add-merchant",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "accountIdCardNo",
                        "comment": "银行卡所属证件"
                    },
                    {
                        "name": "accountName",
                        "comment": "银行卡户名,账户类型为1企业,需要与姓名一致"
                    },
                    {
                        "name": "accountNo",
                        "comment": "银行卡号"
                    },
                    {
                        "name": "accountPhoto",
                        "comment": "银行卡正面照片"
                    },
                    {
                        "name": "accountRegionId",
                        "comment": "开户行所属地区ID"
                    },
                    {
                        "name": "accountType",
                        "comment": "账户类型1-企业 2-个人"
                    },
                    {
                        "name": "address",
                        "comment": "商户地址"
                    },
                    {
                        "name": "bankId",
                        "comment": "银行ID"
                    },
                    {
                        "name": "bankName",
                        "comment": "开户支行名称"
                    },
                    {
                        "name": "city",
                        "comment": "市ID"
                    },
                    {
                        "name": "idCardNo",
                        "comment": "身份证号"
                    },
                    {
                        "name": "idCardPhoto",
                        "comment": "身份证正面"
                    },
                    {
                        "name": "idCardPhotoBack",
                        "comment": "身份证反面"
                    },
                    {
                        "name": "industryId",
                        "comment": "行业ID"
                    },
                    {
                        "name": "licenseNo",
                        "comment": "营业执照号"
                    },
                    {
                        "name": "licensePhoto",
                        "comment": "营业执照"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名"
                    },
                    {
                        "name": "merchantPhoto",
                        "comment": "商户门头照片"
                    },
                    {
                        "name": "merchantType",
                        "comment": "商户类型1-企业 2-个人"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orgPhoto",
                        "comment": "组织机构代码证"
                    },
                    {
                        "name": "protocolPhoto",
                        "comment": "税务登记证"
                    },
                    {
                        "name": "province",
                        "comment": "省ID"
                    },
                    {
                        "name": "regionId",
                        "comment": "地区ID"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/merchant/get-merchant",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "address",
                        "comment": "地址"
                    },
                    {
                        "name": "bankId",
                        "comment": "开户银行"
                    },
                    {
                        "name": "bankName",
                        "comment": "开户支行"
                    },
                    {
                        "name": "bankNo",
                        "comment": "银行卡号"
                    },
                    {
                        "name": "legalPerson",
                        "comment": "法人"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户编号"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    }
                ]
            },
            {
                "path": "/merchant/get-merchant-image",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/merchant/get-merchant-info",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "address",
                        "comment": "地址"
                    },
                    {
                        "name": "bankId",
                        "comment": "开户银行"
                    },
                    {
                        "name": "bankName",
                        "comment": "开户支行"
                    },
                    {
                        "name": "bankNo",
                        "comment": "银行卡号"
                    },
                    {
                        "name": "legalPerson",
                        "comment": "法人"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户编号"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    }
                ]
            },
            {
                "path": "/merchant/get-merchant-list",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isNearest",
                        "comment": "是否为最近操作商户"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID，源自ERP系统"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/merchant/get-merchant-nearest",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "status",
                        "comment": "商户状态，0-无商户，1-有商户未审核，2-有商户已审核"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/merchant/get-merchant-status",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/merchant/get-merchant-status-update",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/merchant/getMerchantLogo",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "createTime",
                        "comment": null
                    },
                    {
                        "name": "logoPath",
                        "comment": "图片路径"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "modifyTime",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/merchant/modify-merchant-pwd",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/merchant/update-merchant-nearest",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/merchant/upload-merchant-image",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "photoId",
                        "comment": "图片的ID"
                    },
                    {
                        "name": "fileData",
                        "comment": "图片数据"
                    },
                    {
                        "name": "photoType",
                        "comment": "图片类型 0-身份证 1-营业执照 2-协议照片 3-组织机构代码证 4-商户信息调查表 5-商户账号照片 6-租赁合同照片 7-征信授权书照片"
                    }
                ]
            },
            {
                "path": "/merchant/verify-merchant-pwd",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isDefaultPwd",
                        "comment": "是否为默认密码"
                    },
                    {
                        "name": "isVerifySuccess",
                        "comment": "密码验证是否通过"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户Id"
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "店员模块",
        "apiArray": [{
                "path": "/assistant/after-login",
                "type": "get",
                "model": [{
                        "name": "amount",
                        "comment": "金额"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "userRole",
                        "comment": "userRole"
                    },
                    {
                        "name": "vol",
                        "comment": "交易笔数"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/clock-in",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/clock-out",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/demotion",
                "type": "post",
                "model": [{
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/detail",
                "type": "get",
                "model": [{
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderVoList",
                        "comment": "交易记录"
                    },
                    {
                        "name": "sumAmount",
                        "comment": "总金额"
                    },
                    {
                        "name": "sumVol",
                        "comment": "总比数"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "lowOrderNo",
                        "comment": "下游单号"
                    },
                    {
                        "name": "orderAmount",
                        "comment": "金额"
                    },
                    {
                        "name": "payStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "payTime",
                        "comment": "支付时间"
                    },
                    {
                        "name": "payType",
                        "comment": "类型"
                    }
                ]
            },
            {
                "path": "/assistant/detail-openId",
                "type": "post",
                "model": [{
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/list",
                "type": "get",
                "model": [{
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "createdAt",
                        "comment": "注册时间"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "userRole",
                        "comment": "0游客，1商户，2店长，3店员,4财务"
                    }
                ]
            },
            {
                "path": "/assistant/mobile/exists",
                "type": "get",
                "model": []
            },
            {
                "path": "/assistant/modify-name",
                "type": "post",
                "model": [{
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/open-id/exists",
                "type": "get",
                "model": []
            },
            {
                "path": "/assistant/order-list",
                "type": "get",
                "model": [{
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "lowOrderNo",
                        "comment": "下游单号"
                    },
                    {
                        "name": "orderAmount",
                        "comment": "金额"
                    },
                    {
                        "name": "payStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "payTime",
                        "comment": "支付时间"
                    },
                    {
                        "name": "payType",
                        "comment": "类型"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/order-overview",
                "type": "get",
                "model": [{
                        "name": "amount",
                        "comment": "金额"
                    },
                    {
                        "name": "vol",
                        "comment": "笔数"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/promote",
                "type": "post",
                "model": [{
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/register",
                "type": "post",
                "model": []
            },
            {
                "path": "/assistant/register-code",
                "type": "post",
                "model": [{
                        "name": "merchantId",
                        "comment": null
                    },
                    {
                        "name": "shopId",
                        "comment": null
                    },
                    {
                        "name": "type",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/register-code-info",
                "type": "get",
                "model": [{
                        "name": "address",
                        "comment": "地址"
                    },
                    {
                        "name": "name",
                        "comment": "门店名称"
                    }
                ]
            },
            {
                "path": "/assistant/remove",
                "type": "post",
                "model": [{
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/remove-binding",
                "type": "post",
                "model": [{
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/assistant/subscribe",
                "type": "get",
                "model": []
            }
        ]
    },
    {
        "moduleName": "数据字典",
        "apiArray": [{
                "path": "/dict/bank",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "rows",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "codeQcloud",
                        "comment": null
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "name",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/dict/industry",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "id",
                        "comment": "id"
                    },
                    {
                        "name": "level",
                        "comment": "级别:1-大类,2-小类,3-行业"
                    },
                    {
                        "name": "name",
                        "comment": "名称"
                    }
                ]
            },
            {
                "path": "/dict/list",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/dict/location",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "id",
                        "comment": "id"
                    },
                    {
                        "name": "level",
                        "comment": "级别:1-省,2-市,3-区"
                    },
                    {
                        "name": "name",
                        "comment": "名称"
                    },
                    {
                        "name": "parentId",
                        "comment": "上级ID,省级的上级ID为0"
                    }
                ]
            },
            {
                "path": "/dict/location-get",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "id",
                        "comment": "id"
                    },
                    {
                        "name": "level",
                        "comment": "级别:1-省,2-市,3-区"
                    },
                    {
                        "name": "name",
                        "comment": "名称"
                    },
                    {
                        "name": "parentId",
                        "comment": "上级ID,省级的上级ID为0"
                    }
                ]
            },
            {
                "path": "/dict/test",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "用户权限体系",
        "apiArray": [{
                "path": "/user/contactUs",
                "type": "get",
                "model": []
            },
            {
                "path": "/user/login-openId",
                "type": "get",
                "model": [{
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/user/mobileLogin",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/user/modifyMobile",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/user/modifyPass",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/user/oauth/code/openid",
                "type": "get",
                "model": []
            },
            {
                "path": "/user/oauth/wx/code",
                "type": "get",
                "model": [{
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/user/redirect",
                "type": "get",
                "model": []
            },
            {
                "path": "/user/redirect/{method}/{param}",
                "type": "get",
                "model": []
            },
            {
                "path": "/user/refreshToken",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/user/register",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/user/sendVerifCode",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/user/uNameLogin",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/user/upload-image-sign",
                "type": "get",
                "model": []
            },
            {
                "path": "/user/verifCurrMobile",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/user/verifyPass",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isDefaultPwd",
                        "comment": "是否为默认密码"
                    },
                    {
                        "name": "isVerifySuccess",
                        "comment": "密码验证是否通过"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户Id"
                    }
                ]
            },
            {
                "path": "/user/verify_invite_code",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/user/wechat/js/sign",
                "type": "get",
                "model": []
            }
        ]
    },
    {
        "moduleName": "短信模块",
        "apiArray": [{
            "path": "/sms/verify-sms-code",
            "type": "post",
            "model": [{
                    "name": "code",
                    "comment": null
                },
                {
                    "name": "errMsg",
                    "comment": null
                },
                {
                    "name": "extra",
                    "comment": null
                }
            ]
        }]
    },
    {
        "moduleName": "缴费搜索模块",
        "apiArray": [{
                "path": "/pay-search/item-list/payer",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": "款项列表"
                    },
                    {
                        "name": "total",
                        "comment": "总数"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "extendedField1",
                        "comment": "扩展字段1"
                    },
                    {
                        "name": "extendedField10",
                        "comment": "扩展字段10"
                    },
                    {
                        "name": "extendedField2",
                        "comment": "扩展字段2"
                    },
                    {
                        "name": "extendedField3",
                        "comment": "扩展字段3"
                    },
                    {
                        "name": "extendedField4",
                        "comment": "扩展字段4"
                    },
                    {
                        "name": "extendedField5",
                        "comment": "扩展字段5"
                    },
                    {
                        "name": "extendedField6",
                        "comment": "扩展字段6"
                    },
                    {
                        "name": "extendedField7",
                        "comment": "扩展字段7"
                    },
                    {
                        "name": "extendedField8",
                        "comment": "扩展字段8"
                    },
                    {
                        "name": "extendedField9",
                        "comment": "扩展字段9"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderNo",
                        "comment": "支付订单号"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "smsErrMsg",
                        "comment": "最近一次短信发送失败原因"
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "payerId",
                        "comment": "用户编号"
                    }
                ]
            },
            {
                "path": "/pay-search/item-list/plan",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": "款项列表"
                    },
                    {
                        "name": "total",
                        "comment": "总数"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "extendedField1",
                        "comment": "扩展字段1"
                    },
                    {
                        "name": "extendedField10",
                        "comment": "扩展字段10"
                    },
                    {
                        "name": "extendedField2",
                        "comment": "扩展字段2"
                    },
                    {
                        "name": "extendedField3",
                        "comment": "扩展字段3"
                    },
                    {
                        "name": "extendedField4",
                        "comment": "扩展字段4"
                    },
                    {
                        "name": "extendedField5",
                        "comment": "扩展字段5"
                    },
                    {
                        "name": "extendedField6",
                        "comment": "扩展字段6"
                    },
                    {
                        "name": "extendedField7",
                        "comment": "扩展字段7"
                    },
                    {
                        "name": "extendedField8",
                        "comment": "扩展字段8"
                    },
                    {
                        "name": "extendedField9",
                        "comment": "扩展字段9"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderNo",
                        "comment": "支付订单号"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "smsErrMsg",
                        "comment": "最近一次短信发送失败原因"
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "payerId",
                        "comment": "用户编号"
                    }
                ]
            },
            {
                "path": "/pay-search/merchant-list",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "merchantAddress",
                        "comment": "商户地址"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名"
                    },
                    {
                        "name": "page",
                        "comment": "第几页,从0开始"
                    },
                    {
                        "name": "size",
                        "comment": "每页数量"
                    }
                ]
            },
            {
                "path": "/pay-search/payer-list",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": "款项列表"
                    },
                    {
                        "name": "total",
                        "comment": "总数"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "extendedField1",
                        "comment": "扩展字段1"
                    },
                    {
                        "name": "extendedField10",
                        "comment": "扩展字段10"
                    },
                    {
                        "name": "extendedField2",
                        "comment": "扩展字段2"
                    },
                    {
                        "name": "extendedField3",
                        "comment": "扩展字段3"
                    },
                    {
                        "name": "extendedField4",
                        "comment": "扩展字段4"
                    },
                    {
                        "name": "extendedField5",
                        "comment": "扩展字段5"
                    },
                    {
                        "name": "extendedField6",
                        "comment": "扩展字段6"
                    },
                    {
                        "name": "extendedField7",
                        "comment": "扩展字段7"
                    },
                    {
                        "name": "extendedField8",
                        "comment": "扩展字段8"
                    },
                    {
                        "name": "extendedField9",
                        "comment": "扩展字段9"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderNo",
                        "comment": "支付订单号"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "smsErrMsg",
                        "comment": "最近一次短信发送失败原因"
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "page",
                        "comment": null
                    },
                    {
                        "name": "sign",
                        "comment": "搜索标识"
                    },
                    {
                        "name": "size",
                        "comment": null
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "缴费数据模块",
        "apiArray": [{
                "path": "/payment-data/add",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "data",
                        "comment": "数据"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "extendedField1",
                        "comment": "扩展字段1"
                    },
                    {
                        "name": "extendedField10",
                        "comment": "扩展字段10"
                    },
                    {
                        "name": "extendedField2",
                        "comment": "扩展字段2"
                    },
                    {
                        "name": "extendedField3",
                        "comment": "扩展字段3"
                    },
                    {
                        "name": "extendedField4",
                        "comment": "扩展字段4"
                    },
                    {
                        "name": "extendedField5",
                        "comment": "扩展字段5"
                    },
                    {
                        "name": "extendedField6",
                        "comment": "扩展字段6"
                    },
                    {
                        "name": "extendedField7",
                        "comment": "扩展字段7"
                    },
                    {
                        "name": "extendedField8",
                        "comment": "扩展字段8"
                    },
                    {
                        "name": "extendedField9",
                        "comment": "扩展字段9"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderNo",
                        "comment": "支付订单号"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "smsErrMsg",
                        "comment": "最近一次短信发送失败原因"
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/payment-data/add-single",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/payment-data/del",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "id",
                        "comment": "id"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/payment-data/detail",
                "type": "get",
                "model": [{
                        "name": "amount",
                        "comment": "款项金额"
                    },
                    {
                        "name": "endTime",
                        "comment": "结束时间"
                    },
                    {
                        "name": "id",
                        "comment": "id"
                    },
                    {
                        "name": "item",
                        "comment": "款项名称"
                    },
                    {
                        "name": "mark",
                        "comment": "手机号"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "startTime",
                        "comment": "开始时间"
                    },
                    {
                        "name": "uuid",
                        "comment": "uuid"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/payment-data/detail-uuid",
                "type": "get",
                "model": [{
                        "name": "amount",
                        "comment": "款项金额"
                    },
                    {
                        "name": "endTime",
                        "comment": "结束时间"
                    },
                    {
                        "name": "id",
                        "comment": "id"
                    },
                    {
                        "name": "item",
                        "comment": "款项名称"
                    },
                    {
                        "name": "mark",
                        "comment": "手机号"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "startTime",
                        "comment": "开始时间"
                    },
                    {
                        "name": "uuid",
                        "comment": "uuid"
                    }
                ]
            },
            {
                "path": "/payment-data/list",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "id",
                        "comment": "序号"
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderNo",
                        "comment": "支付订单号"
                    },
                    {
                        "name": "payAt",
                        "comment": "支付时间"
                    },
                    {
                        "name": "payType",
                        "comment": "支付方式"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "smsErrMsg",
                        "comment": "最近一次短信发送失败原因"
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "endAt",
                        "comment": "支付结束时间"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机"
                    },
                    {
                        "name": "name",
                        "comment": "name"
                    },
                    {
                        "name": "orderNo",
                        "comment": "orderNo"
                    },
                    {
                        "name": "page",
                        "comment": null
                    },
                    {
                        "name": "payType",
                        "comment": "支付方式"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "size",
                        "comment": null
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "startAt",
                        "comment": "支付开始时间"
                    },
                    {
                        "name": "status",
                        "comment": "付款状态"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/payment-data/list-export",
                "type": "get",
                "model": []
            },
            {
                "path": "/payment-data/list/by-merchant-identity",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": "款项列表"
                    },
                    {
                        "name": "total",
                        "comment": "总数"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "extendedField1",
                        "comment": "扩展字段1"
                    },
                    {
                        "name": "extendedField10",
                        "comment": "扩展字段10"
                    },
                    {
                        "name": "extendedField2",
                        "comment": "扩展字段2"
                    },
                    {
                        "name": "extendedField3",
                        "comment": "扩展字段3"
                    },
                    {
                        "name": "extendedField4",
                        "comment": "扩展字段4"
                    },
                    {
                        "name": "extendedField5",
                        "comment": "扩展字段5"
                    },
                    {
                        "name": "extendedField6",
                        "comment": "扩展字段6"
                    },
                    {
                        "name": "extendedField7",
                        "comment": "扩展字段7"
                    },
                    {
                        "name": "extendedField8",
                        "comment": "扩展字段8"
                    },
                    {
                        "name": "extendedField9",
                        "comment": "扩展字段9"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderNo",
                        "comment": "支付订单号"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "smsErrMsg",
                        "comment": "最近一次短信发送失败原因"
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "mobileOrIdCardNo",
                        "comment": "手机号或身份证号"
                    },
                    {
                        "name": "page",
                        "comment": null
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "size",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/payment-data/list/multi-plan",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": "款项列表"
                    },
                    {
                        "name": "total",
                        "comment": "总数"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "extendedField1",
                        "comment": "扩展字段1"
                    },
                    {
                        "name": "extendedField10",
                        "comment": "扩展字段10"
                    },
                    {
                        "name": "extendedField2",
                        "comment": "扩展字段2"
                    },
                    {
                        "name": "extendedField3",
                        "comment": "扩展字段3"
                    },
                    {
                        "name": "extendedField4",
                        "comment": "扩展字段4"
                    },
                    {
                        "name": "extendedField5",
                        "comment": "扩展字段5"
                    },
                    {
                        "name": "extendedField6",
                        "comment": "扩展字段6"
                    },
                    {
                        "name": "extendedField7",
                        "comment": "扩展字段7"
                    },
                    {
                        "name": "extendedField8",
                        "comment": "扩展字段8"
                    },
                    {
                        "name": "extendedField9",
                        "comment": "扩展字段9"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderNo",
                        "comment": "支付订单号"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "smsErrMsg",
                        "comment": "最近一次短信发送失败原因"
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "page",
                        "comment": null
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "size",
                        "comment": null
                    },
                    {
                        "name": "status",
                        "comment": "缴费状态"
                    }
                ]
            },
            {
                "path": "/payment-data/list/single-plan",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": "款项列表"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "total",
                        "comment": "总数"
                    },
                    {
                        "name": "amount",
                        "comment": "款项金额"
                    },
                    {
                        "name": "id",
                        "comment": "id"
                    },
                    {
                        "name": "item",
                        "comment": "款项名称"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "是否付款"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "page",
                        "comment": null
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "size",
                        "comment": null
                    },
                    {
                        "name": "status",
                        "comment": "缴费状态"
                    }
                ]
            },
            {
                "path": "/payment-data/list/single-sms",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": "款项列表"
                    },
                    {
                        "name": "total",
                        "comment": "总数"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "extendedField1",
                        "comment": "扩展字段1"
                    },
                    {
                        "name": "extendedField10",
                        "comment": "扩展字段10"
                    },
                    {
                        "name": "extendedField2",
                        "comment": "扩展字段2"
                    },
                    {
                        "name": "extendedField3",
                        "comment": "扩展字段3"
                    },
                    {
                        "name": "extendedField4",
                        "comment": "扩展字段4"
                    },
                    {
                        "name": "extendedField5",
                        "comment": "扩展字段5"
                    },
                    {
                        "name": "extendedField6",
                        "comment": "扩展字段6"
                    },
                    {
                        "name": "extendedField7",
                        "comment": "扩展字段7"
                    },
                    {
                        "name": "extendedField8",
                        "comment": "扩展字段8"
                    },
                    {
                        "name": "extendedField9",
                        "comment": "扩展字段9"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "orderNo",
                        "comment": "支付订单号"
                    },
                    {
                        "name": "paymentStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "smsErrMsg",
                        "comment": "最近一次短信发送失败原因"
                    },
                    {
                        "name": "smsStatus",
                        "comment": "短信发送状态"
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "smsId",
                        "comment": "短信ID"
                    }
                ]
            },
            {
                "path": "/payment-data/modify",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "amount",
                        "comment": "金额"
                    },
                    {
                        "name": "id",
                        "comment": "id"
                    },
                    {
                        "name": "item",
                        "comment": "项目名称"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "缴费模块",
        "apiArray": [{
                "path": "/payment/jft",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/payment/jft-wx",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "openId",
                        "comment": null
                    },
                    {
                        "name": "payIdList",
                        "comment": null
                    },
                    {
                        "name": "returnUrl",
                        "comment": null
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "缴费模版模块",
        "apiArray": [{
                "path": "/payment-template/add",
                "type": "post",
                "model": [{
                        "name": "columnNames",
                        "comment": "列名"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "creator",
                        "comment": "创建人"
                    },
                    {
                        "name": "editable",
                        "comment": "可编辑"
                    },
                    {
                        "name": "fields",
                        "comment": "字段"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "columnNames",
                        "comment": "列名"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/payment-template/del",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/payment-template/download",
                "type": "get",
                "model": [{
                        "name": "columnNames",
                        "comment": "列名"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "creator",
                        "comment": "创建人"
                    },
                    {
                        "name": "editable",
                        "comment": "可编辑"
                    },
                    {
                        "name": "fields",
                        "comment": "字段"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    }
                ]
            },
            {
                "path": "/payment-template/get-by-id",
                "type": "get",
                "model": [{
                        "name": "columnNames",
                        "comment": "列名"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "creator",
                        "comment": "创建人"
                    },
                    {
                        "name": "editable",
                        "comment": "可编辑"
                    },
                    {
                        "name": "fields",
                        "comment": "字段"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    }
                ]
            },
            {
                "path": "/payment-template/get-by-merchant",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "columnNames",
                        "comment": "列名"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "creator",
                        "comment": "创建人"
                    },
                    {
                        "name": "editable",
                        "comment": "可编辑"
                    },
                    {
                        "name": "fields",
                        "comment": "字段"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID，不能为空"
                    },
                    {
                        "name": "page",
                        "comment": "页码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID，可以空"
                    },
                    {
                        "name": "size",
                        "comment": "每页大小"
                    }
                ]
            },
            {
                "path": "/payment-template/get-by-name",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "columnNames",
                        "comment": "列名"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "creator",
                        "comment": "创建人"
                    },
                    {
                        "name": "editable",
                        "comment": "可编辑"
                    },
                    {
                        "name": "fields",
                        "comment": "字段"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "page",
                        "comment": "页码"
                    },
                    {
                        "name": "size",
                        "comment": "每页大小"
                    }
                ]
            },
            {
                "path": "/payment-template/list",
                "type": "post",
                "model": [{
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "columnNames",
                        "comment": "列名"
                    },
                    {
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "creator",
                        "comment": "创建人"
                    },
                    {
                        "name": "editable",
                        "comment": "可编辑"
                    },
                    {
                        "name": "fields",
                        "comment": "字段"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "updatedAt",
                        "comment": "更新时间"
                    },
                    {
                        "name": "creator",
                        "comment": "创建人"
                    },
                    {
                        "name": "endAt",
                        "comment": "结束时间"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "name",
                        "comment": "模版名称"
                    },
                    {
                        "name": "page",
                        "comment": null
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "size",
                        "comment": null
                    },
                    {
                        "name": "startAt",
                        "comment": "开始日期"
                    },
                    {
                        "name": "used",
                        "comment": "使用过"
                    }
                ]
            },
            {
                "path": "/payment-template/modify",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "columnNames",
                        "comment": "列名"
                    },
                    {
                        "name": "id",
                        "comment": "模版ID"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "name",
                        "comment": "名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/payment-template/upload",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "缴费通短信模块",
        "apiArray": [{
                "path": "/sms/send",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "paymentId",
                        "comment": "缴费信息ID"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "templateId",
                        "comment": "短信模板ID"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/sms/send-multi",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "paymentIds",
                        "comment": "多条缴费信息ID"
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "templateId",
                        "comment": "短信模板ID"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/sms/send-plan",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "templateId",
                        "comment": "短信模板ID"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/sms/template",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "content",
                        "comment": "模板内容"
                    },
                    {
                        "name": "id",
                        "comment": "模板ID"
                    },
                    {
                        "name": "page",
                        "comment": "第几页,从0开始"
                    },
                    {
                        "name": "size",
                        "comment": "每页数量"
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "缴费通短信管理模块",
        "apiArray": [{
                "path": "/sms-manager/disable",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/sms-manager/get-sms-detail",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "sendStatus",
                        "comment": "短信发送开关"
                    },
                    {
                        "name": "sentNum",
                        "comment": "短信已发数量"
                    },
                    {
                        "name": "smsTotal",
                        "comment": "短信总数"
                    },
                    {
                        "name": "surplusNum",
                        "comment": "短信剩余数量"
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "缴费通计划模块",
        "apiArray": [{
                "path": "/plan/add",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "planId",
                        "comment": null
                    },
                    {
                        "name": "endTime",
                        "comment": "执行结束时间 yyyy-MM-dd"
                    },
                    {
                        "name": "merchantId",
                        "comment": "所属商户ID"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "remark",
                        "comment": "备注"
                    },
                    {
                        "name": "shopId",
                        "comment": "所属门店ID"
                    },
                    {
                        "name": "startTime",
                        "comment": "执行开始时间 yyyy-MM-dd"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/plan/add-simple",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "planId",
                        "comment": null
                    },
                    {
                        "name": "endTime",
                        "comment": "执行结束时间 yyyy-MM-dd"
                    },
                    {
                        "name": "list",
                        "comment": "项目列表"
                    },
                    {
                        "name": "merchantId",
                        "comment": "所属商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "姓名"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "remark",
                        "comment": "备注"
                    },
                    {
                        "name": "shopId",
                        "comment": "所属门店ID"
                    },
                    {
                        "name": "sign",
                        "comment": "缴费编号"
                    },
                    {
                        "name": "startTime",
                        "comment": "执行开始时间 yyyy-MM-dd"
                    },
                    {
                        "name": "amount",
                        "comment": "缴费金额"
                    },
                    {
                        "name": "item",
                        "comment": "缴费项目"
                    },
                    {
                        "name": "mark",
                        "comment": "备注"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/plan/choose-template",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "planId",
                        "comment": "计划ID"
                    },
                    {
                        "name": "templateId",
                        "comment": "模板ID"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/plan/delete",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/plan/get",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "createTime",
                        "comment": "创建时间"
                    },
                    {
                        "name": "createUser",
                        "comment": "创建人"
                    },
                    {
                        "name": "endTime",
                        "comment": "执行结束时间"
                    },
                    {
                        "name": "hasPaidCount",
                        "comment": "计划内已缴费人数"
                    },
                    {
                        "name": "hasPaidExist",
                        "comment": "是否存在已缴费项目"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "notPaidCount",
                        "comment": "计划内未缴费人数"
                    },
                    {
                        "name": "planId",
                        "comment": "计划编号"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "planType",
                        "comment": "模版类型：0-单人，1-多人"
                    },
                    {
                        "name": "remark",
                        "comment": "备注"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "startTime",
                        "comment": "执行开始时间"
                    },
                    {
                        "name": "status",
                        "comment": "计划状态：未执行，执行中，终止缴费，已过期，已删除"
                    },
                    {
                        "name": "statusCode",
                        "comment": null
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "totalCount",
                        "comment": "计划内总人数"
                    },
                    {
                        "name": "updateTime",
                        "comment": "更新时间"
                    },
                    {
                        "name": "updateUser",
                        "comment": "更新人"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/plan/list",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "createTime",
                        "comment": "创建时间"
                    },
                    {
                        "name": "createUser",
                        "comment": "创建人"
                    },
                    {
                        "name": "endTime",
                        "comment": "执行结束时间"
                    },
                    {
                        "name": "hasPaidCount",
                        "comment": "计划内已缴费人数"
                    },
                    {
                        "name": "hasPaidExist",
                        "comment": "是否存在已缴费项目"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "notPaidCount",
                        "comment": "计划内未缴费人数"
                    },
                    {
                        "name": "planId",
                        "comment": "计划编号"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "planType",
                        "comment": "模版类型：0-单人，1-多人"
                    },
                    {
                        "name": "remark",
                        "comment": "备注"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "startTime",
                        "comment": "执行开始时间"
                    },
                    {
                        "name": "status",
                        "comment": "计划状态：未执行，执行中，终止缴费，已过期，已删除"
                    },
                    {
                        "name": "statusCode",
                        "comment": null
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "totalCount",
                        "comment": "计划内总人数"
                    },
                    {
                        "name": "updateTime",
                        "comment": "更新时间"
                    },
                    {
                        "name": "updateUser",
                        "comment": "更新人"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "createTimeEnd",
                        "comment": "计划结束时间开始 yyyy-MM-dd"
                    },
                    {
                        "name": "createTimeStart",
                        "comment": "计划创建时间开始 yyyy-MM-dd"
                    },
                    {
                        "name": "createUser",
                        "comment": "创建人"
                    },
                    {
                        "name": "endTime",
                        "comment": "执行结束时间 yyyy-MM-dd"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "page",
                        "comment": "第几页,从0开始"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "size",
                        "comment": "每页数量"
                    },
                    {
                        "name": "startTime",
                        "comment": "执行开始时间 yyyy-MM-dd"
                    },
                    {
                        "name": "status",
                        "comment": "计划状态：CREATE-未执行，PAY-执行中，TERMINATE-终止缴费，EXPIRE-已过期，DELETED-已删除"
                    }
                ]
            },
            {
                "path": "/plan/list-details",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "createTime",
                        "comment": "创建时间"
                    },
                    {
                        "name": "createUser",
                        "comment": "创建人"
                    },
                    {
                        "name": "endTime",
                        "comment": "执行结束时间"
                    },
                    {
                        "name": "hasPaidAmount",
                        "comment": "已缴费金额"
                    },
                    {
                        "name": "hasPaidCount",
                        "comment": "计划内已缴费人数"
                    },
                    {
                        "name": "hasPaidExist",
                        "comment": "是否存在已缴费项目"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "notPaidAmount",
                        "comment": "未缴费金额"
                    },
                    {
                        "name": "notPaidCount",
                        "comment": "计划内未缴费人数"
                    },
                    {
                        "name": "planId",
                        "comment": "计划编号"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "planType",
                        "comment": "模版类型：0-单人，1-多人"
                    },
                    {
                        "name": "remark",
                        "comment": "备注"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "startTime",
                        "comment": "执行开始时间"
                    },
                    {
                        "name": "status",
                        "comment": "计划状态：未执行，执行中，终止缴费，已过期，已删除"
                    },
                    {
                        "name": "statusCode",
                        "comment": null
                    },
                    {
                        "name": "templateId",
                        "comment": "模版ID"
                    },
                    {
                        "name": "totalAmount",
                        "comment": "计划收费总金额"
                    },
                    {
                        "name": "totalCount",
                        "comment": "计划内总人数"
                    },
                    {
                        "name": "updateTime",
                        "comment": "更新时间"
                    },
                    {
                        "name": "updateUser",
                        "comment": "更新人"
                    },
                    {
                        "name": "uuid",
                        "comment": null
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "page",
                        "comment": "第几页,从0开始"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "size",
                        "comment": "每页数量"
                    },
                    {
                        "name": "status",
                        "comment": "计划状态：CREATE-未执行，PAY-执行中，TERMINATE-终止缴费，EXPIRE-已过期，DELETED-已删除"
                    }
                ]
            },
            {
                "path": "/plan/modify",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "endTime",
                        "comment": "计划执行结束时间"
                    },
                    {
                        "name": "planId",
                        "comment": "计划编号"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "remark",
                        "comment": "备注"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "startTime",
                        "comment": "计划执行开始时间"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/plan/nearest-detail",
                "type": "get",
                "model": [{
                        "name": "hasPaidAmount",
                        "comment": "已缴费金额"
                    },
                    {
                        "name": "hasPaidCount",
                        "comment": "已缴费人数"
                    },
                    {
                        "name": "notPaidAmount",
                        "comment": "未缴费金额"
                    },
                    {
                        "name": "notPaidCount",
                        "comment": "未缴费人数"
                    },
                    {
                        "name": "planId",
                        "comment": "计划编号"
                    },
                    {
                        "name": "planMerchantStatus",
                        "comment": "商户计划状态"
                    },
                    {
                        "name": "planName",
                        "comment": "计划名称"
                    },
                    {
                        "name": "totalAmount",
                        "comment": "计划收费总金额"
                    },
                    {
                        "name": "totalCount",
                        "comment": "计划收费人数"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/plan/terminate",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "聚合码管理",
        "apiArray": [{
                "path": "/aggcode/bind-to-shop",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/aggcode/list-by-merchant",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "聚合码编号"
                    },
                    {
                        "name": "managerName",
                        "comment": "店长名字"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "status",
                        "comment": "状态"
                    }
                ]
            },
            {
                "path": "/aggcode/remove-bind",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/aggcode/stopping-request",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "订单管理",
        "apiArray": [{
                "path": "/order/collection",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/order/collection-wx",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/order/create",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/order/create-wx",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/order/detail",
                "type": "get",
                "model": [{
                        "name": "amount",
                        "comment": "实付金额"
                    },
                    {
                        "name": "createdAt",
                        "comment": "下单时间"
                    },
                    {
                        "name": "lowOrderNo",
                        "comment": "本地订单号"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "orderNo",
                        "comment": "订单号"
                    },
                    {
                        "name": "payAt",
                        "comment": "支付时间"
                    },
                    {
                        "name": "payStatus",
                        "comment": "状态"
                    },
                    {
                        "name": "payType",
                        "comment": "支付方式"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    }
                ]
            },
            {
                "path": "/order/list",
                "type": "get",
                "model": [{
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "lowOrderNo",
                        "comment": "下游单号"
                    },
                    {
                        "name": "orderAmount",
                        "comment": "金额"
                    },
                    {
                        "name": "payStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "payTime",
                        "comment": "支付时间"
                    },
                    {
                        "name": "payType",
                        "comment": "类型"
                    }
                ]
            },
            {
                "path": "/order/list-amount",
                "type": "get",
                "model": [{
                        "name": "createdAt",
                        "comment": "创建时间"
                    },
                    {
                        "name": "lowOrderNo",
                        "comment": "下游单号"
                    },
                    {
                        "name": "orderAmount",
                        "comment": "金额"
                    },
                    {
                        "name": "payStatus",
                        "comment": "支付状态"
                    },
                    {
                        "name": "payTime",
                        "comment": "支付时间"
                    },
                    {
                        "name": "payType",
                        "comment": "类型"
                    }
                ]
            },
            {
                "path": "/order/shop-info-by-code",
                "type": "get",
                "model": [{
                        "name": "address",
                        "comment": "地址"
                    },
                    {
                        "name": "name",
                        "comment": "门店名称"
                    }
                ]
            },
            {
                "path": "/order/shop-info-by-id",
                "type": "get",
                "model": [{
                        "name": "address",
                        "comment": "地址"
                    },
                    {
                        "name": "name",
                        "comment": "门店名称"
                    }
                ]
            }
        ]
    },
    {
        "moduleName": "门店模块",
        "apiArray": [{
                "path": "/shop/add-shop",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "city",
                        "comment": "市"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "province",
                        "comment": "省"
                    },
                    {
                        "name": "regionId",
                        "comment": "所在地区ID"
                    },
                    {
                        "name": "shopAddr",
                        "comment": "门店地址"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            },
            {
                "path": "/shop/exists-manager",
                "type": "get",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/shop/get-shop-info",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "city",
                        "comment": "市ID"
                    },
                    {
                        "name": "managerId",
                        "comment": "店长ID"
                    },
                    {
                        "name": "managerMobile",
                        "comment": "店长手机"
                    },
                    {
                        "name": "managerName",
                        "comment": "店长名字"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "province",
                        "comment": "省ID"
                    },
                    {
                        "name": "regionId",
                        "comment": "所在地区ID"
                    },
                    {
                        "name": "shopAddr",
                        "comment": "门店地址"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    }
                ]
            },
            {
                "path": "/shop/list",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "aggCodeCount",
                        "comment": "聚合码数量"
                    },
                    {
                        "name": "id",
                        "comment": "门店ID"
                    },
                    {
                        "name": "managerId",
                        "comment": "店长ID"
                    },
                    {
                        "name": "managerName",
                        "comment": "店长名字"
                    },
                    {
                        "name": "merchantId",
                        "comment": "所属商户ID，源自ERP系统"
                    },
                    {
                        "name": "mobile",
                        "comment": "店长手机号"
                    },
                    {
                        "name": "name",
                        "comment": "门店名称"
                    },
                    {
                        "name": "shopAddr",
                        "comment": "门店地址"
                    }
                ]
            },
            {
                "path": "/shop/list-by-merchant",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "city",
                        "comment": "市ID"
                    },
                    {
                        "name": "managerId",
                        "comment": "店长ID"
                    },
                    {
                        "name": "managerMobile",
                        "comment": "店长手机"
                    },
                    {
                        "name": "managerName",
                        "comment": "店长名字"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "province",
                        "comment": "省ID"
                    },
                    {
                        "name": "regionId",
                        "comment": "所在地区ID"
                    },
                    {
                        "name": "shopAddr",
                        "comment": "门店地址"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    }
                ]
            },
            {
                "path": "/shop/list-simple",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "page",
                        "comment": "第几页,从0开始"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "size",
                        "comment": "每页数量"
                    }
                ]
            },
            {
                "path": "/shop/search-by-merchant",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "data",
                        "comment": null
                    },
                    {
                        "name": "total",
                        "comment": null
                    },
                    {
                        "name": "shopAddress",
                        "comment": "地址"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "page",
                        "comment": "第几页,从0开始"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "size",
                        "comment": "每页数量"
                    }
                ]
            },
            {
                "path": "/shop/search-shop-list",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "agentMerchantId",
                        "comment": "代理商系统商户ID"
                    },
                    {
                        "name": "aggCodeCount",
                        "comment": "聚合码数量"
                    },
                    {
                        "name": "managerName",
                        "comment": "店长名字"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "regionId",
                        "comment": "所在地区ID"
                    },
                    {
                        "name": "shopAddr",
                        "comment": "门店地址"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "updateDate",
                        "comment": "更新时间"
                    },
                    {
                        "name": "merchantName",
                        "comment": "商户名称"
                    },
                    {
                        "name": "page",
                        "comment": null
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "size",
                        "comment": null
                    }
                ]
            },
            {
                "path": "/shop/update-shop",
                "type": "post",
                "model": [{
                        "name": "code",
                        "comment": null
                    },
                    {
                        "name": "errMsg",
                        "comment": null
                    },
                    {
                        "name": "extra",
                        "comment": null
                    },
                    {
                        "name": "isSuccess",
                        "comment": null
                    },
                    {
                        "name": "msg",
                        "comment": null
                    },
                    {
                        "name": "city",
                        "comment": "市"
                    },
                    {
                        "name": "merchantId",
                        "comment": "商户ID"
                    },
                    {
                        "name": "province",
                        "comment": "省"
                    },
                    {
                        "name": "regionId",
                        "comment": "地区ID"
                    },
                    {
                        "name": "shopAddr",
                        "comment": "门店地址"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "shopName",
                        "comment": "门店名称"
                    },
                    {
                        "name": "permission",
                        "comment": null
                    },
                    {
                        "name": "token",
                        "comment": null
                    },
                    {
                        "name": "weChatUserInfoVo",
                        "comment": null
                    },
                    {
                        "name": "code",
                        "comment": "权限code 非必填 默认''"
                    },
                    {
                        "name": "id",
                        "comment": null
                    },
                    {
                        "name": "isEnable",
                        "comment": "是否启用 非必填 0=启用 1=禁用"
                    },
                    {
                        "name": "name",
                        "comment": "权限名字"
                    },
                    {
                        "name": "parentId",
                        "comment": "父权限id 非必填 默认0=根节点"
                    },
                    {
                        "name": "sort",
                        "comment": "权限排序"
                    },
                    {
                        "name": "url",
                        "comment": "权限url 非必填 默认'' 需要后台拦截时填上"
                    },
                    {
                        "name": "createdAt",
                        "comment": null
                    },
                    {
                        "name": "defaultPass",
                        "comment": "是否是默认密码"
                    },
                    {
                        "name": "enable",
                        "comment": "APP账号可用"
                    },
                    {
                        "name": "gender",
                        "comment": "性别"
                    },
                    {
                        "name": "hasSubscribed",
                        "comment": "是否曾经关注过关注公众号"
                    },
                    {
                        "name": "headPhoto",
                        "comment": "头像"
                    },
                    {
                        "name": "id",
                        "comment": "ID"
                    },
                    {
                        "name": "inviteCode",
                        "comment": "推广码"
                    },
                    {
                        "name": "merchantId",
                        "comment": "用户的商户ID"
                    },
                    {
                        "name": "mobile",
                        "comment": "手机号码"
                    },
                    {
                        "name": "name",
                        "comment": "用户显示姓名"
                    },
                    {
                        "name": "nick",
                        "comment": "用户微信昵称"
                    },
                    {
                        "name": "openId",
                        "comment": "用户的微信OpenId"
                    },
                    {
                        "name": "passWord",
                        "comment": "用户密码"
                    },
                    {
                        "name": "shopId",
                        "comment": "门店ID"
                    },
                    {
                        "name": "subscribe",
                        "comment": "当前是否关注公众号"
                    },
                    {
                        "name": "unionId",
                        "comment": "用户的微信unionId"
                    },
                    {
                        "name": "userName",
                        "comment": "用户账号"
                    },
                    {
                        "name": "userRole",
                        "comment": "用户角色"
                    }
                ]
            }
        ]
    }
]

module.exports = { raw }