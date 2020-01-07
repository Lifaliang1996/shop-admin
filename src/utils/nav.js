export default [
  // 商品
  {
    title: '商品',
    child: [
      {
        title: '商品管理',
        content: [
          {
            name: '商品列表',
            path: '/promotion/list'
          },
          {
            name: '添加商品',
            path: '/promotion/add'
          },
          {
            name: '商品回收站',
            path: '/promotion/recycle'
          },
          {
            name: '商品评价',
            path: '/promotion/comment'
          }
        ]
      },
      {
        title: '商品配置',
        content: [
          {
            name: '商品分类',
            path: '/promotion/category'
          },
          {
            name: '商品类型',
            path: '/promotion/type'
          },
          {
            name: '品牌管理',
            path: '/promotion/brand'
          },
          {
            name: '商品图片库',
            path: '/promotion/images'
          },
        ]
      }
    ]
  },

  // 订单
  {
    title: '订单',
    child: [
      {
        title: '订单管理',
        content: [
          {
            name: '订单列表',
            path: '/promotion/list'
          },
          {
            name: '确认收货',
            path: '/promotion/receipt'
          },
          {
            name: '订单设置',
            path: '/promotion/promotion_setting'
          }
        ]
      },
      {
        title: '退款及退货',
        content: [
          {
            name: '退货申请处理',
            path: '/promotion/return_goods'
          },
          {
            name: '退款申请处理',
            path: '/promotion/refund'
          },
          {
            name: '退货原因设置',
            path: '/promotion/return_cause'
          },
          {
            name: '发货点信息管理',
            path: '/promotion/address'
          },
        ]
      }
    ]
  },

  // 促销
  {
    title: '促销',
    child: [
      {
        title: '头部类目',
        content: [
          {
            name: '类目列表',
            path: '/promotion/header'
          },
          {
            name: '添加类目',
            path: '/promotion/add_header'
          }
        ]
      },
      {
        title: '拼团管理',
        content: [
          {
            name: '拼团商品列表',
            path: '/promotion/list'
          },
          {
            name: '添加拼团商品',
            path: '/promotion/add_goods'
          },
          {
            name: '成团管理',
            path: '/promotion/title_list'
          },
          {
            name: '订单管理',
            path: '/promotion/title_promotion'
          },
        ]
      }
    ]
  },

  // 库存
  {
    title: '库存',
    child: [
      {
        title: '',
        content: [
          {
            name: '商品入库',
            path: '/stock/in'
          },
          {
            name: '商品出库',
            path: '/stock/out'
          }
        ]
      }
    ]
  },

  // 用户
  {
    title: '用户',
    child: [
      {
        title: '',
        content: [
          {
            name: '用户列表',
            path: '/user/list'
          },
        ]
      }
    ]
  },

  // 运营
  {
    title: '运营',
    child: [
      {
        title: '',
        content: [
          {
            name: '广告列表',
            path: '/operate/advertising'
          },
          {
            name: '添加广告',
            path: '/operate/add_advertising'
          }
        ]
      }
    ]
  },

  // 统计
  {
    title: '统计',
    child: [
      {
        title: '',
        content: [
          {
            name: '交易统计',
            path: '/statistics/deal'
          },
          {
            name: '商品统计',
            path: '/statistics/goods'
          },
          {
            name: '搜索统计',
            path: '/statistics/search'
          }
        ]
      }
    ]
  },
]