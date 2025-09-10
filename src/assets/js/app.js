const remote = require('electron').remote,
  { shell, app } = require('electron'),
  ipc = require('electron').ipcRenderer,
  currentWindow = remote.getCurrentWindow(),
  path = require('path')
function onClickControl(_0x5c9f71, _0x4e2ee8) {
  ipc.send('onClickControl', _0x5c9f71, _0x4e2ee8)
}
const fs = require('fs'),
  util = require('util'),
  tcping = util.promisify(require('tcp-ping').ping),
  net = require('net')
Vue.directive('remove-spaces', {
  bind(_0x46dbc8) {
    const _0x25c7ab = () => {
      const _0x14cfd2 = _0x46dbc8.value.replace(/\s/g, '')
      _0x14cfd2 !== _0x46dbc8.value &&
        ((_0x46dbc8.value = _0x14cfd2),
        _0x46dbc8.dispatchEvent(new Event('input')))
    }
    _0x46dbc8.addEventListener('input', _0x25c7ab)
  },
})
const languagepack = {
  en: {
    lang: {
      lang: 'English',
      email: 'Email',
      password: 'Password',
      confirmpassword: 'Confirm Password',
      forgotpassword: 'Forgot password?',
      login: 'Login',
      nohaveanaccount: "Don't have an account?",
      register: 'Register',
      loggingin: 'Logging in',
      resetpassword: 'Reset Password',
      emailverificationcode: 'Email verification code',
      invitationcode: 'Invitation code',
      Invitationcodeoptional: 'Invitation code (optional)',
      send: 'Send',
      requesting: 'Requesting',
      emailinputerror: 'Incorrect email input',
      passwordinputerror: 'Incorrect password input',
      couponinputerror: 'Coupon input error',
      incorrectverificationcodeinput: 'Incorrect verification code input',
      passwordlengtherr: 'Password must be greater than 8 digits',
      confirmationpassworddoesnotmatchthepassword:
        'Confirmation password does not match the password',
      signup: 'Sign up',
      registering: 'registering',
      backtologin: 'Back to login',
      Passwordresetsuccessful: 'Password reset successful',
      disconnect: 'Disconnect',
      connected: 'Connected',
      connecting: 'Connecting',
      disconnecting: 'Disconnecting',
      reconnecting: 'Reconnecting',
      nodeselection: 'Node selection',
      globalmode: 'Global Mode',
      pacdesc: 'Smart Mode: Acting for Overseas Regions',
      globaldesc: 'Global mode: proxy all regions',
      accountinformation: 'Account',
      onlinestore: 'Online store',
      announcementcenter: 'Announcement Center',
      helpcenter: 'Help Center',
      dataupdate: 'Data Update',
      updating: 'updating',
      aboutus: 'About us',
      logout: 'Log out',
      storejumping: 'Store jumping',
      home: 'Home',
      about: 'About',
      Announcementlist: 'Announcement list',
      noannouncement: 'No announcement',
      nohelpdocumentation: 'No help documentation',
      balance: 'balance',
      plan: 'Plan',
      expiredate: 'Expire date',
      Plantraffic: 'Plan traffic',
      newversionfound: 'New version found',
      updateversionnow: 'Update version now',
      confirmlogout: 'Confirm logout?',
      confirm: 'Confirm',
      cancel: 'Cancel',
      startErr: 'Failed to start, please grant VPN permission',
      timeout: 'timeout',
      pingTps: 'Use delay function after disconnection',
      tggroup: 'Official Group',
      website: 'Official website',
      privacypolicy: 'Privacy Policy',
      tos: 'Terms of Service',
      more: 'More',
      loading: 'Loading',
      invitefriends: 'invite friends',
      trafficwillresetafterday: 'Traffic will reset after {day} day',
      preferences: 'Preferences',
      languages: 'Languages',
      upLoad: 'Upload',
      downLoad: 'Download',
      CopyExclusiveInvitationLink: 'Copy Exclusive Invitation Link',
      copysuccessfully: 'copy successfully',
      Clickthebuttontoconnect: 'Click the btn to connect',
      Thecurrentaccountpackagehasexpired:
        'The current account plan has expired',
      Gotostore: 'Go to store',
      AlreadypurchasedapackageRefreshdata:
        'Already purchased a package? Refresh data',
      used: 'Used',
      total: 'Total',
      AutoSelect: 'Auto select',
      Theme: 'Theme Settings',
      Not_configured_for_online_customer_service:
        'Not configured for online customer service',
      Online_customer_service_is_loading: 'Online customer service is loading',
      Package_traffic_has_been_exhausted: 'Package traffic has been exhausted',
      Haveacoupon: 'Have a coupon?',
      coupon: 'Coupon',
      choose: 'Choose',
      PlaceAnOrder: 'Place an Order',
      Selected: 'Selected',
      SelectPaymentCycle: 'Select Payment Cycle',
      month: 'Monthly',
      quarter: 'Quarterly',
      halfYear: 'Half-Yearly',
      year: 'Yearly',
      twoYear: 'Two-Year',
      threeYear: 'Three-Year',
      onetime: 'One-time',
      trafficReset: 'Traffic Reset Package',
      validating: 'Validating',
      apply: 'Apply',
      couponUsed: 'Coupon Used',
      Purchasing: 'Purchasing',
      PaymentMethods: 'Payment Methods',
      DeductAccountBalanceByDefault: 'Deduct Account Balance by Default',
      Confirmationofpayment: 'Payment',
      AccountBalance: 'Account Balance',
      AmountToBePaid: 'Amount to be Paid',
      paid: 'Paid',
      ContinueToPay: 'Continue to Pay',
      CancelPayment: 'Cancel Payment',
      handlingFee: 'Handling Fee',
      OnlineCustomer: 'Online Customer Service',
      CanceledUseOfCoupon: 'Canceled Use of Coupon',
      Cancelled: 'Cancelled',
      planPurchaseSuccessful: 'Plan Purchase Successful',
      NoPayment: 'Unpaid Order',
      Select_your_preferred_display_theme:
        'Select your preferred display theme',
      Package_traffic: 'Package data',
      my_order: 'My Orders',
      activation: 'Activate',
      Expired: 'Expired',
      After_turning_it_on_all_network_requests_will_go_through_VPN:
        'After turning it on, all network requests will go through VPN',
      No_package_suitable_for_you: 'No package suitable for you?',
      Customized_services: 'Customized Services',
      Contact_customer_service: 'Contact Customer Service',
      Order_record: 'Order Records',
      Search_orders: 'Search orders...',
      Order_number: 'Order Number',
      Package: 'Package',
      Period: 'Period',
      Date: 'Date',
      Amount: 'Amount',
      Status: 'Status',
      No_data_found: 'No data found',
      To_be_paid: 'To be paid',
      Data_Overview: 'Data Overview',
      My_Invitation: 'My Invitation',
      Commission_Record: 'Commission Record',
      piece: 'piece',
      language_theme: 'Language | Theme',
      Send_us_message: 'Contact us',
      Support_team_ready_to_help: 'Support team ready to help',
      Language_Settings: 'Language Settings',
      Select_your_preferred_language: 'Select your preferred language',
      Order_information: 'Order Information',
      Current_version: 'Current version',
      Update_content: 'Update content',
      Registered_user: 'Registered User',
      Commission_ratio: 'Commission Ratio',
      Commission_confirmed: 'Commission Pending',
      Cumulative_commission_earned: 'Cumulative Commission Earned',
      Generating: 'Generating',
      Generate_invitation_code: 'Generate Invitation Code',
      Invitation_link: 'Invitation Link',
      Finish: 'Finish',
      new_invitation_code_has_been_generated:
        'New invitation code has been generated',
      invitation_code_was_entered_incorrectly:
        'Invitation code was entered incorrectly',
      No_line_available: 'No line available',
      Logout_successful: 'Logout successful',
      Login_successful: 'Login successful',
      Proxy_configuration: 'Proxy Configuration',
      Port_TunMode: 'Port\uFF5CTUN Mode',
      Network_proxy_settings: 'Network Proxy Settings',
      Network_proxy_type: 'Proxy Type',
      Network_proxy_address: 'Proxy Address',
      Turned_on: 'Turned On',
      TUN_Mode: 'TUN Mode',
      View: 'View',
      Current_Package: 'Current Package',
      Connections: 'Connect',
      My: 'My',
      Getting_Ethernet: 'Getting Ethernet',
      Configuring_Ethernet: 'Configuring Ethernet',
      Starting_Ethernet: 'Starting Ethernet',
    },
  },
  cn: {
    lang: {
      lang: '中文',
      email: '邮箱',
      password: '密码',
      confirmpassword: '确认密码',
      forgotpassword: '忘记密码?',
      login: '登录',
      nohaveanaccount: '没有账号?',
      register: '注册账号',
      loggingin: '正在登入',
      resetpassword: '重置密码',
      emailverificationcode: '邮箱验证码',
      invitationcode: '邀请码',
      Invitationcodeoptional: '邀请码(选填)',
      send: '发送',
      requesting: 'Requesting',
      emailinputerror: '邮箱输入错误',
      couponinputerror: '优惠券输入错误',
      passwordinputerror: '密码输入错误',
      incorrectverificationcodeinput: '验证码输入不正确',
      passwordlengtherr: '密码长度需大于八位数',
      confirmationpassworddoesnotmatchthepassword: '确认密码与密码不符',
      signup: '注册账号',
      registering: '正在注册',
      backtologin: '返回登入',
      Passwordresetsuccessful: '密码重置成功',
      disconnect: '未连接',
      connected: '已连接',
      connecting: '连接中',
      disconnecting: '断开中',
      reconnecting: '重连中',
      nodeselection: '节点选择',
      globalmode: '全局模式',
      pacdesc: '智能模式:代理海外地区',
      globaldesc: '全局模式:代理所有地区',
      accountinformation: '账号',
      onlinestore: '在线商店',
      announcementcenter: '公告中心',
      helpcenter: '帮助中心',
      dataupdate: '数据更新',
      updating: '更新中',
      aboutus: '关于我们',
      logout: '登出',
      storejumping: '商店跳转中',
      home: '首页',
      about: '关于',
      Announcementlist: '公告列表',
      noannouncement: '没有公告内容',
      nohelpdocumentation: '没有帮助文档',
      balance: '余额',
      plan: '套餐',
      expiredate: '到期时间',
      Plantraffic: '套餐流量',
      newversionfound: '发现新版本',
      updateversionnow: '立即更新版本',
      confirmlogout: '确认登出账号?',
      confirm: '确认',
      cancel: '取消',
      startErr: '启动失败,请授予VPN权限',
      timeout: '超时',
      pingTps: '断开连接后使用延迟功能',
      tggroup: '官方群组',
      website: '官网',
      privacypolicy: '隐私策略',
      tos: '服务条款',
      more: '更多',
      loading: '加载中',
      invitefriends: '邀请好友',
      trafficwillresetafterday: '流量将在{day}天后重置',
      preferences: '偏好设置',
      languages: '多语言',
      upLoad: '上传',
      downLoad: '下载',
      CopyExclusiveInvitationLink: '复制专属邀请链接',
      copysuccessfully: '复制成功',
      Clickthebuttontoconnect: '点击按钮进行连接',
      Thecurrentaccountpackagehasexpired: '当前套餐包账号已到期',
      Gotostore: '前往商店',
      used: '已用',
      total: '总计',
      AutoSelect: '自动选择',
      AlreadypurchasedapackageRefreshdata: '已购买套餐\uFF1F 刷新数据',
      Theme: '主题设置',
      Not_configured_for_online_customer_service: '未配置在线客服',
      Online_customer_service_is_loading: '在线客服加载中',
      Package_traffic_has_been_exhausted: '套餐包流量已用尽',
      Haveacoupon: '拥有优惠券?',
      coupon: '优惠券',
      choose: '选择',
      PlaceAnOrder: '下单',
      Selected: '已选择',
      SelectPaymentCycle: '选择付费周期',
      month: '月付',
      quarter: '季付',
      halfYear: '半年付',
      year: '年付',
      twoYear: '两年付',
      threeYear: '三年付',
      onetime: '一次性',
      trafficReset: '流量重置包',
      validating: '验证中',
      apply: '应用',
      couponUsed: '已使用优惠券',
      Purchasing: '购买中',
      PaymentMethods: '支付方式',
      DeductAccountBalanceByDefault: '默认抵扣账号余额',
      Confirmationofpayment: '付款',
      AccountBalance: '账号余额',
      AmountToBePaid: '待支付金额',
      paid: '已支付',
      ContinueToPay: '继续支付',
      CancelPayment: '取消支付',
      handlingFee: '手续费',
      OnlineCustomer: '在线客服',
      CanceledUseOfCoupon: '已取消使用优惠券',
      Cancelled: '已取消',
      planPurchaseSuccessful: '套餐购买成功',
      NoPayment: '未支付订单',
      Select_your_preferred_display_theme: '选择您喜欢的显示主题',
      Package_traffic: '套餐包流量',
      my_order: '我的订单',
      activation: '激活',
      Expired: '已到期',
      After_turning_it_on_all_network_requests_will_go_through_VPN:
        '开启后所有网络请求都将通过VPN',
      No_package_suitable_for_you: '没有适合你的套餐\uFF1F',
      Customized_services: '定制服务',
      Contact_customer_service: '联系客服',
      Order_record: '订单记录',
      Search_orders: '搜索订单...',
      Order_number: '订单号',
      Package: '套餐',
      Period: '周期',
      Date: '日期',
      Amount: '金额',
      Status: '状态',
      No_data_found: '没有找到数据',
      To_be_paid: '待支付',
      Data_Overview: '数据概览',
      My_Invitation: '我的邀请',
      Commission_Record: '佣金记录',
      piece: '条',
      language_theme: '语言\uFF5C主题',
      Send_us_message: '联系我们',
      Support_team_ready_to_help: '支持团队随时提供帮助',
      Language_Settings: '语言设置',
      Select_your_preferred_language: '选择您的首选语言',
      Order_information: '订单信息',
      Current_version: '当前版本',
      Update_content: '更新内容',
      Registered_user: '已注册用户',
      Commission_ratio: '佣金比例',
      Commission_confirmed: '确认中佣金',
      Cumulative_commission_earned: '累计获得佣金',
      Generating: '正在生成',
      Generate_invitation_code: '生成邀请码',
      Invitation_link: '邀请链接',
      Finish: '完成',
      new_invitation_code_has_been_generated: '新的邀请码已生成',
      invitation_code_was_entered_incorrectly: '邀请码输入不正确',
      No_line_available: '没有线路可使用',
      Logout_successful: '登出成功',
      Login_successful: '登录成功',
      Proxy_configuration: '代理配置',
      Port_TunMode: '端口\uFF5CTUN模式',
      Network_proxy_settings: '网络代理设置',
      Network_proxy_type: '代理类型',
      Network_proxy_address: '代理地址',
      Turned_on: '已开启',
      TUN_Mode: '网卡模式',
      View: '查看',
      Current_Package: '当前套餐',
      Connections: '连接',
      My: '我的',
      Getting_Ethernet: '获取网卡中',
      Configuring_Ethernet: '正在配置网卡',
      Starting_Ethernet: '正在启动网卡',
    },
  },
  hk: {
    lang: {
      lang: '繁體中文',
      email: '郵箱',
      password: '密碼',
      confirmpassword: '確認密碼',
      forgotpassword: '忘記密碼?',
      login: '登錄',
      nohaveanaccount: '沒有帳號?',
      register: '註冊帳號',
      loggingin: '正在登入',
      resetpassword: '重置密碼',
      emailverificationcode: '郵箱驗證碼',
      invitationcode: '邀請碼',
      Invitationcodeoptional: '邀請碼(選填)',
      send: '發送',
      requesting: 'Requesting',
      emailinputerror: '郵箱輸入錯誤',
      couponinputerror: '優惠券輸入錯誤',
      passwordinputerror: '密碼輸入錯誤',
      incorrectverificationcodeinput: '驗證碼輸入錯誤',
      passwordlengtherr: '密碼長度需大於7位數',
      confirmationpassworddoesnotmatchthepassword: '確認密碼與密碼不符',
      signup: '註冊帳號',
      registering: '正在註冊',
      backtologin: '返回登入',
      Passwordresetsuccessful: '密码重置成功',
      disconnect: '未連接',
      connected: '已連接',
      connecting: '連接中',
      disconnecting: '斷開中',
      reconnecting: '重連中',
      nodeselection: '節點選擇',
      globalmode: '全局模式',
      pacdesc: '智能模式:代理海外地區',
      globaldesc: '全局模式:代理所有地區',
      accountinformation: '帳號',
      onlinestore: '在線商店',
      announcementcenter: '公告中心',
      helpcenter: '幫助中心',
      dataupdate: '數據更新',
      updating: '更新中',
      aboutus: '關於我們',
      logout: '登出',
      storejumping: '商店跳轉中',
      home: '首頁',
      about: '關於',
      Announcementlist: '公告列表',
      noannouncement: '沒有公告內容',
      nohelpdocumentation: '沒有幫助文檔',
      balance: '餘額',
      plan: '套餐',
      expiredate: '到期時間',
      Plantraffic: '套餐流量',
      newversionfound: '發現新版本',
      updateversionnow: '立即更新版本',
      confirmlogout: '確認登出帳號?',
      confirm: '確認',
      cancel: '取消',
      startErr: '啟動失敗,請授予VPN權限',
      timeout: '超時',
      pingTps: '断开连接后使用延迟功能',
      tggroup: '官方群組',
      website: '官網',
      privacypolicy: '隱私策略',
      tos: '服務條款',
      more: '更多',
      loading: '加載中',
      invitefriends: '邀請好友',
      trafficwillresetafterday: '流量將在{day}天後重置',
      preferences: '偏好設定',
      languages: '多語言',
      upLoad: '上傳',
      downLoad: '下載',
      CopyExclusiveInvitationLink: '複製專屬邀請鏈接',
      copysuccessfully: '複製成功',
      Clickthebuttontoconnect: '點擊按鈕進行連接',
      Thecurrentaccountpackagehasexpired: '當前帳號套餐包已到期',
      Gotostore: '前往商店',
      used: '已用',
      total: '總計',
      AutoSelect: '自動選擇',
      AlreadypurchasedapackageRefreshdata: '已購買套餐\uFF1F 刷新數據',
      Theme: '主題設定',
      Not_configured_for_online_customer_service: '未配置在線客服',
      Online_customer_service_is_loading: '在線客服加載中',
      Package_traffic_has_been_exhausted: '套餐包流量已用盡',
      Haveacoupon: '擁有優惠券?',
      coupon: '優惠券',
      choose: '選擇',
      PlaceAnOrder: '下單',
      Selected: '已選擇',
      SelectPaymentCycle: '選擇付費週期',
      month: '月付',
      quarter: '季付',
      halfYear: '半年付',
      year: '年付',
      twoYear: '兩年付',
      threeYear: '三年付',
      onetime: '一次性',
      trafficReset: '流量重置包',
      validating: '驗證中',
      apply: '應用',
      couponUsed: '已使用優惠券',
      Purchasing: '購買中',
      PaymentMethods: '支付方式',
      DeductAccountBalanceByDefault: '默認抵扣賬號餘額',
      Confirmationofpayment: '付款',
      AccountBalance: '賬號餘額',
      AmountToBePaid: '待支付金額',
      paid: '已支付',
      ContinueToPay: '繼續支付',
      CancelPayment: '取消支付',
      handlingFee: '手續費',
      OnlineCustomer: '在線客服',
      CanceledUseOfCoupon: '已取消使用優惠券',
      Cancelled: '已取消',
      planPurchaseSuccessful: '套餐購買成功',
      NoPayment: '未支付訂單',
      Select_your_preferred_display_theme: '選擇您喜歡的顯示主題',
      Package_traffic: '套餐包流量',
      my_order: '我的訂單',
      activation: '啟用',
      Expired: '已到期',
      After_turning_it_on_all_network_requests_will_go_through_VPN:
        '開啟後所有網絡請求都將通過VPN',
      No_package_suitable_for_you: '沒有適合你的套餐\uFF1F',
      Customized_services: '客製化服務',
      Contact_customer_service: '聯繫客服',
      Order_record: '訂單記錄',
      Search_orders: '搜尋訂單...',
      Order_number: '訂單號',
      Package: '套餐',
      Period: '週期',
      Date: '日期',
      Amount: '金額',
      Status: '狀態',
      No_data_found: '沒有找到數據',
      To_be_paid: '待支付',
      Data_Overview: '數據概覽',
      My_Invitation: '我的邀請',
      Commission_Record: '佣金記錄',
      piece: '條',
      language_theme: '語言\uFF5C主題',
      Send_us_message: '聯絡我們',
      Support_team_ready_to_help: '支持團隊隨時提供幫助',
      Language_Settings: '語言設置',
      Select_your_preferred_language: '選擇您的首選語言',
      Order_information: '訂單信息',
      Current_version: '當前版本',
      Update_content: '更新內容',
      Registered_user: '已註冊用戶',
      Commission_ratio: '傭金比例',
      Commission_confirmed: '確認中傭金',
      Cumulative_commission_earned: '累計獲得傭金',
      Generating: '正在生成',
      Generate_invitation_code: '生成邀請碼',
      Invitation_link: '邀請連結',
      Finish: '完成',
      new_invitation_code_has_been_generated: '新的邀請碼已生成',
      invitation_code_was_entered_incorrectly: '邀請碼輸入不正確',
      No_line_available: '沒有線路可使用',
      Logout_successful: '登出成功',
      Login_successful: '登入成功',
      Proxy_configuration: '代理配置',
      Port_TunMode: '端口\uFF5CTUN模式',
      Network_proxy_settings: '網絡代理設置',
      Network_proxy_type: '代理類型',
      Network_proxy_address: '代理地址',
      Turned_on: '已開啟',
      TUN_Mode: '網卡模式',
      View: '查閱',
      Current_Package: '當前套餐',
      Connections: '連接',
      My: '我的',
      Getting_Ethernet: '正在獲取網卡',
      Configuring_Ethernet: '正在配置網卡',
      Starting_Ethernet: '正在啟動網卡',
    },
  },
  vn: {
    lang: {
      lang: 'Tiếng Việt',
      email: 'E-mail',
      password: 'Mật khẩu',
      confirmpassword: 'Xác nhận mật khẩu',
      forgotpassword: 'Quên mật khẩu?',
      login: 'Đăng nhập',
      nohaveanaccount: 'Không có tài khoản?',
      register: 'Đăng ký',
      loggingin: 'Đăng nhập..',
      resetpassword: 'Đặt Lại Mật Khẩu',
      emailverificationcode: 'Mã xác minh mail',
      invitationcode: 'Mã mời',
      Invitationcodeoptional: 'Mã mời (tùy chọn)',
      send: 'Gửi',
      requesting: 'yêu cầu..',
      emailinputerror: 'Lỗi nhập email',
      couponinputerror: 'Lỗi nhập phiếu giảm giá',
      passwordinputerror: 'mật khẩu không đúng',
      incorrectverificationcodeinput: 'Mã xác minh không chính xác',
      passwordlengtherr: 'Mật khẩu phải lớn hơn 8 chữ số',
      confirmationpassworddoesnotmatchthepassword:
        'Xác nhận mật khẩu không khớp với mật khẩu',
      signup: 'Đăng ký tài khoản',
      registering: 'đăng ký..',
      backtologin: 'Quay lại đăng nhập',
      Passwordresetsuccessful: 'Đặt lại mật khẩu thành công',
      disconnect: 'Ngắt kết nối',
      connected: 'Kết nối',
      connecting: 'Đang kết nối',
      disconnecting: 'ngắt kết nối',
      reconnecting: 'Đang kết nối lại',
      nodeselection: 'Chọn máy chủ',
      globalmode: 'Chế độ toàn cầu',
      accountinformation: 'Thông tin tài khoản',
      onlinestore: 'Mua gói',
      announcementcenter: 'Thông báo',
      helpcenter: 'Hướng dẫn',
      dataupdate: 'Cập nhật',
      updating: 'đang cập nhật',
      aboutus: 'Giới thiệu',
      logout: 'Đăng xuất',
      storejumping: 'Chuyển đến mua gói',
      home: 'Trang đầu',
      about: 'Về',
      Announcementlist: 'Danh sách thông báo',
      noannouncement: 'Không có nội dung thông báo',
      nohelpdocumentation: 'Không có tài liệu trợ giúp',
      balance: 'Số dư',
      plan: 'Gói dịch vụ',
      expiredate: 'Hạn sử dụng',
      Plantraffic: 'Lưu lượng',
      newversionfound: 'phiên bản mới được phát hiện',
      updateversionnow: 'Cập nhật phiên bản ngay bây giờ',
      confirmlogout: 'Xác nhận đăng xuất?',
      confirm: 'xác nhận',
      cancel: 'Hủy bỏ',
      startErr: 'Không thể bắt đầu, vui lòng cấp quyền cho VPN',
      timeout: 'Lỗi',
      pingTps: 'Sử dụng chức năng trì hoãn sau khi ngắt kết nối',
      tggroup: 'Nhóm chính thức',
      website: 'Trang web chính thức',
      privacypolicy: 'Chính sách bảo mật',
      tos: 'Điều khoản dịch vụ',
      more: 'Hơn',
      loading: 'Đang tải',
      invitefriends: 'mời bạn bè',
      trafficwillresetafterday:
        'Lưu lượng truy cập sẽ được đặt lại sau {day} ngày',
      preferences: 'Sở thích',
      languages: 'ngôn ngữ',
      upLoad: 'tải lên',
      downLoad: 'Tải xuống',
      CopyExclusiveInvitationLink: 'Sao chép liên kết lời mời độc quyền',
      copysuccessfully: 'sao chép thành công',
      Clickthebuttontoconnect: 'Nhấn vào nút để kết nối',
      Thecurrentaccountpackagehasexpired:
        'The current account plan has expired',
      Gotostore: 'Go to store',
      used: 'đã sử dụng',
      total: 'tổng cộng',
      AutoSelect: 'Tự động lựa chọn',
      AlreadypurchasedapackageRefreshdata: 'Gói đã mua Làm mới dữ liệu',
      Theme: 'Cài đặt chủ đề',
      Not_configured_for_online_customer_service:
        'Dịch vụ Khách hàng chưa khả dụng',
      Online_customer_service_is_loading: 'Dịch vụ khách hàng đang tải',
      Package_traffic_has_been_exhausted: 'Lưu lượng đã hết',
      Haveacoupon: 'Có phiếu giảm giá?',
      coupon: 'Phiếu giảm giá',
      choose: 'Chọn',
      PlaceAnOrder: 'Đặt hàng',
      Selected: 'Đã chọn',
      SelectPaymentCycle: 'Chọn chu kỳ thanh toán',
      month: 'Thanh toán hàng tháng',
      quarter: 'Thanh toán hàng quý',
      halfYear: 'Thanh toán nửa năm',
      year: 'Thanh toán hàng năm',
      twoYear: 'Thanh toán hai năm',
      threeYear: 'Thanh toán ba năm',
      onetime: 'Thanh toán một lần',
      trafficReset: 'Gói đặt lại lưu lượng',
      validating: 'Đang xác thực',
      apply: 'Áp dụng',
      couponUsed: 'Đã sử dụng phiếu giảm giá',
      Purchasing: 'Đang mua hàng',
      PaymentMethods: 'Phương thức thanh toán',
      DeductAccountBalanceByDefault: 'Mặc định trừ vào số dư tài khoản',
      Confirmationofpayment: 'Thanh toán',
      AccountBalance: 'Số dư tài khoản',
      AmountToBePaid: 'Số tiền cần thanh toán',
      paid: 'Đã thanh toán',
      ContinueToPay: 'Tiếp tục thanh toán',
      CancelPayment: 'Hủy thanh toán',
      handlingFee: 'Phí xử lý',
      OnlineCustomer: 'Dịch vụ khách hàng trực tuyến',
      CanceledUseOfCoupon: 'Đã hủy sử dụng phiếu giảm giá',
      Cancelled: 'Đã hủy',
      planPurchaseSuccessful: 'Mua gói thành công',
      NoPayment: 'Chưa thanh toán đơn hàng',
      Select_your_preferred_display_theme:
        'Chọn giao diện hiển thị ưa thích của bạn',
      Package_traffic: 'Dữ liệu gói cước',
      my_order: 'Đơn hàng của tôi',
      activation: 'Kích hoạt',
      Expired: 'Đã hết hạn',
      After_turning_it_on_all_network_requests_will_go_through_VPN:
        'Sau khi bật, tất cả các yêu cầu mạng sẽ đi qua VPN',
      No_package_suitable_for_you: 'Không có gói nào phù hợp với bạn?',
      Customized_services: 'Dịch vụ tùy chỉnh',
      Contact_customer_service: 'Liên hệ với chăm sóc khách hàng',
      Order_record: 'Lịch sử đơn hàng',
      Search_orders: 'Tìm kiếm đơn hàng...',
      Order_number: 'Mã đơn hàng',
      Package: 'Gói cước',
      Period: 'Thời hạn',
      Date: 'Ngày',
      Amount: 'Số tiền',
      Status: 'Trạng thái',
      No_data_found: 'Không tìm thấy dữ liệu',
      To_be_paid: 'Chưa thanh toán',
      Data_Overview: 'Tổng quan dữ liệu',
      My_Invitation: 'Lời mời của tôi',
      Commission_Record: 'Lịch sử hoa hồng',
      piece: 'mục hoặc phần (tùy ngữ cảnh)',
      language_theme: 'Ngôn ngữ | Giao diện',
      Send_us_message: 'Gửi tin nhắn cho chúng tôi',
      Support_team_ready_to_help: 'Đội ngũ hỗ trợ sẵn sàng giúp đỡ bạn',
      Language_Settings: 'Cài đặt ngôn ngữ',
      Select_your_preferred_language: 'Chọn ngôn ngữ ưa thích của bạn',
      Order_information: 'Thông tin đơn hàng',
      Current_version: 'Phiên bản hiện tại',
      Update_content: 'Nội dung cập nhật',
      Registered_user: 'Người dùng đã đăng ký',
      Commission_ratio: 'Tỷ lệ hoa hồng',
      Commission_confirmed: 'Hoa hồng đang xác nhận',
      Cumulative_commission_earned: 'Tổng hoa hồng đã nhận',
      Generating: 'Đang tạo',
      Generate_invitation_code: 'Tạo mã mời',
      Invitation_link: 'Liên kết mời',
      Finish: 'Hoàn thành',
      new_invitation_code_has_been_generated: 'Mã mời mới đã được tạo',
      invitation_code_was_entered_incorrectly:
        'Mã mời được nhập không chính xác',
      No_line_available: 'Không có đường dây khả dụng',
      Logout_successful: 'Đăng xuất thành công',
      Login_successful: 'Đăng nhập thành công',
      Proxy_configuration: 'Cấu hình proxy',
      Port_TunMode: 'Cổng\uFF5CChế độ TUN',
      Network_proxy_settings: 'Cài đặt proxy mạng',
      Network_proxy_type: 'Loại proxy',
      Network_proxy_address: 'Địa chỉ proxy',
      Turned_on: 'Đã bật',
      TUN_Mode: 'Chế độ TUN',
      View: 'Xem',
      Current_Package: 'Gói hiện tại',
      Connections: 'Kết nối',
      My: 'Của tôi',
      Getting_Ethernet: 'Đang lấy Ethernet',
      Configuring_Ethernet: 'Đang cấu hình Ethernet',
      Starting_Ethernet: 'Đang khởi động Ethernet',
    },
  },
  fa: {
    lang: {
      lang: 'فارسی',
      email: 'ایمیل',
      password: 'کلمه عبور',
      confirmpassword: 'تایید کلمه عبور',
      forgotpassword: 'کلمه عبور را فراموش کرده اید\u061F',
      login: 'ورود',
      nohaveanaccount: 'ثبت نام حساب کاربری\u061F',
      register: 'ثبت نام',
      loggingin: 'ورود',
      resetpassword: 'بازیابی کلمه عبور',
      emailverificationcode: 'کد تایید ایمیل',
      invitationcode: 'کد دعوت',
      Invitationcodeoptional: 'کد دعوت (اختیاری)',
      send: 'ارسال',
      requesting: 'در حال ارسال درخواست',
      emailinputerror: 'ایمیل نادرست است',
      couponinputerror: 'هنگام وارد کردن کوپن خطایی روی داد',
      passwordinputerror: 'کلمه عبور نادرست است',
      incorrectverificationcodeinput: 'کد تایید نادرست است',
      passwordlengtherr: 'کلمه عبور حداقل 8 کاراکتر باشد',
      confirmationpassworddoesnotmatchthepassword: 'تایید کلمه عبور یکسان نیست',
      signup: 'ثبت نام',
      registering: 'در حال ثبت نام',
      backtologin: 'بازگشت به صفحه ورود',
      Passwordresetsuccessful: 'کلمه عبور با موفقیت بازیابی شد',
      disconnect: 'قطع اتصال',
      connected: 'متصل',
      connecting: 'در حال اتصال',
      disconnecting: 'در حال قطع اتصال',
      reconnecting: 'در حال اتصال مجدد',
      nodeselection: 'انتخاب گره اتصال',
      globalmode: 'حالت جهانی',
      pacdesc: 'حالت هوشمند: اقدام برای مناطق خارج از کشور',
      globaldesc: 'حالت جهانی: پروکسی همه مناطق',
      accountinformation: 'حساب کاربری',
      onlinestore: 'فروشگاه آنلاین',
      announcementcenter: 'مرکز اطلاع رسانی',
      helpcenter: 'مرکز آموزش',
      dataupdate: 'بروزرسانی',
      updating: 'در حال بروزرسانی',
      aboutus: 'درباره ما',
      logout: 'خروج',
      storejumping: 'ورود به فروشگاه',
      home: 'خانه',
      about: 'درباره',
      Announcementlist: 'لیست اعلامیه',
      noannouncement: 'اعلان موجود نیست',
      nohelpdocumentation: 'آموزش موجود نیست',
      balance: 'موجودی',
      plan: 'بسته اشتراک',
      expiredate: 'تاریخ انقضا',
      Plantraffic: 'ترافیک بسته',
      newversionfound: 'نسخه جدید یافت شد',
      updateversionnow: 'بروزرسانی نسخه جدید',
      confirmlogout: 'خارج شود\u061F',
      confirm: 'تایید',
      cancel: 'لغو',
      startErr: 'خطا در اتصال\u060C دسترسی های لازم را بدهید',
      timeout: 'Time Out',
      pingTps: 'برای تست ابتدا اتصال را قطع کنید',
      tggroup: 'ربات تلگرام',
      website: 'وب سایت رسمی',
      privacypolicy: 'سیاست حفظ حریم خصوصی',
      tos: 'شرایط استفاده از خدمات',
      more: 'بیشتر',
      loading: 'در حال بارگذاری',
      invitefriends: 'دعوت از دوستان',
      trafficwillresetafterday: '{day} روز مانده تا بازنشانی ترافیک',
      preferences: 'تنظیمات',
      languages: 'زبان',
      upLoad: 'آپلود',
      downLoad: 'دانلود',
      CopyExclusiveInvitationLink: 'لینک دعوت خود را کپی کنید',
      copysuccessfully: 'با موفقیت کپی شد',
      Clickthebuttontoconnect: 'برای اتصال دکمه را لمس کنید',
      Thecurrentaccountpackagehasexpired: 'بسته اشتراک منقضی شده است',
      Gotostore: 'به فروشگاه بروید',
      AlreadypurchasedapackageRefreshdata:
        'قبلا یک بسته خریداری کرده اید\u061F تازه کردن داده ها',
      used: 'استفاده شده',
      total: 'مجموع',
      AutoSelect: 'انتخاب خودکار',
      Theme: 'تنظیمات قالب',
      Not_configured_for_online_customer_service:
        'برای سرویس مشتریان آنلاین پیکربندی نشده است',
      Online_customer_service_is_loading:
        'سرویس مشتریان آنلاین در حال بارگذاری است',
      Package_traffic_has_been_exhausted: 'بسته ترافیک به اتمام رسیده است',
      Haveacoupon: 'کوپن دارید\u061F',
      coupon: 'کوپن',
      choose: 'انتخاب کنید',
      PlaceAnOrder: 'سفارش دهید',
      Selected: 'انتخاب شده',
      SelectPaymentCycle: 'دوره پرداخت را انتخاب کنید',
      month: 'ماهانه',
      quarter: 'سه‌ماهه',
      halfYear: 'شش‌ماهه',
      year: 'سالانه',
      twoYear: 'دو ساله',
      threeYear: 'سه ساله',
      onetime: 'یک بار',
      trafficReset: 'بسته بازنشانی ترافیک',
      validating: 'در حال اعتبارسنجی',
      apply: 'اعمال کنید',
      couponUsed: 'کوپن استفاده شده',
      Purchasing: 'در حال خرید',
      PaymentMethods: 'روش‌های پرداخت',
      DeductAccountBalanceByDefault: 'کسر موجودی حساب به صورت پیش فرض',
      Confirmationofpayment: 'پرداخت',
      AccountBalance: 'موجودی حساب',
      AmountToBePaid: 'مبلغ قابل پرداخت',
      paid: 'پرداخت شده',
      ContinueToPay: 'ادامه پرداخت',
      CancelPayment: 'لغو پرداخت',
      handlingFee: 'هزینه دستمزد',
      OnlineCustomer: 'پشتیبانی آنلاین',
      CanceledUseOfCoupon: 'استفاده از کوپن لغو شد',
      Cancelled: 'لغو شد',
      planPurchaseSuccessful: 'خرید بسته با موفقیت انجام شد',
      NoPayment: 'سفارش پرداخت نشده',
      Select_your_preferred_display_theme:
        'زمینه نمایش دلخواه خود را انتخاب کنید',
      Package_traffic: 'اطلاعات بسته',
      my_order: 'سفارشات من',
      activation: 'فعال',
      Expired: 'منقضی شده',
      After_turning_it_on_all_network_requests_will_go_through_VPN:
        'پس از روشن کردن\u060C تمام درخواست های شبکه از طریق VPN انجام می شود',
      No_package_suitable_for_you: 'هیچ بسته ای برای شما مناسب نیست\u061F',
      Customized_services: 'خدمات سفارشی',
      Contact_customer_service: 'تماس با خدمات مشتریان',
      Order_record: 'سوابق سفارش',
      Search_orders: 'جستجو سفارشات...',
      Order_number: 'شماره سفارش',
      Package: 'بسته',
      Period: 'دوره',
      Date: 'تاریخ',
      Amount: 'مقدار',
      Status: 'وضعیت',
      No_data_found: 'اطلاعاتی پیدا نشد',
      To_be_paid: 'پرداخت شود',
      Data_Overview: 'بررسی داده ها',
      My_Invitation: 'دعوتنامه من',
      Commission_Record: 'سوابق کمیسیون',
      piece: 'قطعه',
      language_theme: 'زبان | زمینه',
      Send_us_message: 'برای ما پیام ارسال کنید',
      Support_team_ready_to_help: 'تیم پشتیبانی آماده کمک است',
      Language_Settings: 'تنظیمات زبان',
      Select_your_preferred_language: 'زبان مورد نظر خود را انتخاب کنید',
      Order_information: 'اطلاعات سفارش',
      Current_version: 'نسخه فعلی',
      Update_content: 'محتوای به‌روزرسانی',
      Registered_user: 'کاربر ثبت‌شده',
      Commission_ratio: 'نسبت کمیسیون',
      Commission_confirmed: 'کمیسیون در حال تایید',
      Cumulative_commission_earned: 'کمیسیون کسب‌شده کل',
      Generating: 'در حال ایجاد',
      Generate_invitation_code: 'تولید کد دعوت',
      Invitation_link: 'لینک دعوت',
      Finish: 'تمام',
      new_invitation_code_has_been_generated: 'کد دعوت ایجاد شده است',
      invitation_code_was_entered_incorrectly:
        'کد دعوت به‌طور نادرست وارد شده است',
      No_line_available: 'هیچ خطی در دسترس نیست',
      Logout_successful: 'خروج موفقیت‌آمیز',
      Login_successful: 'ورود موفقیت‌آمیز',
      Proxy_configuration: 'پیکربندی پروکسی',
      Port_TunMode: 'پورت\uFF5Cحالت TUN',
      Network_proxy_settings: 'تنظیمات پروکسی شبکه',
      Network_proxy_type: 'نوع پروکسی',
      Network_proxy_address: 'آدرس پروکسی',
      Turned_on: 'روشن شده',
      TUN_Mode: 'حالت TUN',
      View: 'مشاهده',
      Current_Package: 'بسته فعلی',
      Connections: 'اتصالات',
      My: 'من',
      Getting_Ethernet: 'در حال دریافت کارت شبکه',
      Configuring_Ethernet: 'در حال پیکربندی کارت شبکه',
      Starting_Ethernet: 'در حال راه‌اندازی کارت شبکه',
    },
  },
}
var Main = {
  data() {
    return {
      panelType: 'v2board',
      appVersion: '2.1.7',
      nodes: [],
      nodeInfos: [],
      mode: 0,
      startTime: '00:00:00',
      isStore: false,
      isWebStore: false,
      isCrisp: false,
      timer: '',
      hour: null,
      minute: null,
      second: null,
      news: [],
      signEmailSelect: 'gmail.com',
      emailList: [
        'gmail.com',
        'qq.com',
        'outlook.com',
        '163.com',
        '126.com',
        'yeah.net',
        'foxmail.com',
        'sina.com',
        'icloud.com',
      ],
      isShowSuccess: false,
      isShowForgetSuccess: false,
      isShowSuccessText: '账户注册完成',
      isShowForget: false,
      url: '',
      weburl: '',
      urls: '',
      tabIndex: 'home',
      isNeedInvite: false,
      isEmailVerify: false,
      isShowPass: false,
      isShownewExit: false,
      isShowprofileList: '',
      isShowStore: '',
      isUpdateData: false,
      isWebLogin: false,
      isShowAbout: false,
      isShownodeList: false,
      isShowTos: '',
      isShowNews: false,
      isShowknowledge: false,
      isShowAccountExp: false,
      isAccountExp: false,
      isShowAccountTrafficExhausted: false,
      isAccountExhausted: false,
      isShowPrivacy: '',
      passtype: 'password',
      isCurreNode: 0,
      isAlert: false,
      isShowLoading: false,
      storeLink: '',
      isLoging: false,
      isLogin: false,
      isRegistering: false,
      isForget: false,
      showLogin: true,
      showSign: false,
      isShowLogin: false,
      isShowToast: false,
      isShowMenu: '',
      isShowMenuRight: '',
      ToastType: 'success',
      globalMode: 'testb',
      tunMode: 'testb',
      ToastText: '',
      isStart: false,
      isStarting: false,
      statusText: 'disconnect',
      user: '',
      accountName: '',
      accountExpire: '',
      accountUserTf: '',
      accountTfPercentage: 0,
      accountID: '',
      accountPlan: '',
      accountMoney: '',
      accountdays: '',
      accountCode: '',
      accountBandwidth: '',
      appDescription: '',
      appName: '',
      appLogo: '',
      isLoading: false,
      isSend: false,
      show: true,
      count: 0,
      newTimer: '',
      forgetShow: true,
      forgetCount: 0,
      forgetTimer: '',
      isCurreNodeName: '无线路可使用',
      isCurreNodePing: 0,
      isCurreNodeFlags: 'assets/flags/null.png',
      isClick: false,
      nodesIndex: '',
      _interval: null,
      _timeout: null,
      loginEmail: '',
      loginPasswd: '',
      signEmail: '',
      signCode: '',
      signInviteCode: '',
      signPasswd: '',
      signRepasswd: '',
      forgetEmail: '',
      forgetPasswd: '',
      forgetRePasswd: '',
      forgetCode: '',
      nodesAddr: [],
      nodesPing: [],
      guideList: [],
      noticeList: [],
      guideText: '加载中..',
      isShow: '',
      languages: [
        {
          name: 'English',
          code: 'en',
        },
        {
          name: '中文',
          code: 'cn',
        },
        {
          name: '繁體中文',
          code: 'hk',
        },
        {
          name: 'Tiếng Việt',
          code: 'vn',
        },
        {
          name: 'فارسی',
          code: 'fa',
        },
      ],
      isActiveLang: false,
      isActiveMore: false,
      language: 'cn',
      isUpdate: false,
      updateLink: '',
      knowledgeText: '',
      pingIndex: 0,
      isPing: false,
      isShowPingToast: false,
      isTos: false,
      isTggroup: false,
      isPP: false,
      isWebsite: false,
      weblink: '',
      tggrouplink: '',
      pplink: '',
      toslink: '',
      accountCardHeight: 100,
      langsHeight: 60,
      showAccountInvite: false,
      isShowHome: false,
      isShowAccount: false,
      isShowMore: false,
      isFetchKnowledge: false,
      isFetchNotice: false,
      isShowPreferences: false,
      testMsg: 'test msg',
      tfUp: '0.0B',
      tfDown: '0.0B',
      tfupTotal: 0,
      tfdownTotal: 0,
      wsServer: null,
      lastRefreshTime: localStorage.getItem('lastRefreshTime'),
      isCore: false,
      isCoreing: false,
      crispID: '',
      chatUrl: '',
      apptheme: '',
      themes: [
        {
          name: 'Default',
          hex: '#0074FF',
        },
        {
          name: 'Rose',
          hex: '#e11d48',
        },
        {
          name: 'Pink',
          hex: '#db2777',
        },
        {
          name: 'Purple',
          hex: '#9333ea',
        },
        {
          name: 'Indigo',
          hex: '#4f46e5',
        },
        {
          name: 'Blue',
          hex: '#2563eb',
        },
        {
          name: 'Cyan',
          hex: '#0891b2',
        },
        {
          name: 'Emerald',
          hex: '#059669',
        },
        {
          name: 'Green',
          hex: '#16a34a',
        },
        {
          name: 'Orange',
          hex: '#ea580c',
        },
        {
          name: 'Red',
          hex: '#dc2626',
        },
        {
          name: 'Neutral',
          hex: '#525252',
        },
        {
          name: 'Yellow',
          hex: '#facc15',
        },
      ],
      chatType: '',
      chatID: '',
      chatLink: '',
      isShowChatContainer: false,
      isChatLoading: true,
      isShowCrispHideBtn: false,
      colorsHeight: 60,
      hostUrl: '',
      plans: [],
      payments: [],
      pname: '',
      selectedPlanCycle: '',
      selectedBalanceAmount: '',
      selectedPlantotalAmount: '',
      selectedPlantotalDiscountAmount: '',
      selectedPlantotalHandlingAmount: '',
      selectedPlanOrderNo: '',
      selectedPlanLink: '',
      selectedPlanID: '',
      discountCode: '',
      isCoupon: false,
      isCouponValue: null,
      isCouponIng: false,
      orderCoupon: '',
      selectedPayID: '',
      selectedPlans: [],
      selectOderName: '',
      isFetchPlaning: false,
      isPay: false,
      isPayPopup: false,
      currency_symbol: '\xA5',
      isShowPlanInfo: false,
      currentPlan: null,
      isSupport: false,
      apihost: [
        'https://code.spaceco.cc/host.php',
      ],
      apiLists: [],
      currentPage: 1,
      pageSize: 5,
      isFetchOrdersing: false,
      searchTerm: '',
      orders: [],
      invite_code: '',
      invite_codes: '',
      inviteUrl: '',
      invite_commission_balance: 0,
      invite_commission_rate: 0,
      invite_get_amount: 0,
      invite_uncheck_commission_balance: 0,
      invite_users: 0,
      invitedetails: [],
      pageSizeOptions: [10, 20, 50],
      isOrderRecords: false,
      isGenerateing: false,
      isGenerateIngviteing: false,
      isFetchKnowing: false,
      isDarkorLight: '',
      updateMsg: '',
      updateContextArr: '',
      isAppAlert: false,
      isNetwork_proxy_settings: false,
      AppAlertMessage: '',
      AppAlertTitle: '',
      AppAlertImg: '',
      AppAlertTags: [],
      classesList: [
        'bg-blue-100 text-blue-800',
        'bg-green-100 text-green-800',
        'bg-purple-100 text-purple-800',
        'bg-yellow-100 text-yellow-800',
        'bg-pink-100 text-pink-800',
      ],
      tagClasses: [],
      v2bKeysToConsider: [
        'month_price',
        'quarter_price',
        'half_year_price',
        'year_price',
        'two_year_price',
        'three_year_price',
        'onetime_price',
        'reset_price',
      ],
      xbKeysToConsider: [
        'monthly',
        'quarterly',
        'half_yearly',
        'yearly',
        'two_yearly',
        'three_yearly',
        'onetime',
        'reset_traffic',
      ],
      tunJson: {
        address: ['172.19.0.1/30', 'fdfe:dcba:9876::1/126'],
        auto_route: true,
        endpoint_independent_nat: true,
        sniff: true,
        sniff_override_destination: true,
        stack: 'system',
        strict_route: true,
        type: 'tun',
      },
    }
  },
  watch: {
    apptheme(_0x38d96d) {
      document.documentElement.style.setProperty('--app-theme-color', _0x38d96d)
    },
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.knowledgeText, { sanitize: true })
    },
    filteredOrders() {
      const _0x378aea = (this.searchTerm || '').toLowerCase()
      if (!_0x378aea) {
        return this.orders
      }
      return this.orders.filter((_0x2301c3) => {
        const _0x2b969a = [
          _0x2301c3.id,
          _0x2301c3.period,
          _0x2301c3.status,
          _0x2301c3.updated_at,
          _0x2301c3.total_amount,
        ]
        return _0x2b969a.some((_0x335365) =>
          String(_0x335365 || '')
            .toLowerCase()
            .includes(_0x378aea)
        )
      })
    },
    totalPages() {
      return Math.ceil(this.filteredOrders.length / this.pageSize)
    },
    inviterTotalPages() {
      return Math.ceil(this.invitedetails.length / this.pageSize)
    },
    paginatedOrders() {
      const _0x12db79 = (this.currentPage - 1) * this.pageSize,
        _0x5ad265 = _0x12db79 + this.pageSize
      return this.filteredOrders.slice(_0x12db79, _0x5ad265)
    },
    paginatedInviterData() {
      const _0x18faf7 = (this.currentPage - 1) * this.pageSize,
        _0x2554f4 = _0x18faf7 + this.pageSize
      return this.invitedetails.slice(_0x18faf7, _0x2554f4)
    },
  },
  created() {
    let _0x2142da = this
    const _0x1d92f4 = window.localStorage,
      _0x1821cc = _0x1d92f4.getItem('APP_API_URL')
    _0x1d92f4.getItem('APP_THEME') == null
      ? ((_0x2142da.apptheme = '#0074FF'),
        _0x1d92f4.setItem('APP_THEME', _0x2142da.apptheme))
      : (_0x2142da.apptheme = _0x1d92f4.getItem('APP_THEME'))
    _0x1d92f4.getItem('APP_DATA_TUN') == null
      ? ((_0x2142da.tunMode = 'testb'), _0x1d92f4.setItem('APP_DATA_TUN', 0))
      : _0x1d92f4.getItem('APP_DATA_TUN') == 1
      ? (_0x2142da.tunMode = 'testa testani')
      : (_0x2142da.tunMode = 'testb')
    _0x1821cc == null
      ? (console.log('api null'), _0x2142da.initFetch())
      : ((_0x2142da.url = _0x1821cc),
        _0x2142da.initApp(),
        console.log('api ' + _0x1821cc))
    _0x2142da.updateTheme()
    HSThemeSwitch.autoInit()
    setTimeout(function () {
      $('.initDom').addClass('isHide')
      _0x2142da.initConf()
    }, 2000)
  },
  mounted() {
    const _0x58016b = this,
      _0x20d16c = window.localStorage,
      _0x52d860 = JSON.parse(_0x20d16c.getItem('APP_DATA_USER'))
    $(document).on('click', 'a[href^="http"]', function (_0x1c0e12) {
      console.log(_0x1c0e12.target)
      _0x1c0e12.preventDefault()
    })
    $(document).on('click', function () {
      _0x58016b.isActiveMore = false
      _0x58016b.isActiveLang = false
    })
    if (_0x20d16c.getItem('APP_LANG') == null) {
      let _0x1b7519 = navigator.language.toLowerCase()
      var _0x5ea709 = _0x1b7519.includes('zh'),
        _0x62ce09 = _0x1b7519.includes('vi'),
        _0x171144 = _0x1b7519.includes('fa'),
        _0x260dda = _0x1b7519.includes('hk'),
        _0x12f0b1 = _0x1b7519.includes('tw')
      if (_0x260dda) {
        _0x58016b['$i18n'].locale = 'hk'
      } else {
        if (_0x12f0b1) {
          _0x58016b['$i18n'].locale = 'hk'
        } else {
          if (_0x5ea709) {
            _0x58016b['$i18n'].locale = 'cn'
          } else {
            if (_0x62ce09) {
              _0x58016b['$i18n'].locale = 'vn'
            } else {
              _0x171144
                ? (_0x58016b['$i18n'].locale = 'fa')
                : (_0x58016b['$i18n'].locale = 'en')
            }
          }
        }
      }
      _0x58016b.language = _0x58016b['$i18n'].locale
    } else {
      _0x58016b.language = _0x20d16c.getItem('APP_LANG')
      _0x58016b['$i18n'].locale = _0x58016b.language
    }
  },
  methods: {
    formattedContent(_0x4c019a) {
      return _0x4c019a.split(/<br\s*\/?>/)
    },
    initApp() {
      const _0x274d71 = this,
        _0x1bc149 = window.localStorage,
        _0x4a0f15 = JSON.parse(_0x1bc149.getItem('APP_DATA_USER'))
      _0x274d71.initBridge()
      _0x274d71.initC()
      _0x274d71.initConfig()
      _0x274d71.init()
      _0x274d71.initNotice()
      _0x274d71.initUpdate()
      _0x274d71.getPaymentMethod()
      _0x274d71.getAppPlans()
      _0x4a0f15 != null && _0x274d71.getAppAlert()
    },
    async initFetch() {
      const _0x166869 = this,
        _0x14953b = window.localStorage
      try {
        await _0x166869.fetchAPIContent()
        const _0x210585 = await _0x166869.checkAPIEndpoints()
        let _0x5b3bd1 = _0x210585 + '/'
        _0x166869.url = _0x5b3bd1
        _0x14953b.setItem('APP_API_URL', _0x5b3bd1)
        _0x166869.initApp()
        console.log('最终获取到的数据:', _0x210585)
      } catch (_0x14afcc) {
        console.error('程序出错:', _0x14afcc)
      }
    },
    async fetchAPIContent() {
      const _0x268a51 = this
      let _0x4c788c = Date.now()
      for (let _0x2728a4 of _0x268a51.apihost) {
        try {
          const _0x458ecf = await fetch(_0x2728a4 + '?time=' + _0x4c788c)
          if (_0x458ecf.ok) {
            const _0xecabad = await _0x458ecf.json()
            return (_0x268a51.apiLists = _0xecabad.url), _0xecabad.url
          } else {
            console.warn('请求失败\uFF0C状态码: ' + _0x458ecf.status)
          }
        } catch (_0x2e4fc8) {
          console.error('请求错误: ' + _0x2e4fc8)
        }
      }
      throw new Error('所有请求均失败')
    },
    async checkAPIEndpoints() {
      const _0x284cbd = this
      let _0x30c8e0 = Date.now()
      for (let _0x5aa278 of _0x284cbd.apiLists) {
        try {
          const _0x5c6360 = await fetch(
              _0x5aa278 + '/api/v1/app/config?time=' + _0x30c8e0
            ),
            _0x536411 = await _0x5c6360.json()
          if (_0x536411.data) {
            return _0x5aa278
          }
        } catch (_0x1e7e83) {
          console.warn('请求 ' + _0x5aa278 + ' 失败\uFF0C尝试下一个')
        }
      }
      throw new Error('所有 API 请求均失败')
    },
    async updateApi() {
      const _0x48cc44 = this,
        _0x4d2eaa = window.localStorage
      try {
        await _0x48cc44.fetchAPIContent()
        const _0x54839c = await _0x48cc44.checkAPIEndpoints()
        let _0x51ab05 = _0x54839c + '/'
        _0x48cc44.url = _0x51ab05
        _0x4d2eaa.setItem('APP_API_URL', _0x51ab05)
        _0x48cc44.initC()
        _0x48cc44.initNotice()
        _0x48cc44.initUpdate()
        console.log('最终获取到的数据:', _0x54839c)
      } catch (_0x36506e) {
        console.error('程序出错:', _0x36506e)
      }
    },
    buyOrder(_0x5996ba) {
      const _0x458fd4 = this
      _0x458fd4.selectedPayID = _0x5996ba.id
      setTimeout(function () {
        _0x458fd4.isPay = true
        _0x458fd4.ordersave()
      }, 100)
    },
    getPaymentMethod() {
      const _0x412f0f = this
      fetch(_0x412f0f.url + 'api/v1/app/apppaymentmethod', {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      })
        .then(function (_0x52b963) {
          _0x52b963.json().then(function (_0x19d5df) {
            _0x19d5df &&
              _0x19d5df.data != '' && (_0x412f0f.payments = _0x19d5df.data)
          })
        })
        .catch((_0x3b4308) => {
          _0x412f0f.getPaymentMethod()
          console.log(_0x3b4308)
        })
    },
    getAppPlans() {
      const _0xa03f77 = this
      _0xa03f77.isFetchPlaning = true
      _0xa03f77.plans = []
      _0xa03f77.selectedPlans = []
      fetch(_0xa03f77.url + 'api/v1/app/appshop', {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      })
        .then(function (_0x3e90de) {
          _0x3e90de.json().then(function (_0x585219) {
            _0xa03f77.isFetchPlaning = false
            if (_0x585219) {
              if (_0x585219.status == 1) {
                _0xa03f77.plans = _0x585219.data
                if (_0x585219.data.length > 0) {
                  var _0x4ff19b = [],
                    _0x286376 = _0x585219.data[0],
                    _0xc4cdf7 = _0xa03f77.v2bKeysToConsider
                  _0xa03f77.panelType === 'v2board'
                    ? (_0xc4cdf7 = _0xa03f77.v2bKeysToConsider)
                    : (_0xc4cdf7 = _0xa03f77.xbKeysToConsider)
                  _0xc4cdf7.forEach((_0x4c1794) => {
                    _0x286376[_0x4c1794] !== null &&
                      _0x286376[_0x4c1794] !== undefined &&
                      _0x4ff19b.push({
                        name: _0x4c1794,
                        price: _0x286376[_0x4c1794],
                      })
                  })
                  _0xa03f77.selectedPlans = _0x4ff19b
                }
              }
            }
          })
        })
        .catch((_0x5d12d0) => {
          _0xa03f77.getAppPlans()
          _0xa03f77.isFetchPlaning = false
        })
    },
    applyCoupon() {
      const _0x276975 = this
      if (_0x276975.isPay) {
        return
      }
      _0x276975.animateCSS('.applyCouponBtn', 'loginButtonAni')
      if (_0x276975.isCouponIng) {
        return
      }
      _0x276975.isCouponIng = true
      if (_0x276975.discountCode == '' || _0x276975.discountCode == null) {
        _0x276975.Toast(_0x276975['$t']('lang.couponinputerror'), 'warn')
        _0x276975.isCouponIng = false
        return
      }
      const _0x4651a2 = window.localStorage,
        _0x53e410 = JSON.parse(_0x4651a2.getItem('APP_DATA_USER'))
      var _0x1c7374 = Date.parse(new Date())
      fetch(_0x276975.url + 'api/v1/app/couponCheck?time=' + _0x1c7374, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:
          'code=' +
          _0x276975.discountCode +
          '&plan_id=' +
          _0x276975.selectedPlanID +
          '&token=' +
          _0x53e410.token,
      })
        .then((_0x18a05f) => {
          try {
            return _0x18a05f.json()
          } catch (_0xb5a37) {}
          return _0x18a05f.text()
        })
        .then((_0x973ae8) => {
          console.log(_0x973ae8)
          if (_0x973ae8.message) {
            _0x276975.isCouponIng = false
            _0x276975.Toast(_0x973ae8.message, 'warn')
            return
          }
          _0x973ae8.status == 1
            ? ((_0x276975.isCouponValue = _0x973ae8.data.value / 100),
              (_0x276975.isCoupon = true),
              _0x276975.Toast(_0x973ae8.msg, 'success'))
            : _0x973ae8.msg
            ? _0x276975.Toast(_0x973ae8.msg, 'warn')
            : _0x276975.Toast(_0x973ae8.message, 'warn')
          _0x276975.isCouponIng = false
        })
        .catch((_0x1c8c9d) => {
          _0x276975.isCouponIng = false
        })
    },
    ordersave() {
      const _0x3ab8db = this,
        _0x5efc70 = window.localStorage,
        _0x3d887a = JSON.parse(_0x5efc70.getItem('APP_DATA_USER'))
      var _0x330bf1 = Date.parse(new Date())
      fetch(_0x3ab8db.url + 'api/v1/app/ordersave?time=' + _0x330bf1, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:
          'period=' +
          _0x3ab8db.selectedPlanCycle +
          '&plan_id=' +
          _0x3ab8db.selectedPlanID +
          '&token=' +
          _0x3d887a.token +
          '&coupon_code=' +
          _0x3ab8db.discountCode,
      })
        .then((_0x208208) => {
          try {
            return _0x208208.json()
          } catch (_0x302357) {}
          return _0x208208.text()
        })
        .then((_0xf54dd1) => {
          if (_0xf54dd1.status === 1) {
            _0x3ab8db.selectedPlanOrderNo = _0xf54dd1.data
            _0x3ab8db.checkout()
          } else {
            _0xf54dd1.status === -1
              ? _0x3ab8db.ordersave()
              : ((_0x3ab8db.isPay = false),
                (_0x3ab8db.selectedPayID = null),
                _0xf54dd1.msg
                  ? _0x3ab8db.Toast(_0xf54dd1.msg, 'warn')
                  : _0x3ab8db.Toast(_0xf54dd1.message, 'warn'))
          }
        })
        .catch((_0x34307a) => {
          _0x3ab8db.isPay = false
          _0x3ab8db.selectedPayID = null
        })
    },
    checkout() {
      const _0x4e7249 = this,
        _0x4ea800 = window.localStorage,
        _0x3565d4 = JSON.parse(_0x4ea800.getItem('APP_DATA_USER'))
      var _0x3d4378 = Date.parse(new Date())
      fetch(_0x4e7249.url + 'api/v1/app/checkout?time=' + _0x3d4378, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:
          'trade_no=' +
          _0x4e7249.selectedPlanOrderNo +
          '&method=' +
          _0x4e7249.selectedPayID +
          '&token=' +
          _0x3565d4.token +
          '&usertoken=' +
          _0x3565d4.token,
      })
        .then((_0x3edb48) => {
          try {
            return _0x3edb48.json()
          } catch (_0x568af0) {}
          return _0x3edb48.text()
        })
        .then((_0x32ba65) => {
          if (_0x32ba65.status === 1) {
            _0x4e7249.detailOrder()
            _0x4e7249.selectedPlanLink = _0x32ba65.data
          } else {
            _0x32ba65.status === -1
              ? (_0x4e7249.Toast(_0x32ba65.msg, 'success'),
                _0x4e7249.initConfig(),
                (_0x4e7249.isPay = false),
                (_0x4e7249.isShowPlanInfo = false),
                (_0x4e7249.selectedPayID = null),
                _0x4e7249.update())
              : ((_0x4e7249.isPay = false),
                (_0x4e7249.selectedPayID = null),
                _0x32ba65.msg
                  ? _0x4e7249.Toast(_0x32ba65.msg, 'warn')
                  : _0x4e7249.Toast(_0x32ba65.message, 'warn'))
          }
        })
        .catch((_0x1d8a7e) => {
          _0x4e7249.selectedPayID = null
          _0x4e7249.isPay = false
        })
    },
    checkPayStaus() {
      const _0x388250 = this,
        _0xc4f89f = window.localStorage,
        _0x3cd902 = JSON.parse(_0xc4f89f.getItem('APP_DATA_USER'))
      _0x388250.isUpdateData = true
      fetch(_0x388250.url + 'api/v1/app/checktrade', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:
          'trade_no=' +
          _0x388250.selectedPlanOrderNo +
          '&token=' +
          _0x3cd902.token,
      })
        .then(function (_0x34807d) {
          _0x34807d.json().then(function (_0x1b8285) {
            if (_0x1b8285) {
              if (_0x1b8285.status == 1 || _0x1b8285.status == 3) {
                _0x388250.isUpdateData = false
                _0x388250.update()
                _0x388250.initConfig()
                _0x388250.isPayPopup = false
                _0x388250.isPay = false
                _0x388250.isShowPlanInfo = false
                _0x388250.selectedPayID = null
                _0x388250.Toast(
                  _0x388250['$t']('lang.planPurchaseSuccessful'),
                  'success'
                )
              } else {
                _0x1b8285.status === 0
                  ? ((_0x388250.isUpdateData = false),
                    _0x388250.Toast(_0x388250['$t']('lang.NoPayment'), 'warn'))
                  : ((_0x388250.isUpdateData = false),
                    _0x388250.Toast(_0x388250['$t']('lang.Cancelled'), 'warn'))
              }
            }
          })
        })
        .catch((_0xce9d37) => {
          _0x388250.isUpdateData = false
        })
    },
    ContinueToPay() {
      const _0x5f3e9c = this
      shell.openExternal(_0x5f3e9c.selectedPlanLink)
    },
    detailOrder(_0x2543bb) {
      const _0x5375d1 = this,
        _0x2cf3c8 = window.localStorage,
        _0x525a6a = JSON.parse(_0x2cf3c8.getItem('APP_DATA_USER'))
      _0x5375d1.selectedPlantotalDiscountAmount = 0
      _0x5375d1.selectedPlantotalHandlingAmount = 0
      _0x5375d1.selectedPlantotalAmount = 0
      _0x5375d1.selectedBalanceAmount = 0
      fetch(
        _0x5375d1.url +
          'api/v1/app/orderdetail?token=' +
          _0x525a6a.token +
          '&trade_no=' +
          _0x5375d1.selectedPlanOrderNo,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
        }
      )
        .then(function (_0x4f3d2a) {
          _0x4f3d2a.json().then(function (_0x571de7) {
            _0x571de7 &&
              (_0x571de7.status == 1
                ? ((_0x5375d1.isPayPopup = true),
                  (_0x5375d1.selectedPlantotalHandlingAmount =
                    _0x571de7.data.handling_amount / 100),
                  (_0x5375d1.selectedPlantotalDiscountAmount =
                    _0x571de7.data.discount_amount / 100),
                  (_0x5375d1.selectedPlantotalAmount =
                    _0x571de7.data.total_amount / 100),
                  (_0x5375d1.selectedBalanceAmount =
                    _0x571de7.data.balance_amount / 100),
                  _0x5375d1.selectedPlantotalHandlingAmount > 0 &&
                    (_0x5375d1.selectedPlantotalAmount =
                      _0x5375d1.selectedPlantotalAmount +
                      _0x5375d1.selectedPlantotalHandlingAmount),
                  (_0x5375d1.isPay = false),
                  setTimeout(function () {
                    shell.openExternal(_0x5375d1.selectedPlanLink)
                  }, 300))
                : ((_0x5375d1.isPay = false),
                  _0x5375d1.Toast(_0x571de7.msg, 'warn')))
          })
        })
        .catch((_0x398cae) => {
          _0x5375d1.isPay = false
          console.log(_0x398cae)
        })
    },
    ordercancel() {
      const _0x159118 = this,
        _0x36e855 = window.localStorage,
        _0x200b56 = JSON.parse(_0x36e855.getItem('APP_DATA_USER'))
      _0x159118.isUpdateData = true
      fetch(_0x159118.url + 'api/v1/app/ordercancel', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:
          'trade_no=' +
          _0x159118.selectedPlanOrderNo +
          '&token=' +
          _0x200b56.token,
      })
        .then(function (_0x1e88a0) {
          _0x1e88a0.json().then(function (_0x429c98) {
            _0x429c98 &&
              (_0x429c98.status === 1
                ? ((_0x159118.isUpdateData = false),
                  (_0x159118.isPay = false),
                  (_0x159118.isPayPopup = false),
                  (_0x159118.selectedPayID = null),
                  (_0x159118.isShowPlanInfo = false),
                  _0x159118.Toast(_0x429c98.msg, 'success'))
                : ((_0x159118.isUpdateData = false),
                  _0x159118.Toast(_0x429c98.msg, 'warn')))
          })
        })
        .catch((_0x17690e) => {
          console.log(_0x17690e)
        })
    },
    cancelCoupon() {
      const _0x56b281 = this
      _0x56b281.isCoupon = false
      _0x56b281.isCouponValue = null
      _0x56b281.discountCode = ''
      _0x56b281.Toast(_0x56b281['$t']('lang.CanceledUseOfCoupon'), 'warn')
    },
    selectPlan(_0x2ec106, _0x13794d) {
      const _0x479aac = this
      _0x479aac.selectOderName = _0x2ec106.name
      _0x479aac.selectedPlanID = _0x2ec106.id
      _0x479aac.isShowPlanInfo = true
      if (_0x2ec106 != null && _0x2ec106 != '') {
        var _0x2de298 = []
        _0x479aac.selectedPlanCycle = ''
        _0x479aac.selectedPlans = []
        var _0x38e19c = _0x479aac.v2bKeysToConsider
        _0x479aac.panelType === 'v2board'
          ? (_0x38e19c = _0x479aac.v2bKeysToConsider)
          : (_0x38e19c = _0x479aac.xbKeysToConsider)
        _0x38e19c.forEach((_0x5d314f) => {
          _0x2ec106[_0x5d314f] !== null &&
            _0x2ec106[_0x5d314f] !== undefined &&
            (_0x2de298.push({
              name: _0x5d314f,
              price: _0x2ec106[_0x5d314f],
            }),
            _0x479aac.selectedPlanCycle === '' &&
              (_0x479aac.selectedPlanCycle = _0x5d314f))
        })
        _0x479aac.selectedPlans = _0x2de298
      }
    },
    select(_0x365ce7) {
      const _0x28c9a8 = this
      if (_0x28c9a8.isPay) {
        return
      }
      _0x28c9a8.selectedPlanCycle = _0x365ce7.name
    },
    hidePlanInfo() {
      const _0x4648e6 = this
      _0x4648e6.isShowPlanInfo = false
      _0x4648e6.selectedPayID = null
    },
    isHTML(_0x57d95d) {
      return /<[^>]*>/.test(_0x57d95d)
    },
    winClose() {
      onClickControl('winHide', '')
    },
    winMini() {
      onClickControl('winMini', '')
    },
    hideWeb() {
      this.isWebStore = false
    },
    initCrisp() {
      const _0x429c21 = this
      if (_0x429c21.crispID == '') {
        return
      }
      window['$crisp'] = []
      window.CRISP_WEBSITE_ID = _0x429c21.crispID
      ;(function () {
        var _0x39693d = document,
          _0x4ed5cf = _0x39693d.createElement('script')
        _0x4ed5cf.src = 'https://client.crisp.chat/l.js'
        _0x4ed5cf.async = 1
        _0x39693d.getElementsByTagName('head')[0].appendChild(_0x4ed5cf)
      })()
      window.CRISP_READY_TRIGGER = function () {
        $crisp.push(['config', 'hide:on:away', [true]])
        $crisp.push(['do', 'chat:hide'])
        setTimeout(function () {
          $crisp.push(['config', 'hide:on:away', [true]])
          $('.crisp-client').addClass('isHide')
        }, 50)
        $($('#crisp-chatbox').get(0).firstChild.firstChild.nextSibling).remove()
        _0x429c21.isCrisp = true
        console.log('sdk ready1')
      }
    },
    copyInvite(_0x5132e4) {
      const _0x4cd368 = this
      if (_0x5132e4 == 'code') {
        _0x4cd368.animateCSS('.codeCopy', 'loginButtonAni')
        _0x4cd368.Toast(_0x4cd368['$t']('lang.copysuccessfully'), 'success')
        navigator.clipboard &&
          navigator.clipboard.writeText(_0x4cd368.accountCode)
      } else {
        if (navigator.clipboard) {
          let _0x6758fd = _0x4cd368.inviteUrl + _0x4cd368.invite_code
          navigator.clipboard.writeText(_0x6758fd)
        }
        _0x4cd368.Toast(_0x4cd368['$t']('lang.copysuccessfully'), 'success')
      }
    },
    invite() {
      const _0x4b5820 = this
      _0x4b5820.showAccountInvite = true
      _0x4b5820.getAppinvite()
      _0x4b5820.getAppinvitedetails()
      setTimeout(function () {
        HSTabs.autoInit()
      }, 100)
    },
    isImageFile(_0x2c74c1) {
      return /\.(jpeg|jpg|gif|png|svg)$/i.test(_0x2c74c1)
    },
    setColorCardHeight() {
      const _0xb663bc = this
      _0xb663bc.animateCSS('.colorCard', 'loginButtonAni')
      _0xb663bc.colorsHeight == 60
        ? (_0xb663bc.colorsHeight = 230)
        : (_0xb663bc.colorsHeight = 60)
    },
    alphaToColor(_0x597a36, _0x418b21) {
      const _0x14e94e = _0x597a36.replace(/^#/, ''),
        _0x3f6742 = parseInt(_0x14e94e, 16),
        _0x16bbea = (_0x3f6742 >> 16) & 255,
        _0x13792e = (_0x3f6742 >> 8) & 255,
        _0x1d6306 = _0x3f6742 & 255,
        _0x2d6b10 = Math.min(1, Math.max(0, _0x418b21))
      return (
        'rgba(' +
        _0x16bbea +
        ', ' +
        _0x13792e +
        ', ' +
        _0x1d6306 +
        ', ' +
        _0x2d6b10 +
        ')'
      )
    },
    setTheme(_0x1feefd) {
      const _0x1e53fb = this,
        _0x436201 = window.localStorage
      _0x436201.setItem('APP_THEME', _0x1feefd.hex)
      _0x1e53fb.apptheme = _0x1feefd.hex
      _0x1e53fb.sendMess('color', _0x1e53fb.apptheme)
    },
    setAccountCardHeight() {
      const _0x979304 = this
      _0x979304.accountCardHeight == 100
        ? (_0x979304.accountCardHeight = 140)
        : (_0x979304.accountCardHeight = 100)
    },
    setLangCardHeight() {
      const _0x39a6ff = this
      _0x39a6ff.animateCSS('.langCard', 'loginButtonAni')
      _0x39a6ff.langsHeight == 60
        ? (_0x39a6ff.langsHeight = 270)
        : (_0x39a6ff.langsHeight = 60)
    },
    setLang(_0x281269) {
      const _0x1bb703 = this,
        _0x3360fc = window.localStorage
      _0x1bb703['$i18n'].locale = _0x281269.code
      _0x3360fc.setItem('APP_LANG', _0x281269.code)
      _0x1bb703.language = _0x281269.code
    },
    getRandomClass() {
      const _0x3c39e5 = Math.floor(Math.random() * this.classesList.length)
      return this.classesList[_0x3c39e5]
    },
    updateTheme() {
      const _0x4f97fc = this,
        _0x48250c = document.querySelector('html'),
        _0x350002 =
          localStorage.getItem('hs_theme') === 'light' ||
          (localStorage.getItem('hs_theme') === 'auto' &&
            !window.matchMedia('(prefers-color-scheme: dark)').matches),
        _0x1ffabd =
          localStorage.getItem('hs_theme') === 'dark' ||
          (localStorage.getItem('hs_theme') === 'auto' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
      if (_0x350002 && _0x48250c.classList.contains('dark')) {
        _0x48250c.classList.remove('dark')
        _0x4f97fc.isDarkorLight = 'light'
      } else {
        if (_0x1ffabd && _0x48250c.classList.contains('light')) {
          _0x48250c.classList.remove('light')
          _0x4f97fc.isDarkorLight = 'dark'
        } else {
          if (_0x1ffabd && !_0x48250c.classList.contains('dark')) {
            _0x48250c.classList.add('dark')
            _0x4f97fc.isDarkorLight = 'dark'
          } else {
            _0x350002 &&
              !_0x48250c.classList.contains('light') &&
              (_0x48250c.classList.add('light'),
              (_0x4f97fc.isDarkorLight = 'light'))
          }
        }
      }
    },
    toggleAccordion(_0x25c62a, _0x36b553) {
      const _0x33626a = this
      _0x33626a.isFetchKnowing = true
      $('.tosGuideText').html('')
      _0x33626a.getGuideText(_0x25c62a.id, _0x25c62a)
      _0x25c62a.isOpen = true
    },
    getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    },
    ConvertFlag(_0x5b64c6) {
      if (_0x5b64c6 === 'cn') {
        return 'assets/flags/cn.png'
      } else {
        if (_0x5b64c6 === 'en') {
          return 'assets/flags/us.png'
        } else {
          if (_0x5b64c6 === 'vn') {
            return 'assets/flags/vn.png'
          } else {
            if (_0x5b64c6 === 'hk') {
              return 'assets/flags/hk.png'
            } else {
              if (_0x5b64c6 === 'fa') {
                return 'assets/flags/ir.png'
              }
            }
          }
        }
      }
    },
    getAppAlert() {
      const _0x3a113c = this,
        _0x3813b0 = window.localStorage,
        _0xe5a819 = JSON.parse(_0x3813b0.getItem('APP_DATA_USER'))
      var _0x1cbd06 = ''
      if (_0xe5a819 == null) {
      } else {
        _0x1cbd06 = _0xe5a819.token
      }
      fetch(_0x3a113c.url + 'api/v1/app/appalert', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'token=' + _0x1cbd06 + '&lang=' + _0x3a113c.language,
      })
        .then((_0x56f4b4) => {
          try {
            return _0x56f4b4.json()
          } catch (_0x1b29fc) {}
          return _0x56f4b4.text()
        })
        .then((_0x5b140c) => {
          _0x5b140c.status === 1 &&
            ((_0x3a113c.isAppAlert = true),
            _0x3a113c.isHTML(_0x5b140c.context)
              ? ((_0x3a113c.AppAlertMessage = ''),
                setTimeout(function () {
                  $('.AppAlertMessage').html(_0x5b140c.context)
                }, 100))
              : (_0x3a113c.AppAlertMessage = _0x5b140c.context),
            (_0x3a113c.AppAlertTitle = _0x5b140c.title),
            (_0x3a113c.AppAlertImg = _0x5b140c.img),
            (_0x3a113c.AppAlertTags = _0x5b140c.tags))
        })
        .catch((_0x4f9d02) => {
          console.log(_0x4f9d02)
        })
    },
    getAppinvitedetails() {
      const _0x378030 = this,
        _0x3a2b6a = window.localStorage,
        _0xf6eea7 = JSON.parse(_0x3a2b6a.getItem('APP_DATA_USER'))
      var _0x4352cb = ''
      if (_0xf6eea7 == null) {
      } else {
        _0x4352cb = _0xf6eea7.token
      }
      fetch(_0x378030.url + 'api/v1/app/invitedetails', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'token=' + _0x4352cb,
      })
        .then((_0x4c5f56) => {
          try {
            return _0x4c5f56.json()
          } catch (_0x382cd7) {}
          return _0x4c5f56.text()
        })
        .then((_0x196e7b) => {
          if (_0x196e7b.message) {
            _0x378030.Toast(_0x196e7b.message, 'error')
            return
          }
          _0x378030.invitedetails = []
          _0x196e7b.data && (_0x378030.invitedetails = _0x196e7b.data)
        })
        .catch((_0x4dc97b) => {
          console.log(_0x4dc97b)
        })
    },
    Generate_new_invitation_code() {
      const _0x58a933 = this,
        _0x401dc4 = window.localStorage,
        _0x2611cb = JSON.parse(_0x401dc4.getItem('APP_DATA_USER'))
      var _0x15b4b9 = ''
      if (_0x2611cb == null) {
      } else {
        _0x15b4b9 = _0x2611cb.token
      }
      _0x58a933.isGenerateing = true
      fetch(_0x58a933.url + 'api/v1/app/inviteCodeNew', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'token=' + _0x15b4b9,
      })
        .then((_0x358343) => {
          try {
            return _0x358343.json()
          } catch (_0x1dcfe0) {}
          return _0x358343.text()
        })
        .then((_0x1e738a) => {
          _0x58a933.isGenerateing = false
          if (_0x1e738a.msg) {
            _0x58a933.Toast(_0x1e738a.msg, 'error')
            return
          }
          _0x1e738a.status === 1 &&
            (_0x58a933.getAppinvite(),
            _0x58a933.Toast(
              _0x58a933['$t']('lang.new_invitation_code_has_been_generated'),
              'success'
            ))
        })
        .catch((_0x4eeaad) => {
          _0x58a933.isGenerateing = false
          console.log(_0x4eeaad)
        })
    },
    getAppinvite() {
      const _0xec90cf = this,
        _0xe12df0 = window.localStorage,
        _0xb5f3cb = JSON.parse(_0xe12df0.getItem('APP_DATA_USER'))
      var _0x42044b = ''
      if (_0xb5f3cb == null) {
      } else {
        _0x42044b = _0xb5f3cb.token
      }
      _0xec90cf.isGenerateIngviteing = true
      fetch(_0xec90cf.url + 'api/v1/app/appinvite', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'token=' + _0x42044b,
      })
        .then((_0x3f6976) => {
          try {
            return _0x3f6976.json()
          } catch (_0x368469) {}
          return _0x3f6976.text()
        })
        .then((_0x2ba51e) => {
          _0xec90cf.isGenerateIngviteing = false
          if (_0x2ba51e.message) {
            _0xec90cf.Toast(_0x2ba51e.message, 'error')
            return
          }
          _0x2ba51e.status === 1 &&
            ((_0xec90cf.invite_code = _0x2ba51e.code),
            (_0xec90cf.invite_codes = _0x2ba51e.codes),
            (_0xec90cf.invite_commission_balance =
              _0x2ba51e.invite_commission_balance / 100),
            (_0xec90cf.invite_commission_rate =
              _0x2ba51e.invite_commission_rate),
            (_0xec90cf.invite_get_amount = _0x2ba51e.invite_get_amount / 100),
            (_0xec90cf.invite_uncheck_commission_balance =
              _0x2ba51e.invite_uncheck_commission_balance / 100),
            (_0xec90cf.invite_users = _0x2ba51e.invite_users))
        })
        .catch((_0x4adaba) => {
          _0xec90cf.isGenerateIngviteing = false
          console.log(_0x4adaba)
        })
    },
    selectCode(_0x1f3e85) {
      const _0x54187a = this
      _0x54187a.invite_code = _0x1f3e85
    },
    formatOrderId(_0x362fac) {
      if (!_0x362fac || _0x362fac.length < 6) {
        return _0x362fac
      }
      return _0x362fac.slice(0, 3) + '...' + _0x362fac.slice(-3)
    },
    getOrders() {
      const _0x16e620 = this,
        _0x40e13a = window.localStorage
      _0x16e620.isFetchOrdersing = true
      const _0x458c4d = JSON.parse(_0x40e13a.getItem('APP_DATA_USER'))
      var _0x43cfc3 = ''
      if (_0x458c4d == null) {
      } else {
        _0x43cfc3 = _0x458c4d.token
      }
      fetch(_0x16e620.url + 'api/v1/app/orderfetch?token=' + _0x43cfc3, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      })
        .then(function (_0x26ec5e) {
          _0x26ec5e.json().then(function (_0x488270) {
            _0x16e620.orders = []
            _0x16e620.isFetchOrdersing = false
            _0x488270 && _0x488270.data && (_0x16e620.orders = _0x488270.data)
          })
        })
        .catch((_0x34e42d) => {
          _0x16e620.getOrders()
          _0x16e620.isFetchOrdersing = false
        })
    },
    getAppPlans() {
      const _0x201381 = this
      _0x201381.isFetchPlaning = true
      _0x201381.plans = []
      _0x201381.selectedPlans = []
      fetch(_0x201381.url + 'api/v1/app/appshop', {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      })
        .then(function (_0x45f487) {
          _0x45f487.json().then(function (_0x5e1fd0) {
            _0x201381.isFetchPlaning = false
            if (_0x5e1fd0) {
              if (_0x5e1fd0.status == 1) {
                _0x201381.plans = _0x5e1fd0.data
                if (_0x5e1fd0.data.length > 0) {
                  var _0x5177c1 = [],
                    _0x270414 = _0x5e1fd0.data[0],
                    _0xf7df6d = _0x201381.v2bKeysToConsider
                  _0x201381.panelType === 'v2board'
                    ? (_0xf7df6d = _0x201381.v2bKeysToConsider)
                    : (_0xf7df6d = _0x201381.xbKeysToConsider)
                  _0xf7df6d.forEach((_0x4f64e2) => {
                    _0x270414[_0x4f64e2] !== null &&
                      _0x270414[_0x4f64e2] !== undefined &&
                      _0x5177c1.push({
                        name: _0x4f64e2,
                        price: _0x270414[_0x4f64e2],
                      })
                  })
                  _0x201381.selectedPlans = _0x5177c1
                }
              }
            }
          })
        })
        .catch((_0x3ccfd0) => {
          _0x201381.getAppPlans()
          _0x201381.isFetchPlaning = false
        })
    },
    initUpdate() {
      const _0x17badf = this
      fetch(_0x17badf.url + 'api/v1/app/appupdate', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'system=windows&version=' + _0x17badf.appVersion,
      })
        .then((_0x542dd3) => {
          try {
            return _0x542dd3.json()
          } catch (_0x1ce77c) {}
          return _0x542dd3.text()
        })
        .then((_0x450f19) => {
          if (_0x450f19.message) {
            _0x17badf.Toast(_0x450f19.message, 'error')
            return
          }
          _0x450f19.status == 1 &&
            ((_0x17badf.isUpdate = true),
            (_0x17badf.updateLink = _0x450f19.link),
            (_0x17badf.updateMsg = _0x450f19.msg),
            (_0x17badf.updateContextArr = _0x450f19.update_context))
        })
        .catch((_0x16b91e) => {
          console.log(_0x16b91e)
        })
    },
    changeLang(_0x17ea93) {
      const _0x42ac39 = this
      _0x42ac39.isActiveLang = !_0x42ac39.isActiveLang
      _0x17ea93.stopPropagation()
      setTimeout(function () {
        _0x42ac39.isActiveMore = !_0x42ac39.isActiveMore
      }, 5)
    },
    updateApp() {
      const _0x15f053 = this
      shell.openExternal(_0x15f053.updateLink)
    },
    task1() {
      const _0xfbe366 = this
      _0xfbe366.statusText = 'Getting_Ethernet'
      setTimeout(() => {
        _0xfbe366.task2()
      }, 2000)
    },
    task2() {
      const _0x5d9ef6 = this
      _0x5d9ef6.statusText = 'Configuring_Ethernet'
      setTimeout(() => {
        _0x5d9ef6.task3()
      }, 1500)
    },
    task3() {
      const _0x232ac4 = this
      _0x232ac4.statusText = 'Starting_Ethernet'
    },
    formatBytes(_0x597c92, _0x507fbd = 2) {
      if (_0x597c92 === 0) {
        return '0 Bytes'
      }
      const _0x19e567 = _0x507fbd < 0 ? 0 : _0x507fbd,
        _0xd4969a = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        _0x142e46 = Math.floor(Math.log(_0x597c92) / Math.log(1024))
      return (
        parseFloat((_0x597c92 / Math.pow(1024, _0x142e46)).toFixed(_0x19e567)) +
        ' ' +
        _0xd4969a[_0x142e46]
      )
    },
    initBridge() {
      const _0x3f7a98 = this,
        _0x2fce86 = window.localStorage,
        _0xc219ab = JSON.parse(_0x2fce86.getItem('APP_DATA_USER'))
      ipc.on('appExit', function (_0xd6a85e, _0x5b0ce3) {
        console.log('appExit')
        _0x5b0ce3 != null &&
          _0x3f7a98.wsServer != null && _0x3f7a98.wsServer.close()
      })
      ipc.on('applog', function (_0x416680, _0x1c67b1) {
        console.log('applog ' + _0x1c67b1)
      })
      ipc.on('coreStatus', function (_0x37c4d6, _0x47050f) {
        console.log('core state:' + _0x47050f)
        _0x47050f != null &&
          ((_0x3f7a98.isCoreing = false),
          _0x47050f == 'true' && (_0x3f7a98.isCore = true))
      })
      ipc.on('statusJS', function (_0x1b3bb1, _0x1a0117) {
        if (_0x1a0117 != null) {
          if (_0x1a0117 == 'false') {
            _0x3f7a98.isStart = false
            _0x3f7a98.switchMode = ''
            _0x3f7a98.statusText = 'disconnect'
            _0x3f7a98.Reset()
            _0x3f7a98.tfUp = '0.0B'
            _0x3f7a98.tfDown = '0.0B'
            _0x3f7a98.tfupTotal = 0
            _0x3f7a98.tfdownTotal = 0
            _0x3f7a98.wsServer != null && _0x3f7a98.wsServer.close()
          } else {
            if (_0x1a0117 == 'error') {
              _0x3f7a98.switchMode = ''
              _0x3f7a98.isStart = false
              _0x3f7a98.statusText = 'disconnect'
              _0x3f7a98.Toast(_0x3f7a98['$t']('lang.startErr'), 'warn')
              _0x3f7a98.Reset()
              _0x3f7a98.tfUp = '0.0B'
              _0x3f7a98.tfDown = '0.0B'
              _0x3f7a98.tfupTotal = 0
              _0x3f7a98.tfdownTotal = 0
              _0x3f7a98.wsServer != null && _0x3f7a98.wsServer.close()
            } else {
              if (_0x1a0117 == 'disconnecting') {
                _0x3f7a98.statusText = 'disconnecting'
              } else {
                _0x1a0117 == 'ing'
                  ? ((_0x3f7a98.switchMode = ''),
                    (_0x3f7a98.isStart = true),
                    (_0x3f7a98.statusText = 'connecting'))
                  : ((_0x3f7a98.switchMode = 'testa'),
                    (_0x3f7a98.isStart = true),
                    (_0x3f7a98.statusText = 'connected'),
                    _0x3f7a98.startTimeFunc(true),
                    _0x3f7a98.wsServer != null && _0x3f7a98.wsServer.close(),
                    setTimeout(function () {
                      _0x3f7a98.clashMode()
                      _0x3f7a98.tfUp = '0.0B'
                      _0x3f7a98.tfDown = '0.0B'
                      _0x3f7a98.tfupTotal = 0
                      _0x3f7a98.tfdownTotal = 0
                      _0x3f7a98.wsServer = _0x3f7a98.connectWebSocket(
                        'ws://127.0.0.1:9790/traffic'
                      )
                    }, 1000))
              }
            }
          }
          setTimeout(function () {
            _0x3f7a98.isStarting = false
          }, 2000)
        }
      })
    },
    clashMode(_0x1b4901) {
      const _0x4dd706 = window.localStorage,
        _0x142e11 = this
      ;(_0x4dd706.getItem('APP_DATA_MODE') == '' ||
        _0x4dd706.getItem('APP_DATA_MODE') == null) &&
        _0x4dd706.setItem('APP_DATA_MODE', 0)
      ;(_0x4dd706.getItem('APP_DATA_INDEX') == '' ||
        _0x4dd706.getItem('APP_DATA_INDEX') == null) &&
        _0x4dd706.setItem('APP_DATA_INDEX', 0)
      let _0x509de0 = ''
      _0x142e11.mode == 1
        ? ((_0x142e11.globalMode = 'testa testani'),
          (_0x509de0 = 'Global'),
          axios
            .patch('http://127.0.0.1:9790/configs/', { mode: _0x509de0 })
            .then((_0x2918da) => {
              _0x2918da.status == 204 && _0x142e11.putProxy()
            })
            .catch((_0x5b2230) => {
              console.log(_0x5b2230)
            }))
        : ((_0x142e11.globalMode = 'testb'),
          (_0x509de0 = 'Rule'),
          axios
            .patch('http://127.0.0.1:9790/configs/', { mode: _0x509de0 })
            .then((_0x4cd202) => {
              _0x4cd202.status == 204 && _0x142e11.putProxy()
            })
            .catch((_0x379ab6) => {
              console.log(_0x379ab6)
            }))
    },
    putProxy() {
      const _0x377825 = this
      let _0x2aabfb = 'http://127.0.0.1:9790/proxies/RULE'
      _0x377825.mode == 0
        ? (_0x2aabfb = 'http://127.0.0.1:9790/proxies/RULE')
        : (_0x2aabfb = 'http://127.0.0.1:9790/proxies/GLOBAL')
      axios
        .put(_0x2aabfb, { name: _0x377825.isCurreNodeName })
        .then((_0x52923e) => {
          console.log('changeDone')
        })
        .catch((_0x1e6903) => {
          console.log(_0x2aabfb, _0x1e6903)
        })
    },
    init(_0x2327de, _0x1515a9) {
      const _0xd3d8f = window.localStorage,
        _0x35bd74 = this,
        _0x233cf5 = JSON.parse(_0xd3d8f.getItem('APP_DATA_USER'))
      ;(_0xd3d8f.getItem('APP_DATA_MODE') == '' ||
        _0xd3d8f.getItem('APP_DATA_MODE') == null) &&
        _0xd3d8f.setItem('APP_DATA_MODE', 0)
      ;(_0xd3d8f.getItem('APP_DATA_INDEX') == '' ||
        _0xd3d8f.getItem('APP_DATA_INDEX') == null) &&
        _0xd3d8f.setItem('APP_DATA_INDEX', 0)
      _0x35bd74.mode = _0xd3d8f.getItem('APP_DATA_MODE')
      _0x35bd74.nodeIndex = parseInt(_0xd3d8f.getItem('APP_DATA_INDEX'))
      _0x35bd74.mode == 1
        ? (_0x35bd74.globalMode = 'testa testani')
        : (_0x35bd74.globalMode = 'testb')
      if (_0x233cf5) {
        _0x35bd74.initSupportFile()
        if (!_0x2327de) {
          _0x35bd74.update()
        } else {
          if (_0x2327de == 'login') {
          } else {
            console.log('run login ')
          }
        }
        _0x35bd74.user = _0x233cf5
        _0x35bd74.isLogin = true
        _0x35bd74.isShowLogin = false
        _0x35bd74.accountID = _0x233cf5.accountID
        _0x35bd74.accountName = _0x233cf5.email
        _0x35bd74.accountExpire = _0x233cf5.expire
        _0x35bd74.accountMoney = _0x233cf5.money
        _0x35bd74.accountPlan = _0x233cf5.plan
        _0x35bd74.accountBandwidth = _0x233cf5.transferEnable
        _0x35bd74.accountUserTf = _0x233cf5.useTf
        _0x35bd74.accountTfPercentage = _0x233cf5.tfPercentage
        _0x35bd74.accountdays = _0x233cf5.accountdays
        _0x35bd74.accountCode = _0x233cf5.code
        _0x35bd74.accountExpire != '' &&
          (_0x35bd74.isExpired(_0x35bd74.accountExpire)
            ? ((_0x35bd74.isShowAccountExp = true),
              (_0x35bd74.isAccountExp = true),
              _0x35bd74.isStart &&
                (_0x35bd74.sendMess('stopProxy', { name: 'stopProxy' }),
                (_0x35bd74.isStart = false),
                _0x35bd74.Reset()))
            : ((_0x35bd74.isShowAccountExp = false),
              (_0x35bd74.isAccountExp = false)))
        _0x35bd74.accountTfPercentage === 0
          ? ((_0x35bd74.isAccountExhausted = true),
            (_0x35bd74.isShowAccountTrafficExhausted = true),
            _0x35bd74.isStart &&
              (_0x35bd74.sendMess('stopProxy', { name: 'stopProxy' }),
              (_0x35bd74.isStart = false),
              _0x35bd74.Reset()))
          : ((_0x35bd74.isAccountExhausted = false),
            (_0x35bd74.isShowAccountTrafficExhausted = false))
        !_0x1515a9 && ((_0x35bd74.isShowHome = true), _0x35bd74.initConf())
        _0x35bd74.isCore
          ? console.log('core started')
          : !_0x35bd74.isCoreing &&
            (onClickControl('InitCore'), console.log('core start ing'))
      } else {
        _0x35bd74.isLogin = false
        _0x35bd74.isShowHome = false
        _0x35bd74.isShowLogin = true
      }
    },
    isExpired(_0x7b2fcc) {
      var _0x223f54 = new Date(),
        _0x48a98e = new Date(_0x7b2fcc)
      return _0x48a98e < _0x223f54 ? true : false
    },
    connectWebSocket(_0x3dbcba) {
      const _0x32c73f = new WebSocket(_0x3dbcba),
        _0x58d258 = this
      _0x32c73f.onopen = function (_0x12dab4) {
        console.log('WebSocket连接已打开')
      }
      _0x32c73f.onmessage = function (_0x2b2aaf) {
        const _0x2921d2 = _0x2b2aaf.data,
          _0x2632a9 = JSON.parse(_0x2b2aaf.data)
        _0x58d258.tfupTotal += parseInt(_0x2632a9.up)
        _0x58d258.tfdownTotal += parseInt(_0x2632a9.down)
        _0x58d258.tfUp = _0x58d258.formatBytes(parseInt(_0x58d258.tfupTotal))
        _0x58d258.tfDown = _0x58d258.formatBytes(
          parseInt(_0x58d258.tfdownTotal)
        )
      }
      _0x32c73f.onclose = function (_0x6b76a0) {
        console.log('WebSocket连接已关闭')
      }
      _0x32c73f.onerror = function (_0x38baa4) {
        console.error('WebSocket发生错误:', _0x38baa4)
      }
      function _0x533e7c() {
        _0x32c73f.close()
      }
      return { close: _0x533e7c }
    },
    initConf() {
      let _0x4377ac = this
      const _0x5cddec = window.localStorage
      if (_0x5cddec.getItem('APP_DATA_USER') != null) {
        let _0x482765 = _0x5cddec.getItem('APP_DATA_USER'),
          _0x50c247 = JSON.parse(_0x482765),
          _0xc8085c = _0x50c247.configsNodes,
          _0x10557f = _0x50c247.configs
        if (
          _0xc8085c != '' &&
          _0x10557f != '' &&
          _0xc8085c != undefined &&
          _0x10557f != undefined
        ) {
          _0x4377ac.nodes = []
          let _0x4d5686 = 'apps_connect_key',
            _0x122c18 = '8c97f304422a60e0',
            _0x41cb31 = _0x4377ac.AESdecrypt(_0x10557f, _0x4d5686, _0x122c18)
          if (_0x41cb31 == '') {
          } else {
            let _0x40bcdc = _0x4377ac.AESdecrypt(
              _0xc8085c,
              _0x4d5686,
              _0x122c18
            )
            _0x4377ac.nodes = JSON.parse(_0x40bcdc)
            var _0x9a4f40 = JSON.parse(_0x41cb31)
            if (_0x9a4f40.inbounds.length > 1) {
              _0x9a4f40.inbounds = _0x9a4f40.inbounds.slice(1)
            } else {
            }
            if (_0x5cddec.getItem('APP_DATA_TUN') === 1) {
            } else {
            }
            setTimeout(function () {
              onClickControl('saveSysConfig', _0x9a4f40)
            }, 500)
          }
        }
        _0x4377ac.isStart &&
          (console.log('update sync done && isStart'),
          _0x4377ac.clashMode(true),
          setTimeout(function () {
            onClickControl('Connect', '')
          }, 500))
      }
      if (_0x4377ac.nodes.length > 0) {
        if (_0x4377ac.nodes.length > 0) {
          if (_0x5cddec.getItem('APP_DATA_INDEX') != null) {
            let _0x5aaa88 = _0x5cddec.getItem('APP_DATA_INDEX')
            parseInt(_0x5aaa88) > parseInt(_0x4377ac.nodes.length) - 1
              ? ((_0x4377ac.nodeIndex = 0),
                (_0x4377ac.nodeName = _0x4377ac.nodes[0].name),
                (_0x4377ac.nodeInfo = _0x4377ac.nodes[0].info),
                (_0x4377ac.node = _0x4377ac.nodes[0]),
                (_0x4377ac.isCurreNodeName = _0x4377ac.nodes[0].name),
                (_0x4377ac.isCurreNodeFlags = _0x4377ac.nodes[0].flag),
                _0x5cddec.setItem('APP_DATA_INDEX', 0))
              : ((_0x4377ac.nodeIndex = parseInt(_0x5aaa88)),
                (_0x4377ac.nodeName =
                  _0x4377ac.nodes[_0x4377ac.nodeIndex].name),
                (_0x4377ac.nodeInfo =
                  _0x4377ac.nodes[_0x4377ac.nodeIndex].info),
                (_0x4377ac.node = _0x4377ac.nodes[_0x4377ac.nodeIndex]),
                (_0x4377ac.isCurreNodeName =
                  _0x4377ac.nodes[_0x4377ac.nodeIndex].name),
                (_0x4377ac.isCurreNodeFlags =
                  _0x4377ac.nodes[_0x4377ac.nodeIndex].flag))
          }
        }
      }
    },
    flagtoImg(_0x362ff6) {
      if (_0x362ff6 != '') {
        return 'assets/flags/' + _0x362ff6.toLowerCase() + '.png'
      }
    },
    AESencrypt(_0x7f5694, _0x3088af, _0x170a8b) {
      _0x3088af = CryptoJS.enc.Utf8.parse(_0x3088af)
      _0x170a8b = CryptoJS.enc.Utf8.parse(_0x170a8b)
      var _0x490549 = CryptoJS.AES.encrypt(_0x7f5694, _0x3088af, {
        iv: _0x170a8b,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      })
      return _0x490549.toString()
    },
    AESdecrypt(_0x252e61, _0x49f806, _0x389495) {
      _0x49f806 = CryptoJS.enc.Utf8.parse(_0x49f806)
      _0x389495 = CryptoJS.enc.Utf8.parse(_0x389495)
      const _0x57d34a = CryptoJS.AES.decrypt(_0x252e61, _0x49f806, {
        iv: _0x389495,
        padding: CryptoJS.pad.Pkcs7,
      })
      return _0x57d34a.toString(CryptoJS.enc.Utf8)
    },
    pingNode() {
      const _0x214c16 = this
      if (_0x214c16.isStart) {
      }
      if (_0x214c16.isPing) {
        return
      }
      _0x214c16.isStart
        ? ((_0x214c16.pingIndex = -1),
          _0x214c16.nodeTcpping(_0x214c16.pingIndex))
        : ((_0x214c16.pingIndex = 0),
          _0x214c16.nodesTcpPing(_0x214c16.pingIndex))
    },
    nodeTcpping(_0x51f55a) {
      const _0x107ee5 = this
      let _0x2fb805 = _0x107ee5.nodes.length - 1
      if (_0x107ee5.pingIndex === _0x2fb805) {
        _0x107ee5.isPing = false
        _0x107ee5.pingIndex = -1
        _0x107ee5.testMsg = '相等'
        return
      }
      _0x107ee5.pingIndex = _0x107ee5.pingIndex + 1
      let _0x429812 = _0x107ee5.nodes[_0x107ee5.pingIndex].name
      _0x107ee5.isPing = true
      if (_0x429812 === 'AutoSelect') {
        _0x107ee5.nodeTcpping(_0x107ee5.pingIndex)
      } else {
        let _0x25e7e1 =
          'http://127.0.0.1:9790/proxies/' +
          encodeURI(_0x429812) +
          '/delay?timeout=5000&url=http://www.gstatic.com/generate_204'
        fetch(_0x25e7e1, { method: 'GET' })
          .then((_0x341447) => {
            try {
              return _0x341447.json()
            } catch (_0x508287) {}
            return _0x341447.text()
          })
          .then((_0x961f7e) => {
            if ('message' in _0x961f7e) {
              _0x107ee5.nodes[_0x107ee5.pingIndex].ping = -1
              _0x107ee5.nodes.sort()
            } else {
              'delay' in _0x961f7e
                ? (_0x961f7e.delay > 300
                    ? (_0x107ee5.nodes[_0x107ee5.pingIndex].ping = parseInt(
                        _0x961f7e.delay / 4
                      ))
                    : (_0x107ee5.nodes[_0x107ee5.pingIndex].ping = parseInt(
                        _0x961f7e.delay / 2
                      )),
                  _0x107ee5.nodes.sort())
                : ((_0x107ee5.nodes[_0x107ee5.pingIndex].ping = -1),
                  _0x107ee5.nodes.sort())
            }
            _0x107ee5.nodeTcpping(_0x107ee5.pingIndex)
          })
          .catch((_0xd5a65f) => {
            _0x107ee5.nodes[_0x107ee5.pingIndex].ping = -1
            _0x107ee5.nodes.sort()
            _0x107ee5.nodeTcpping(_0x107ee5.pingIndex)
          })
      }
    },
    tcpPing(_0x92d2af, _0x171b4f) {
      const _0x8be369 = Date.now(),
        _0x5087be = new net.Socket()
      return (
        _0x5087be.setTimeout(5000),
        new Promise((_0x3184a9, _0x1d1ca6) => {
          _0x5087be
            .on('connect', () => {
              _0x3184a9(Date.now() - _0x8be369)
              _0x5087be.destroy()
            })
            .on('error', (_0x547909) => {
              _0x1d1ca6(0)
            })
            .on('timeout', () => {
              _0x1d1ca6(0)
            })
            .connect(_0x171b4f, _0x92d2af)
        })
      )
    },
    async nodesTcpPing() {
      const _0x4829ba = this
      _0x4829ba.isPing = true
      _0x4829ba.nodes.length > 0
        ? _0x4829ba.nodes.forEach(async (_0x39fa2b) => {
            if (
              _0x39fa2b.name == 'AutoSelect' ||
              _0x39fa2b.type == 'hysteria'
            ) {
              _0x4829ba.pingIndex = _0x4829ba.pingIndex + 1
            } else {
              try {
                let _0xba61df = await _0x4829ba.tcpPing(
                  _0x39fa2b.server,
                  _0x39fa2b.server_port
                )
                _0xba61df > 300
                  ? (_0x39fa2b.ping = parseInt(_0xba61df / 4))
                  : (_0x39fa2b.ping = parseInt(_0xba61df / 2))
                _0x4829ba.pingIndex = _0x4829ba.pingIndex + 1
                _0x4829ba.nodes.sort()
                _0x39fa2b.name == _0x4829ba.name &&
                  (_0x4829ba.ms = _0x39fa2b.ping)
              } catch (_0x3059d1) {
                _0x39fa2b.ping = -1
                _0x4829ba.pingIndex = _0x4829ba.pingIndex + 1
              }
              _0x4829ba.pingIndex == _0x4829ba.nodes.length &&
                ((_0x4829ba.isPing = false), (_0x4829ba.pingIndex = 0))
            }
          })
        : (_0x4829ba.isPing = false)
    },
    initNotice() {
      const _0x8dc46 = this
      _0x8dc46.isFetchNotice = true
      let _0x4ef4f9 = new Date().getTime()
      fetch(_0x8dc46.url + 'api/v1/app/appnotice?' + _0x4ef4f9, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      })
        .then((_0x1ac800) => {
          try {
            return _0x1ac800.json()
          } catch (_0x58cccd) {}
          return _0x1ac800.text()
        })
        .then((_0x580bb2) => {
          _0x8dc46.noticeList = []
          _0x8dc46.isFetchNotice = false
          if (_0x580bb2.message) {
            _0x8dc46.Toast(_0x580bb2.message, 'error')
            return
          }
          _0x580bb2.data && (_0x8dc46.noticeList = _0x580bb2.data)
        })
        .catch((_0xfc5515) => {
          _0x8dc46.isFetchNotice = false
          console.log(_0xfc5515)
        })
    },
    initSupportFile() {
      const _0x15a4b2 = this
      var _0x574e77 = 'zh-CN'
      if (_0x15a4b2.language == 'en') {
        _0x574e77 = 'en-US'
      } else {
        if (_0x15a4b2.language == 'vi') {
          _0x574e77 = 'vi-VN'
        } else {
          _0x15a4b2.language == 'fa'
            ? (_0x574e77 = 'fa-IR')
            : (_0x574e77 = 'zh-CN')
        }
      }
      _0x15a4b2.isFetchKnowledge = true
      let _0x3e5715 = new Date().getTime()
      fetch(
        _0x15a4b2.url +
          'api/v1/app/appknowledge?language=' +
          _0x574e77 +
          '&' +
          _0x3e5715,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
        }
      )
        .then((_0x3cdb99) => {
          try {
            return _0x3cdb99.json()
          } catch (_0x1ec560) {}
          return _0x3cdb99.text()
        })
        .then((_0x40d753) => {
          _0x15a4b2.isFetchKnowledge = false
          if (_0x40d753.message) {
            _0x15a4b2.Toast(_0x40d753.message, 'error')
            return
          }
          _0x15a4b2.guideList = []
          if (_0x40d753.data) {
            let _0x59f98f = Object.keys(_0x40d753.data)
            for (let _0xae5302 = 0; _0xae5302 < _0x59f98f.length; _0xae5302++) {
              _0x40d753.data[_0x59f98f[_0xae5302]].forEach(function (
                _0x5ea7f2
              ) {
                _0x5ea7f2.isOpen = false
                _0x15a4b2.guideList.push(_0x5ea7f2)
              })
            }
            setTimeout(function () {
              HSAccordion.autoInit()
            }, 100)
          }
        })
        .catch((_0x68c55) => {
          _0x15a4b2.isFetchKnowledge = false
          console.log(_0x68c55)
        })
    },
    animateCSS(_0x42c68f, _0x29db2b) {
      return new Promise(function (_0x300a74, _0x467872) {
        var _0x99523 = '' + _0x29db2b,
          _0x125742 = document.querySelector(_0x42c68f)
		  
		if (!_0x125742) {
		  return;
		}
        _0x125742.classList.add('animated', _0x99523)
        function _0x54fcd4(_0xe5d8db) {
          _0xe5d8db.stopPropagation()
          _0x125742.classList.remove('animated', _0x99523)
          _0x300a74('Animation ended')
        }
        _0x125742.addEventListener('animationend', _0x54fcd4, { once: true })
      })
    },
    setUpdate(_0x217168) {
      const _0x290bf3 = window.localStorage,
        _0x4c7cb7 = this,
        _0x28c1c8 = JSON.parse(_0x290bf3.getItem('APP_DATA_USER'))
      ;(_0x290bf3.getItem('APP_DATA_MODE') == '' ||
        _0x290bf3.getItem('APP_DATA_MODE') == null) &&
        _0x290bf3.setItem('APP_DATA_MODE', 0)
      ;(_0x290bf3.getItem('APP_DATA_INDEX') == '' ||
        _0x290bf3.getItem('APP_DATA_INDEX') == null) &&
        _0x290bf3.setItem('APP_DATA_INDEX', 0)
      _0x28c1c8 &&
        ((_0x4c7cb7.user = _0x28c1c8),
        (_0x4c7cb7.isLogin = true),
        (_0x4c7cb7.isShowLogin = false),
        (_0x4c7cb7.accountID = _0x28c1c8.accountID),
        (_0x4c7cb7.accountName = _0x28c1c8.email),
        (_0x4c7cb7.accountExpire = _0x28c1c8.expire),
        (_0x4c7cb7.accountMoney = _0x28c1c8.money),
        (_0x4c7cb7.accountPlan = _0x28c1c8.plan),
        (_0x4c7cb7.accountBandwidth = _0x28c1c8.transferEnable),
        (_0x4c7cb7.accountUserTf = _0x28c1c8.useTf),
        (_0x4c7cb7.accountTfPercentage = _0x28c1c8.tfPercentage),
        (_0x4c7cb7.accountdays = _0x28c1c8.accountdays),
        (_0x4c7cb7.accountCode = _0x28c1c8.code),
        _0x4c7cb7.accountTfPercentage === 0
          ? ((_0x4c7cb7.isAccountExhausted = true),
            (_0x4c7cb7.isShowAccountTrafficExhausted = true),
            _0x4c7cb7.isStart &&
              (_0x4c7cb7.sendMess('stopProxy', { name: 'stopProxy' }),
              (_0x4c7cb7.isStart = false),
              _0x4c7cb7.Reset()))
          : ((_0x4c7cb7.isAccountExhausted = false),
            (_0x4c7cb7.isShowAccountTrafficExhausted = false)),
        _0x4c7cb7.accountExpire !== '' &&
          (_0x4c7cb7.isExpired(_0x4c7cb7.accountExpire)
            ? ((_0x4c7cb7.isShowAccountExp = true),
              (_0x4c7cb7.isAccountExp = true),
              _0x4c7cb7.isStart &&
                (_0x4c7cb7.sendMess('stopProxy', { name: 'stopProxy' }),
                (_0x4c7cb7.isStart = false),
                _0x4c7cb7.Reset()))
            : ((_0x4c7cb7.isShowAccountExp = false),
              (_0x4c7cb7.isAccountExp = false))))
    },
    initConfig() {
      const _0x105d1c = this,
        _0x2f28d1 = window.localStorage
      let _0x10c454 = Date.now()
      _0x105d1c.updateApi()
    },
    initC() {
      const _0x2f0a8a = this,
        _0x78f895 = window.localStorage,
        _0x4d18e6 = JSON.parse(_0x78f895.getItem('APP_DATA_USER'))
      var _0x5973a9 = ''
      if (_0x4d18e6 == null) {
      } else {
        _0x5973a9 = _0x4d18e6.token
      }
      fetch(_0x2f0a8a.url + 'api/v1/app/config?token=' + _0x5973a9, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }).then(function (_0x51589e) {
        _0x51589e.json().then(function (_0x4a389f) {
          if (_0x4a389f.data) {
            _0x4a389f.data.emailWhitelistSuffix.length > 0 &&
              ((_0x2f0a8a.emailList = _0x4a389f.data.emailWhitelistSuffix),
              (_0x2f0a8a.signEmailSelect =
                _0x4a389f.data.emailWhitelistSuffix[0]))
            _0x4a389f.data.appDescription &&
              (_0x2f0a8a.appDescription = _0x4a389f.data.appDescription)
            _0x4a389f.data.appName &&
              (_0x2f0a8a.appName = _0x4a389f.data.appName)
            _0x4a389f.data.icon && (_0x2f0a8a.appLogo = _0x4a389f.data.icon)
            if (_0x4a389f.data.appUrl) {
            }
            if (
              _0x4a389f.data.currency_symbol == '' ||
              _0x4a389f.data.currency_symbol == null
            ) {
            } else {
              _0x2f0a8a.currency_symbol = _0x4a389f.data.currency_symbol
            }
            _0x4a389f.data.isInviteForce == 1 && (_0x2f0a8a.isNeedInvite = true)
            _0x4a389f.data.chatUrl == null || _0x4a389f.data.chatUrl == ''
              ? (_0x2f0a8a.chatUrl = '')
              : (_0x2f0a8a.chatUrl == null || _0x2f0a8a.chatUrl === '') &&
                (_0x2f0a8a.chatUrl = _0x4a389f.data.chatUrl)
            if (
              _0x4a389f.data.chatType === '' ||
              _0x4a389f.data.chatType == null
            ) {
            } else {
              _0x2f0a8a.chatType = _0x4a389f.data.chatType
            }
            if (
              _0x4a389f.data.chatLink === '' ||
              _0x4a389f.data.chatLink == null
            ) {
            } else {
              _0x2f0a8a.chatLink = _0x4a389f.data.chatLink
            }
            _0x4a389f.data.isSupport
              ? (_0x2f0a8a.isSupport = true)
              : (_0x2f0a8a.isSupport = false)
            if (_0x4a389f.data.chatID === '' || _0x4a389f.data.chatID == null) {
            } else {
              _0x2f0a8a.chatID = _0x4a389f.data.chatID
              _0x2f0a8a.chatType === 'crisp' &&
                ((_0x2f0a8a.crispID = _0x4a389f.data.chatID),
                _0x2f0a8a.initCrisp())
            }
            if (
              _0x4a389f.data.panelType === '' ||
              _0x4a389f.data.panelType == null
            ) {
            } else {
              _0x2f0a8a.panelType = _0x4a389f.data.panelType
            }
            if (
              _0x4a389f.data.inviteUrl === '' ||
              _0x4a389f.data.inviteUrl === null
            ) {
            } else {
              _0x2f0a8a.inviteUrl = _0x4a389f.data.inviteUrl
            }
            _0x4a389f.data.isEmailVerify == 1 &&
              (_0x2f0a8a.isEmailVerify = true)
            _0x4a389f.data.tggroup != '' &&
              ((_0x2f0a8a.isTggroup = true),
              (_0x2f0a8a.tggrouplink = _0x4a389f.data.tggroup))
            _0x4a389f.data.tos != '' &&
              ((_0x2f0a8a.isTos = true),
              (_0x2f0a8a.toslink = _0x4a389f.data.tos))
            _0x4a389f.data.privacy != '' &&
              ((_0x2f0a8a.isPP = true),
              (_0x2f0a8a.pplink = _0x4a389f.data.privacy))
            _0x4a389f.data.website != '' &&
              ((_0x2f0a8a.isWebsite = true),
              (_0x2f0a8a.weblink = _0x4a389f.data.website),
              (_0x2f0a8a.weburl = _0x4a389f.data.website + '/'))
          }
        })
      })
    },
    showGuide(_0x4529e2, _0x11ce3c) {
      const _0x464c95 = this,
        _0x4d7aaf = _0x11ce3c.target.parentNode.parentNode
      var _0x2d681f = $(_0x4d7aaf),
        _0x5e4b04 = $(_0x4d7aaf).find('svg')
      if (_0x464c95.isShow == _0x4529e2) {
        $('.tosGuideList').css({ height: '65px' })
        $('.tosGuideList svg').css({ transform: 'rotate(0)' })
        _0x464c95.isShow = ''
        return
      }
      _0x464c95.getGuideText(_0x4529e2)
      _0x464c95.isShow = _0x4529e2
      $('.tosGuideText').text('加载中...')
      $('.tosGuideList').css({ height: '65px' })
      $('.tosGuideList svg').css({ transform: 'rotate(0)' })
      setTimeout(function () {
        $(_0x2d681f).css({ height: 'auto' })
        $(_0x5e4b04).css({ transform: 'rotate(180deg)' })
      }, 100)
    },
    getGuideText(_0x5767a0) {
      const _0x18e253 = this
      _0x18e253.knowledgeText = ''
      fetch(
        _0x18e253.url +
          'api/v1/app/appknowledge?id=' +
          _0x5767a0 +
          '&language=zh-CN',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
        }
      )
        .then((_0x583f18) => {
          try {
            return _0x583f18.json()
          } catch (_0x455f73) {}
          return _0x583f18.text()
        })
        .then((_0x4d570c) => {
          if (_0x4d570c.message) {
            _0x18e253.Toast(_0x4d570c.message, 'warn')
            return
          }
          _0x4d570c.data &&
            (_0x18e253.containsHTMLTags(_0x4d570c.data.body)
              ? $('.tosGuideText').html(_0x4d570c.data.body)
              : (_0x18e253.knowledgeText = _0x4d570c.data.body))
        })
        .catch((_0x5b084d) => {
          _0x5b084d && $('.tosGuideText').text(_0x5b084d)
        })
    },
    containsHTMLTags(_0x32dd01) {
      return /<\/?[\w\s="/.':;#-\/\?]+>/gi.test(_0x32dd01)
    },
    sendMess(_0x2d782b, _0x5bf510) {
      const _0x896046 = this,
        _0x5705e2 = window.localStorage,
        _0x1880e4 = JSON.parse(_0x5705e2.getItem('userInfo'))
      switch (_0x2d782b) {
        case 'syncMode':
          window.WebViewJavascriptBridge.callHandler(
            'syncMode',
            _0x5bf510,
            function (_0xe356d5) {
              _0xe356d5 != 'false' && console.log('syncMode成功')
            }
          )
          break
        case 'syncNode':
          window.WebViewJavascriptBridge.callHandler(
            'syncNode',
            _0x5bf510,
            function (_0x2b1070) {
              _0x2b1070 != 'false' && console.log('syncNode成功')
            }
          )
          break
        case 'startProxy':
          onClickControl('Connect', '')
          break
        case 'stopProxy':
          onClickControl('Stop')
          break
        case 'syncWeb':
          window.WebViewJavascriptBridge.callHandler(
            'syncWeb',
            _0x5bf510,
            function (_0x7ed9f2) {
              if (_0x7ed9f2 != 'false') {
              }
            }
          )
          break
        default:
          console.log('null')
      }
    },
    startProxy() {
      let _0x416520 = this
      _0x416520.animateCSS('.Ellipse0', 'scaleAnimate')
      _0x416520.animateCSS('.Ellipse1', 'scaleAnimate1')
      _0x416520.animateCSS('.Ellipse2', 'scaleAnimate2')
      _0x416520.animateCSS('.Ellipse3', 'scaleAnimate3')
      if (_0x416520.nodes.length < 1) {
        _0x416520.Toast(_0x416520['$t']('lang.No_line_available'), 'warn')
        return
      }
      if (_0x416520.isAccountExhausted) {
        _0x416520.isShowAccountTrafficExhausted = true
        _0x416520.isStart &&
          (_0x416520.sendMess('stopProxy', { name: 'stopProxy' }),
          (_0x416520.isStart = false),
          _0x416520.Reset())
        return
      }
      if (_0x416520.accountExpire != '') {
        if (_0x416520.isExpired(_0x416520.accountExpire)) {
          _0x416520.isShowAccountExp = true
          _0x416520.isAccountExp = true
          _0x416520.isStart &&
            (_0x416520.sendMess('stopProxy', { name: 'stopProxy' }),
            (_0x416520.isStart = false),
            _0x416520.Reset())
          return
        } else {
          _0x416520.isShowAccountExp = false
          _0x416520.isAccountExp = false
        }
      }
      if (_0x416520.isStarting) {
        return
      }
      _0x416520.isStart
        ? ((_0x416520.statusText = 'disconnecting'), onClickControl('Stop'))
        : ((_0x416520.statusText = 'connecting'), onClickControl('Connect', ''))
      _0x416520.statusText = 'connecting'
      _0x416520.isStarting = true
    },
    backLogin() {
      const _0x434d5c = this
      _0x434d5c.isShowForgetSuccess = false
      _0x434d5c.isShowLogin = true
    },
    openWeb(_0x292b5b) {
      const _0x325e16 = this
      var _0x3887 = ''
      if (_0x292b5b == 'web') {
        _0x3887 = _0x325e16.weblink
        _0x325e16.animateCSS('.webBtn', 'loginButtonAni')
      } else {
        if (_0x292b5b == 'tg') {
          _0x3887 = _0x325e16.tggrouplink
          _0x325e16.animateCSS('.tgBtn', 'loginButtonAni')
        } else {
          if (_0x292b5b == 'tos') {
            _0x3887 = _0x325e16.toslink
            _0x325e16.animateCSS('.tosBtn', 'loginButtonAni')
          } else {
            _0x292b5b == 'privacy' &&
              ((_0x3887 = _0x325e16.pplink),
              _0x325e16.animateCSS('.privacyBtn', 'loginButtonAni'))
          }
        }
      }
      setTimeout(function () {
        shell.openExternal(_0x3887)
      }, 300)
    },
    nodeSwipe() {
      const _0x21af13 = this
      _0x21af13.changeMenuItem('nodelist')
    },
    nodeHideSwipe() {
      const _0x267046 = this
      _0x267046.hideMenuIco('nodelist')
    },
    menuSwipe() {
      const _0x172eec = this
      _0x172eec.hideMenu()
    },
    selectNodes(_0x126480, _0x3cc20e) {
      const _0x3d64e9 = this,
        _0x2ea529 = window.localStorage
      var _0x5bbb90 = 'http://127.0.0.1:9790/proxies/RULE'
      _0x3d64e9.mode == 0
        ? (_0x5bbb90 = 'http://127.0.0.1:9790/proxies/RULE')
        : (_0x5bbb90 = 'http://127.0.0.1:9790/proxies/GLOBAL')
      _0x3d64e9.isStart &&
        axios
          .put(_0x5bbb90, { name: _0x126480.name })
          .then((_0xd3e92a) => {
            console.log('change success')
          })
          .catch((_0x5805dc) => {})
      _0x2ea529.setItem('APP_DATA_INDEX', _0x3cc20e)
      _0x3d64e9.nodeIndex = _0x3cc20e
      _0x3d64e9.isCurreNodeName = _0x126480.name
      _0x3d64e9.isCurreNodeFlags = _0x126480.flag
      _0x3d64e9.nodeInfo = _0x126480.info
      _0x3d64e9.node = _0x126480
      setTimeout(function () {
        _0x3d64e9.hideMenuIco('nodelist')
      }, 200)
    },
    formatTime(_0xbc788b, _0x1280eb) {
      function _0x260622(_0x506340) {
        return (
          (_0x506340 = _0x506340.toString()),
          _0x506340[1] ? _0x506340 : '0' + _0x506340
        )
      }
      var _0x129b11 = ['Y', 'M', 'D', 'h', 'm', 's'],
        _0x4aa7de = [],
        _0x1c640c = new Date(_0xbc788b * 1000)
      _0x4aa7de.push(_0x1c640c.getFullYear())
      _0x4aa7de.push(_0x260622(_0x1c640c.getMonth() + 1))
      _0x4aa7de.push(_0x260622(_0x1c640c.getDate()))
      _0x4aa7de.push(_0x260622(_0x1c640c.getHours()))
      _0x4aa7de.push(_0x260622(_0x1c640c.getMinutes()))
      _0x4aa7de.push(_0x260622(_0x1c640c.getSeconds()))
      for (var _0x3090d2 in _0x4aa7de) {
        _0x1280eb = _0x1280eb.replace(
          _0x129b11[_0x3090d2],
          _0x4aa7de[_0x3090d2]
        )
      }
      return _0x1280eb
    },
    changeTun() {
      const _0x59200c = this,
        _0xc3505f = window.localStorage
      _0x59200c.tunMode == 'testb'
        ? ((_0x59200c.tunMode = 'testa testani'),
          _0xc3505f.setItem('APP_DATA_TUN', 1))
        : ((_0x59200c.tunMode = 'testb'), _0xc3505f.setItem('APP_DATA_TUN', 0))
    },
    changeMode(_0x13c289) {
      const _0x36a370 = this,
        _0x25e8e0 = window.localStorage
      let _0x4fc92d = 'Rule'
      _0x36a370.globalMode == 'testb'
        ? ((_0x36a370.globalMode = 'testa testani'),
          (_0x36a370.mode = 1),
          (_0x4fc92d = 'Global'))
        : (console.log(true),
          (_0x36a370.globalMode = 'testb'),
          (_0x36a370.mode = 0),
          (_0x4fc92d = 'Rule'))
      _0x36a370.isStart &&
        axios
          .patch('http://127.0.0.1:9790/configs/', { mode: _0x4fc92d })
          .then((_0x5989c7) => {
            _0x5989c7.status == 204 && _0x36a370.putProxy()
          })
          .catch((_0x1edd59) => {
            console.log(_0x1edd59)
          })
      _0x25e8e0.setItem('APP_DATA_MODE', _0x36a370.mode)
    },
    logout() {
      const _0x44f887 = this,
        _0x3c2eba = window.localStorage,
        _0x1efcad = JSON.parse(_0x3c2eba.getItem('APP_DATA_USER'))
      _0x44f887.hideMenuIco('exit')
      _0x44f887.isStart &&
        (_0x44f887.sendMess('stopProxy', { name: 'stopProxy' }),
        (_0x44f887.isStart = false),
        _0x44f887.Reset())
      _0x3c2eba.removeItem('APP_DATA_USER')
      _0x3c2eba.setItem('APP_DATA_MODE', 0)
      _0x3c2eba.setItem('APP_DATA_INDEX', 0)
      _0x44f887.tunMode = 'testb'
      _0x3c2eba.setItem('APP_DATA_TUN', 0)
      _0x44f887.nodeIndex = 0
      _0x44f887.nodes = []
      _0x44f887.nodesPing = []
      _0x44f887.nodesAddr = []
      _0x44f887.isCurreNodeName = '无线路可使用'
      _0x44f887.isCurreNodePing = 0
      _0x44f887.isCurreNodeFlags = 'static/flags/null.png'
      _0x44f887.isShowAccount = false
      _0x44f887.isShowMore = false
      _0x44f887.accountName = ''
      _0x44f887.tabIndex = 'home'
      _0x44f887.init()
      _0x44f887.Toast('退出成功', 'success')
    },
    startTimeFunc(_0x4f31e6) {
      const _0x35551f = this
      if (_0x35551f.startTime !== '00:00:00') {
        return
      }
      _0x4f31e6
        ? ((_0x35551f.hour = 0),
          (_0x35551f.minute = 0),
          (_0x35551f.second = 0),
          (_0x35551f.startTime = '00:00:00'),
          (_0x35551f.timer = setInterval(() => {
            _0x35551f.second++
            _0x35551f.second >= 60 &&
              ((_0x35551f.second = 0), _0x35551f.minute++)
            _0x35551f.minute >= 60 && ((_0x35551f.minute = 0), _0x35551f.hour++)
            const _0x4a346d = (_0x4bda71) =>
              _0x4bda71 < 10 ? '0' + _0x4bda71 : _0x4bda71
            _0x35551f.startTime =
              _0x4a346d(_0x35551f.hour) +
              ':' +
              _0x4a346d(_0x35551f.minute) +
              ':' +
              _0x4a346d(_0x35551f.second)
          }, 1000)))
        : (clearInterval(_0x35551f.timer),
          (_0x35551f.startTime = '00:00:00'),
          (_0x35551f.hour = 0),
          (_0x35551f.minute = 0),
          (_0x35551f.second = 0))
    },
    Reset() {
      const _0x41ac28 = this
      window.clearInterval(_0x41ac28.timer)
      _0x41ac28.startTime = '00:00:00'
      _0x41ac28.hour = 0
      _0x41ac28.minute = 0
      _0x41ac28.second = 0
    },
    update(_0x5cc9a6) {
      const _0x435fc8 = this,
        _0x57bbc9 = window.localStorage,
        _0x430247 = JSON.parse(_0x57bbc9.getItem('APP_DATA_USER'))
      let _0x371502 = _0x430247.email,
        _0x165d60 = _0x430247.passwd,
        _0x46c82e = _0x430247.token
      function _0x42484f(_0x2c5e9d) {
        var _0x201068 = JSON.stringify(_0x2c5e9d)
        _0x57bbc9.setItem('APP_DATA_USER', _0x201068)
        _0x435fc8.setUpdate()
      }
      if (_0x435fc8.isUpdateData) {
        return
      }
      _0x435fc8.isUpdateData = true
      var _0x452025 = Date.parse(new Date())
      fetch(_0x435fc8.url + 'api/v1/app/appsync?time=' + _0x452025, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'token=' + _0x46c82e + '&v=' + _0x435fc8.appVersion,
      })
        .then((_0x203891) => {
          try {
            return _0x203891.json()
          } catch (_0x32dc88) {}
          return _0x203891.text()
        })
        .then((_0x599671) => {
          _0x435fc8.isLoging = false
          _0x435fc8.isUpdateData = false
          let _0x1c98c4 = new Date().getTime()
          localStorage.setItem('lastRefreshTime', _0x1c98c4)
          console.log('initUpdate end')
          if (_0x599671.status == 1) {
            const _0xbc0fe = {
              email: _0x599671.email,
              accountID: _0x599671.id,
              expire: _0x599671.expired,
              plan: _0x599671.planName,
              conf: _0x599671.conf,
              link: _0x599671.link,
              residue: _0x599671.residue,
              userTf: _0x599671.usedTraffic,
              tfPercentage: _0x599671.tfPercentage,
              accountdays: _0x599671.days,
              code: _0x599671.code,
              token: _0x599671.token,
              transferEnable: _0x599671.transfer_enable,
              useTf: _0x599671.useTf,
              web: _0x599671.web,
              configs: _0x599671.configs,
              configsNodes: _0x599671.configsNodes,
              chatLink: _0x599671.chatLink,
            }
            _0x599671.configs != ''
              ? _0x599671.configs === _0x430247.configs
                ? (console.log('No update required'),
                  _0x42484f(_0xbc0fe),
                  setTimeout(function () {
                    _0x435fc8.init('login', true)
                    _0x435fc8.setUpdate()
                  }, 500))
                : (_0x42484f(_0xbc0fe),
                  console.log('Need to be updated'),
                  setTimeout(function () {
                    _0x435fc8.init('login')
                    _0x435fc8.setUpdate()
                  }, 500))
              : (_0x42484f(_0xbc0fe),
                console.log('Need to be updated2'),
                setTimeout(function () {
                  _0x435fc8.init('login')
                  _0x435fc8.setUpdate()
                }, 500))
            _0x435fc8.isLoging = false
          } else {
            if (_0x599671.msg) {
              _0x435fc8.Toast(_0x599671.msg, 'warn')
              if (_0x599671.msg === 'User information error') {
                _0x435fc8.logout()
                return
              }
            } else {
              _0x435fc8.Toast(_0x599671.reason, 'warn')
            }
          }
        })
        .catch((_0x31fbe2) => {
          _0x435fc8.isUpdateData = false
          _0x435fc8.isLoging = false
        })
    },
    sendEmail() {
      var _0x523c85 = this
      if (_0x523c85.isSend) {
        return
      }
      _0x523c85.animateCSS('.getEmailCode', 'loginButtonAni')
      if (_0x523c85.signEmail == '') {
        _0x523c85.Toast(_0x523c85['$t']('lang.emailinputerror'), 'warn')
        return
      }
      _0x523c85.isSend = true
      fetch(_0x523c85.url + 'api/v1/app/appsendEmailVerify', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'email=' + _0x523c85.signEmail + '@' + _0x523c85.signEmailSelect,
      }).then(function (_0x5a569d) {
        _0x523c85.isSend = false
        _0x5a569d.json().then(function (_0x4cd8e3) {
          _0x4cd8e3 &&
            (_0x4cd8e3.status == 1
              ? _0x523c85.getCode()
              : _0x523c85.Toast(_0x4cd8e3.msg, 'warn'))
        })
      })
    },
    getCode() {
      let _0xc701db = this
      !_0xc701db.newTimer &&
        ((_0xc701db.count = 60),
        (_0xc701db.show = false),
        (_0xc701db.newTimer = setInterval(function () {
          _0xc701db.count > 0 && _0xc701db.count <= 60
            ? _0xc701db.count--
            : ((_0xc701db.show = true),
              clearInterval(_0xc701db.newTimer),
              (_0xc701db.newTimer = null))
        }, 1000)))
    },
    getForgetCode() {
      let _0x3c6f34 = this
      !_0x3c6f34.forgetTimer &&
        ((_0x3c6f34.forgetCount = 60),
        (_0x3c6f34.forgetShow = false),
        (_0x3c6f34.forgetTimer = setInterval(function () {
          _0x3c6f34.forgetCount > 0 && _0x3c6f34.forgetCount <= 60
            ? _0x3c6f34.forgetCount--
            : ((_0x3c6f34.forgetShow = true),
              clearInterval(_0x3c6f34.forgetTimer),
              (_0x3c6f34.forgetTimer = null))
        }, 1000)))
    },
    forget() {
      const _0x474362 = this
      if (_0x474362.isForget) {
        return
      }
      _0x474362.isForget = true
      _0x474362.animateCSS('.forgetBtn', 'loginButtonAni')
      let _0x302a29 = _0x474362.forgetEmail,
        _0x1d820e = _0x474362.forgetCode,
        _0x705410 = _0x474362.forgetPasswd,
        _0x4910fb = _0x474362.forgetRePasswd
      if (_0x302a29 == '') {
        _0x474362.Toast(_0x474362['$t']('lang.emailinputerror'), 'warn')
        _0x474362.isForget = false
        return
      }
      if (_0x1d820e.length < 6) {
        _0x474362.Toast(
          _0x474362['$t']('lang.incorrectverificationcodeinput'),
          'warn'
        )
        _0x474362.isForget = false
        return
      }
      if (_0x705410.length < 8) {
        _0x474362.Toast(_0x474362['$t']('lang.passwordlengtherr'), 'warn')
        _0x474362.isForget = false
        return
      }
      if (_0x4910fb !== _0x705410) {
        _0x474362.Toast(
          _0x474362['$t']('lang.confirmationpassworddoesnotmatchthepassword'),
          'warn'
        )
        _0x474362.isForget = false
        return
      }
      fetch(_0x474362.url + 'api/v1/app/appforget', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:
          'email=' +
          _0x302a29 +
          '&email_code=' +
          _0x1d820e +
          '&password=' +
          _0x4910fb,
      }).then(function (_0x1ce72c) {
        _0x474362.isForget = false
        _0x1ce72c.json().then(function (_0x1c20e4) {
          _0x1c20e4 &&
            (_0x1c20e4.status == 1
              ? ((_0x474362.isShowForgetSuccess = true),
                _0x474362.hideForget(),
                (_0x474362.forgetEmail = ''),
                (_0x474362.forgetCode = ''),
                (_0x474362.forgetPasswd = ''),
                (_0x474362.forgetRePasswd = ''))
              : _0x474362.Toast(_0x1c20e4.msg, 'warn'))
        })
      })
    },
    forgetSms() {
      const _0x2b1431 = this
      if (_0x2b1431.isSend) {
        return
      }
      _0x2b1431.isSend = true
      _0x2b1431.animateCSS('.newForget .getEmailCode', 'loginButtonAni')
      if (_0x2b1431.forgetEmail == '') {
        _0x2b1431.Toast(_0x2b1431['$t']('lang.emailinputerror'), 'warn')
        _0x2b1431.isSend = false
        return
      }
      fetch(_0x2b1431.url + 'api/v1/app/appsendEmailVerify', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'email=' + _0x2b1431.forgetEmail,
      }).then(function (_0x13d3e3) {
        _0x2b1431.isSend = false
        _0x13d3e3.json().then(function (_0xe982cf) {
          _0xe982cf &&
            (console.log(_0xe982cf),
            _0xe982cf.status == 1
              ? _0x2b1431.getForgetCode()
              : _0x2b1431.Toast(_0xe982cf.msg, 'warn'))
        })
      })
    },
    register() {
      let _0x4817ca = this
      if (_0x4817ca.isRegistering) {
        return
      }
      _0x4817ca.animateCSS('.registerBtn', 'loginButtonAni')
      _0x4817ca.isRegistering = true
      if (_0x4817ca.signEmail == '') {
        _0x4817ca.Toast(_0x4817ca['$t']('lang.emailinputerror'), 'warn')
        _0x4817ca.isRegistering = false
        return
      }
      if (_0x4817ca.isEmailVerify) {
        if (_0x4817ca.signCode == '') {
          _0x4817ca.Toast(
            _0x4817ca['$t']('lang.incorrectverificationcodeinput'),
            'warn'
          )
          _0x4817ca.isRegistering = false
          return
        }
      }
      if (_0x4817ca.signPasswd == '') {
        _0x4817ca.Toast(_0x4817ca['$t']('lang.passwordinputerror'), 'warn')
        _0x4817ca.isRegistering = false
        return
      }
      if (_0x4817ca.signPasswd.length < 8 || _0x4817ca.signPasswd.length < 8) {
        _0x4817ca.Toast(_0x4817ca['$t']('lang.passwordlengtherr'), 'warn')
        _0x4817ca.isRegistering = false
        return
      }
      if (_0x4817ca.signRepasswd == '') {
        _0x4817ca.Toast(_0x4817ca['$t']('lang.passwordinputerror'), 'warn')
        _0x4817ca.isRegistering = false
        return
      }
      if (_0x4817ca.signRepasswd != _0x4817ca.signPasswd) {
        _0x4817ca.Toast(
          _0x4817ca['$t']('lang.confirmationpassworddoesnotmatchthepassword'),
          'warn'
        )
        _0x4817ca.isRegistering = false
        return
      }
      if (_0x4817ca.isNeedInvite) {
        if (
          _0x4817ca.signInviteCode == '' ||
          _0x4817ca.signInviteCode == null
        ) {
          _0x4817ca.Toast(
            _0x4817ca['$t']('lang.invitation_code_was_entered_incorrectly'),
            'warn'
          )
          _0x4817ca.isRegistering = false
          return
        }
      }
      fetch(_0x4817ca.url + 'api/v1/app/appregister', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:
          'email=' +
          _0x4817ca.signEmail +
          '@' +
          _0x4817ca.signEmailSelect +
          '&password=' +
          _0x4817ca.signRepasswd +
          '&email_code=' +
          _0x4817ca.signCode +
          '&invite_code=' +
          _0x4817ca.signInviteCode,
      })
        .then((_0x436316) => {
          try {
            return _0x436316.json()
          } catch (_0x8f920e) {}
          return _0x436316.text()
        })
        .then((_0x5b64e2) => {
          _0x4817ca.isRegistering = false
          _0x5b64e2.status == 1
            ? ((_0x4817ca.showSign = false),
              (_0x4817ca.isShowSuccessText = '账户注册完成'),
              (_0x4817ca.isRegistering = false),
              (_0x4817ca.isShowSuccess = true))
            : (_0x4817ca.Toast(_0x5b64e2.msg, 'warn'),
              (_0x4817ca.isRegistering = false))
        })
        .catch((_0x48d687) => {
          _0x4817ca.isRegistering = false
        })
    },
    backNodelist() {
      const _0x2e8e6e = this
      _0x2e8e6e.isShownodeList = false
    },
    backNews() {
      const _0x48fac4 = this
      _0x48fac4.isShowNews = false
    },
    backAbout() {
      const _0x13c595 = this
      _0x13c595.isShowAbout = false
    },
    backPreferences() {
      const _0x355321 = this
      _0x355321.isShowPreferences = false
      _0x355321.animateCSS('.langCard', 'loginButtonAni')
      _0x355321.langsHeight = 60
      _0x355321.colorsHeight = 60
    },
    backKnow() {
      const _0x546982 = this
      _0x546982.isShowknowledge = false
      $('.tosGuideList').css({ height: '55px' })
      $('.tosGuideList svg').css({ transform: 'rotate(0)' })
      _0x546982.isShow = ''
    },
    hideMenuIco(_0x20ea75) {
      const _0x503ac8 = this
      switch (_0x20ea75) {
        case 'orders':
          ;(_0x503ac8.isOrderRecords = false), (_0x503ac8.currentPage = 1)
          break
        case 'invite':
          ;(_0x503ac8.showAccountInvite = false), (_0x503ac8.currentPage = 1)
          break
        case 'profile':
          _0x503ac8.isShowprofileList = ''
          break
        case 'about':
          _0x503ac8.isShowAbout = false
          break
        case 'tos':
          _0x503ac8.isShowTos = ''
          break
        case 'news':
          _0x503ac8.isShowNews = false
          break
        case 'knowledge':
          ;(_0x503ac8.isShowknowledge = false),
            $('.tosGuideList').css({ height: '55px' }),
            $('.tosGuideList svg').css({ transform: 'rotate(0)' }),
            (_0x503ac8.isShow = '')
          break
        case 'privacy':
          _0x503ac8.isShowPrivacy = ''
          break
        case 'nodelist':
          ;(_0x503ac8.isShownodeList = false), (_0x503ac8.isPing = false)
          break
        case 'store':
          _0x503ac8.isShowStore = ''
          break
        case 'exit':
          _0x503ac8.isShownewExit = false
          break
        default:
          console.log(true)
      }
    },
    hideMenu() {
      const _0x36e58b = this
      _0x36e58b.isShowMenuRight = ''
      setTimeout(function () {
        _0x36e58b.isShowMenu = ''
      }, 100)
    },
    showMenu() {
      const _0x56f380 = this
      _0x56f380.isShowMenu = 'newshowLeftMenu'
      setTimeout(function () {
        _0x56f380.isShowMenuRight = 'testani2'
      }, 300)
    },
    isTimestampExpired(_0x4d25f1, _0x1aa4d2) {
      var _0x504f02 = new Date().getTime(),
        _0x366cee = _0x504f02 - _0x4d25f1,
        _0x3c619e = Math.floor(_0x366cee / 1000 / 60)
      return _0x3c619e > _0x1aa4d2
    },
    changeTab(_0x2391c3) {
      const _0x28f956 = this
      switch (_0x2391c3) {
        case 'home':
          ;(_0x28f956.isShowknowledge = false),
            (_0x28f956.isShowPreferences = false),
            (_0x28f956.isNetwork_proxy_settings = false),
            (_0x28f956.isShowAbout = false),
            (_0x28f956.isStore = false),
            (_0x28f956.showAccountInvite = false),
            (_0x28f956.isShowPlanInfo = false),
            (_0x28f956.isOrderRecords = false),
            (_0x28f956.tabIndex = 'home'),
            (_0x28f956.isShowAccount = false),
            (_0x28f956.isShowMore = false),
            (_0x28f956.isShowHome = true),
            _0x28f956.setUpdate()
          break
        case 'account':
          ;(_0x28f956.isShowNews = false),
            (_0x28f956.isShowknowledge = false),
            (_0x28f956.isShowPreferences = false),
            (_0x28f956.isNetwork_proxy_settings = false),
            (_0x28f956.isShowAbout = false),
            (_0x28f956.isShownodeList = false),
            (_0x28f956.tabIndex = 'account'),
            (_0x28f956.isShowHome = false),
            (_0x28f956.isShowMore = false),
            (_0x28f956.isShowAccount = true),
            _0x28f956.setUpdate(),
            (_0x28f956.lastRefreshTime =
              localStorage.getItem('lastRefreshTime'))
          if (
            _0x28f956.lastRefreshTime == null ||
            _0x28f956.lastRefreshTime === ''
          ) {
            _0x28f956.testMsg = 'lastRefreshTime NULL '
            !_0x28f956.isUpdateData &&
              (_0x28f956.update(), _0x28f956.initConfig())
          } else {
            var _0x21a076 = _0x28f956.isTimestampExpired(
              parseInt(_0x28f956.lastRefreshTime),
              1
            )
            _0x21a076
              ? ((_0x28f956.testMsg = 'lastRefreshTime 超过2分钟:'),
                !_0x28f956.isUpdateData &&
                  (_0x28f956.update(), _0x28f956.initConfig()))
              : ((_0x28f956.testMsg = 'lastRefreshTime 未超过2分钟'),
                console.log('less than 2m'))
          }
          _0x28f956.accountExpire != '' &&
            (_0x28f956.isExpired(_0x28f956.accountExpire)
              ? ((_0x28f956.isShowAccountExp = true),
                (_0x28f956.isAccountExp = true),
                _0x28f956.isStart &&
                  (_0x28f956.sendMess('stopProxy', { name: 'stopProxy' }),
                  (_0x28f956.isStart = false),
                  _0x28f956.Reset()))
              : ((_0x28f956.isShowAccountExp = false),
                (_0x28f956.isAccountExp = false)))
          break
        case 'more':
          ;(_0x28f956.isShowNews = false),
            (_0x28f956.isStore = false),
            (_0x28f956.showAccountInvite = false),
            (_0x28f956.isOrderRecords = false),
            (_0x28f956.isShowPlanInfo = false),
            (_0x28f956.isShownodeList = false),
            (_0x28f956.tabIndex = 'more'),
            (_0x28f956.isShowHome = false),
            (_0x28f956.isShowAccount = false),
            (_0x28f956.isShowMore = true)
          break
        default:
          console.log('')
      }
    },
    changeMenuItem(_0x169ed2) {
      const _0x1e1c4d = this,
        _0x5f3cfa = window.localStorage,
        _0x292190 = JSON.parse(_0x5f3cfa.getItem('APP_DATA_USER'))
      _0x169ed2 === 'store'
        ? (_0x1e1c4d.getPaymentMethod(),
          _0x1e1c4d.getAppPlans(),
          (_0x1e1c4d.isAppAlert = false),
          (_0x1e1c4d.isShowAccountExp = false),
          (_0x1e1c4d.isShowAccountTrafficExhausted = false),
          (_0x1e1c4d.isStore = true))
        : _0x1e1c4d.hideMenu()
      switch (_0x169ed2) {
        case 'chat':
          _0x1e1c4d.animateCSS('.chatBtn', 'loginButtonAni')
          if (_0x1e1c4d.chatType == '' || _0x1e1c4d.chatType == null) {
            _0x1e1c4d.Toast(
              _0x1e1c4d['$t'](
                'lang.Not_configured_for_online_customer_service'
              ),
              'warn'
            )
            return
          }
          if (_0x1e1c4d.chatType === 'crisp') {
            if (!_0x1e1c4d.isCrisp) {
              _0x1e1c4d.Toast('Crisp客服系统加载中', 'warn')
              return
            }
            $crisp.push(['do', 'chat:open'])
            $crisp.push(['do', 'chat:show'])
            $('.crisp-client').removeClass('isHide')
            setTimeout(function () {
              $('#crisp-chatbox').attr('data-full-view', 'true')
              $($('#crisp-chatbox').get(0).firstChild.firstChild).css({
                width: '',
              })
              $(
                $('#crisp-chatbox').get(0).firstChild.firstChild.nextSibling
              ).remove()
            }, 100)
            return
          }
          if (_0x1e1c4d.chatLink === '' || _0x1e1c4d.chatLink == null) {
            _0x1e1c4d.Toast(
              _0x1e1c4d['$t'](
                'lang.Not_configured_for_online_customer_service'
              ),
              'warn'
            )
            return
          }
          let _0x51824c = ''
          ;(_0x1e1c4d.isAlert = true),
            (_0x1e1c4d.isWebStore = true),
            (_0x1e1c4d.isShowLoading = true),
            (_0x1e1c4d.storeLink = _0x1e1c4d.chatLink),
            setTimeout(function () {
              _0x1e1c4d.isAlert = false
              _0x1e1c4d.isShowLoading = false
              const _0x49d5bc = document.getElementById('storeWeb'),
                _0x345091 = () => {
                  console.log('view loading')
                  _0x51824c == '' &&
                    ((_0x1e1c4d.isShowLoading = true), (_0x51824c = 'loading'))
                },
                _0x50a7f8 = () => {
                  _0x1e1c4d.isAlert = false
                  _0x1e1c4d.isShowLoading = false
                  console.log('view show')
                  _0x49d5bc.insertCSS(
                    'html::-webkit-scrollbar{ display: none !important; };'
                  )
                }
              _0x49d5bc.addEventListener('did-start-loading', _0x345091)
              _0x49d5bc.addEventListener('did-stop-loading', _0x50a7f8)
            }, 3000)
          break
        case 'theme':
          ;(_0x1e1c4d.isShowPreferences = true),
            setTimeout(function () {
              HSThemeSwitch.autoInit()
            }, 100)
          break
        case 'orders':
          ;(_0x1e1c4d.isOrderRecords = true), _0x1e1c4d.getOrders()
          break
        case 'update':
          if (_0x1e1c4d.isUpdateData) {
            return
          }
          _0x1e1c4d.update()
          break
        case 'profile':
          ;(_0x1e1c4d.isShowprofileList = 'showprofileList'),
            (_0x1e1c4d.isShowAbout = false),
            (_0x1e1c4d.isShowTos = ''),
            (_0x1e1c4d.isShowNews = ''),
            (_0x1e1c4d.isShowknowledge = false),
            (_0x1e1c4d.isShownodeList = false),
            (_0x1e1c4d.isShowPrivacy = ''),
            (_0x1e1c4d.isShowStore = ''),
            (_0x1e1c4d.isShownewExit = false)
          break
        case 'about':
          ;(_0x1e1c4d.isShowAbout = true),
            (_0x1e1c4d.isShowNews = ''),
            (_0x1e1c4d.isShowknowledge = false),
            (_0x1e1c4d.isShowprofileList = ''),
            (_0x1e1c4d.isShowTos = ''),
            (_0x1e1c4d.isShownodeList = false),
            (_0x1e1c4d.isShowPrivacy = ''),
            (_0x1e1c4d.isShowStore = ''),
            (_0x1e1c4d.isShownewExit = false)
          break
        case 'tos':
          _0x1e1c4d.isShowTos = 'showprofileList'
          break
        case 'news':
          ;(_0x1e1c4d.isShowNews = 'showprofileList'),
            (_0x1e1c4d.isShowknowledge = false),
            (_0x1e1c4d.isShowprofileList = ''),
            (_0x1e1c4d.isShowAbout = false),
            (_0x1e1c4d.isShowTos = ''),
            (_0x1e1c4d.isShownodeList = false),
            (_0x1e1c4d.isShowPrivacy = ''),
            (_0x1e1c4d.isShowStore = ''),
            (_0x1e1c4d.isShownewExit = false)
          break
        case 'knowledge':
          ;(_0x1e1c4d.isShowknowledge = true), (_0x1e1c4d.isShownewExit = false)
          _0x292190 && _0x1e1c4d.initSupportFile()
          break
        case 'nodelist':
          ;(_0x1e1c4d.isShownodeList = true),
            (_0x1e1c4d.isShowAbout = false),
            (_0x1e1c4d.isShowNews = ''),
            (_0x1e1c4d.isShowknowledge = false),
            (_0x1e1c4d.isShowprofileList = ''),
            (_0x1e1c4d.isShowTos = ''),
            (_0x1e1c4d.isShowPrivacy = ''),
            (_0x1e1c4d.isShowStore = ''),
            (_0x1e1c4d.isShownewExit = false)
          break
        case 'privacy':
          _0x1e1c4d.isShowPrivacy = 'showprofileList'
          break
        case 'exit':
          ;(_0x1e1c4d.isShownewExit = true),
            (_0x1e1c4d.isShowAbout = false),
            (_0x1e1c4d.isShowNews = ''),
            (_0x1e1c4d.isShowknowledge = false),
            (_0x1e1c4d.isShowprofileList = ''),
            (_0x1e1c4d.isShowTos = ''),
            (_0x1e1c4d.isShownodeList = false),
            (_0x1e1c4d.isShowPrivacy = ''),
            (_0x1e1c4d.isShowStore = '')
          break
        case 'restore':
          break
        default:
          console.log(true)
      }
    },
    goStore() {
      const _0x42009c = this
      _0x42009c.isAlert = true
      const _0x23556b = window.localStorage,
        _0x5bce64 = JSON.parse(_0x23556b.getItem('APP_DATA_USER'))
      let _0x1ac7a5 = _0x5bce64.email,
        _0x4fe68f = _0x5bce64.passwd,
        _0x39957b = ''
      if (_0x42009c.panelType == 'sspanel') {
        _0x42009c.isWebStore = true
        _0x42009c.isShowLoading = true
        _0x42009c.storeLink =
          _0x42009c.weburl +
          'api/v1/app/apptoken?email=' +
          _0x1ac7a5 +
          '&password=' +
          _0x4fe68f
        console.log(_0x42009c.storeLink)
        setTimeout(function () {
          _0x42009c.isAlert = false
          const _0x394026 = document.getElementById('storeWeb'),
            _0x47aa3a = () => {
              console.log('view loading')
              _0x39957b == '' &&
                ((_0x42009c.isShowLoading = true), (_0x39957b = 'loading'))
            },
            _0x428757 = () => {
              _0x42009c.isAlert = false
              _0x42009c.isShowLoading = false
              console.log('view show')
              _0x394026.insertCSS(
                'html::-webkit-scrollbar{ display: none !important; };'
              )
              _0x394026.insertCSS('header { display: none !important; };')
            }
          _0x394026.addEventListener('did-start-loading', _0x47aa3a)
          _0x394026.addEventListener('did-stop-loading', _0x428757)
        }, 3000)
        return
      }
      fetch(_0x42009c.url + 'api/v1/app/getTempToken', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: 'token=' + _0x42009c.user.token,
      }).then(function (_0x1c60d5) {
        _0x1c60d5.json().then(function (_0x21308d) {
          _0x42009c.isAlert = false
          _0x42009c.isWebStore = true
          if (_0x21308d.data) {
            _0x42009c.storeLink =
              _0x42009c.url +
              'api/v1/app/homepage?token=' +
              _0x21308d.data +
              '&redirect=plan'
            const _0x574619 = document.getElementById('storeWeb'),
              _0xd523a9 = () => {
                console.log('view loading')
                _0x39957b == '' &&
                  ((_0x42009c.isShowLoading = true), (_0x39957b = 'loading'))
              },
              _0x3c2816 = () => {
                _0x42009c.isAlert = false
                _0x42009c.isShowLoading = false
                console.log('view show')
                _0x574619.insertCSS(
                  'html::-webkit-scrollbar{ display: none !important; };'
                )
                _0x574619.insertCSS('header { display: none !important; };')
              }
            setTimeout(function () {
              _0x574619.addEventListener('did-start-loading', _0xd523a9)
              _0x574619.addEventListener('did-stop-loading', _0x3c2816)
            }, 500)
          }
        })
      })
    },
    showpass(_0x17b31b) {
      const _0x1626d1 = this
      _0x17b31b == 'show'
        ? ((_0x1626d1.isShowPass = true), (_0x1626d1.passtype = 'text'))
        : ((_0x1626d1.isShowPass = false), (_0x1626d1.passtype = 'password'))
    },
    login() {
      const _0x4d2527 = this,
        _0x43594a = window.localStorage
      function _0x428c5a(_0x14465a) {
        var _0x42210e = JSON.stringify(_0x14465a)
        _0x43594a.setItem('APP_DATA_USER', _0x42210e)
        _0x4d2527.setUpdate()
      }
      _0x4d2527.animateCSS('.loginformBtn', 'loginButtonAni')
      if (_0x4d2527.isLoging) {
        return
      }
      _0x4d2527.isLoging = true
      if (_0x4d2527.loginEmail == '' || _0x4d2527.loginEmail == null) {
        _0x4d2527.Toast(_0x4d2527['$t']('lang.emailinputerror'), 'warn')
        _0x4d2527.isLoging = false
        return
      }
      if (_0x4d2527.loginPasswd == '' || _0x4d2527.loginPasswd == null) {
        _0x4d2527.Toast(_0x4d2527['$t']('lang.passwordinputerror'), 'warn')
        _0x4d2527.isLoging = false
        return
      }
      if (_0x4d2527.loginPasswd.length < 8) {
        _0x4d2527.Toast(_0x4d2527['$t']('lang.passwordinputerror'), 'warn')
        _0x4d2527.isLoging = false
        return
      }
      var _0x4af3ca = Date.parse(new Date())
      fetch(_0x4d2527.url + 'api/v1/app/applogin?time=' + _0x4af3ca, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body:
          'email=' +
          _0x4d2527.loginEmail +
          '&password=' +
          _0x4d2527.loginPasswd +
          '&v=' +
          _0x4d2527.appVersion,
      })
        .then((_0x4c7aaa) => {
          try {
            return _0x4c7aaa.json()
          } catch (_0x2713b8) {}
          return _0x4c7aaa.text()
        })
        .then((_0x4a479f) => {
          _0x4d2527.isLoging = false
          if (_0x4a479f.status == 1) {
            const _0x18b73d = {
              email: _0x4d2527.loginEmail,
              passwd: _0x4d2527.loginPasswd,
              accountID: _0x4a479f.id,
              expire: _0x4a479f.expired,
              plan: _0x4a479f.planName,
              conf: _0x4a479f.conf,
              link: _0x4a479f.link,
              residue: _0x4a479f.residue,
              userTf: _0x4a479f.usedTraffic,
              tfPercentage: _0x4a479f.tfPercentage,
              accountdays: _0x4a479f.days,
              code: _0x4a479f.code,
              token: _0x4a479f.token,
              transferEnable: _0x4a479f.transfer_enable,
              useTf: _0x4a479f.useTf,
              web: _0x4a479f.web,
              configs: _0x4a479f.configs,
              configsNodes: _0x4a479f.configsNodes,
              chatLink: _0x4a479f.chatLink,
            }
            _0x428c5a(_0x18b73d)
            _0x4d2527.init('login')
            _0x4d2527.Toast('登录成功', 'success')
            _0x4d2527.isLoging = false
          } else {
            _0x4a479f.msg
              ? _0x4d2527.Toast(_0x4a479f.msg, 'warn')
              : _0x4d2527.Toast(_0x4a479f.reason, 'warn')
            _0x4d2527.isLoging = false
          }
        })
        .catch((_0x2996e2) => {
          _0x4d2527.isLoging = false
        })
    },
    hideSuccessPage() {
      const _0xcc392b = this
      _0xcc392b.goLogin()
      _0xcc392b.isShowLogin = true
      _0xcc392b.isShowSuccess = false
    },
    goForget() {
      const _0x3c3dc6 = this
      _0x3c3dc6.isShowLogin = false
      _0x3c3dc6.isShowForget = true
      setTimeout(function () {
        HSStrongPassword.autoInit()
      }, 100)
    },
    hideForget() {
      const _0x525d33 = this
      _0x525d33.isShowForget = false
      _0x525d33.isShowLogin = true
    },
    goSign() {
      const _0x3c2f6d = this
      _0x3c2f6d.isShowLogin = false
      _0x3c2f6d.showSign = true
      _0x3c2f6d.isShowLogin = true
      setTimeout(function () {
        HSStrongPassword.autoInit()
      }, 100)
    },
    goLogin() {
      const _0x1e7cc0 = this
      _0x1e7cc0.showSign = false
    },
    Toast(_0x58e346, _0x5a6da7) {
      let _0x24cbde = this
      _0x24cbde.isShowToast = true
      _0x24cbde.ToastText = _0x58e346
      _0x24cbde.ToastType = _0x5a6da7
      setTimeout(function () {
        _0x24cbde.isShowToast = false
      }, 2000)
    },
  },
}
const i18n = new VueI18n({ messages: languagepack })
var Ctor = Vue.extend(Main)
new Ctor({ i18n: i18n })['$mount']('#app')