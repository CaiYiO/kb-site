const KB = {
  home: {
    stats: [
      { num: 10, label: "知识分类" },
      { num: 130, label: "文件/目录" },
      { num: 7, label: "完整项目" },
      { num: 6, label: "编程语言" },
    ]
  },

  categories: [
    { id: "java",      icon: "☕", name: "Java 开发",     desc: "Java基础 · Java Web · Spring Boot · Android" },
    { id: "frontend",  icon: "🎨", name: "前端开发",      desc: "Vue3 · Vite · Pinia · HTML/CSS/JS · jQuery · AJAX" },
    { id: "python",    icon: "🐍", name: "Python 开发",    desc: "OOP · numpy · matplotlib · 排序/搜索/哈希/图算法" },
    { id: "c",         icon: "⚙️", name: "C 语言",         desc: "NCRE 考试 · 回文判断 · VS2010" },
    { id: "database",  icon: "🗄️", name: "数据库",         desc: "MySQL · 存储过程 · 触发器 · 事务 · 4套完整数据库" },
    { id: "testing",   icon: "🧪", name: "软件测试",      desc: "Selenium · POM · DDT · unittest · JMeter · LoadRunner" },
    { id: "erp",       icon: "🏢", name: "ERP 项目",       desc: "资源协同管理平台 · http://39.105.187.61:17238/" },
    { id: "docs",      icon: "📄", name: "文档资料",      desc: "工作手册 · 课件PPT · 考试试卷 · 课程链接" },
    { id: "tools",     icon: "🔧", name: "工具与资源",    desc: "Eclipse · JMeter · WAMP · VS2010 · MINI工具集" },
    { id: "archives",  icon: "📦", name: "归档文件",      desc: "作业提交 · 项目源码包 · 课件归档 · 共20+压缩包" },
  ],

  java: {
    sections: [
      {
        title: "Java 基础",
        path: "Java开发/Java基础/java/",
        groups: [
          { title: "OOP 练习", items: [
            { name: "A11-19 Student 类", path: "Java开发/Java基础/java/A11-19/src/New1/", icon: "📁", desc: "Student 实体类 + TestStudent 测试：属性/方法/参数传递" },
            { name: "A11-21 & Monkey", path: "Java开发/Java基础/java/Monkey/src/", icon: "📁", desc: "构造方法重载（单参color + 双参color/sex）+ addTwo/addThere" },
            { name: "Java11_14 矩阵加法", path: "Java开发/Java基础/java/Java11_14/src/text/A1.java", icon: "📄", desc: "两个 3×3 矩阵逐元素相加并打印" },
            { name: "Circle / Time / TestDouble / TestMoney", path: "Java开发/Java基础/java/bin/", icon: "📁", desc: "圆面积周长 · 秒转HH:MM:SS · 浮点精度 · long溢出" },
          ]},
          { title: "图书管理系统（3个版本）", items: [
            { name: "Book 基础版", path: "Java开发/Java基础/java/Book/src/", icon: "📁", desc: "Book + Student 类，控制台输入写入txt文件" },
            { name: "Student_Books 增强版", path: "Java开发/Java基础/java/Student_Books/src/", icon: "📁", desc: "HashMap<String,Book> CRUD + CSV持久化 + try-catch + while菜单" },
            { name: "Library 进阶版", path: "Java开发/Java基础/java/Library/", icon: "📁", desc: "Java 14+ switch表达式 + 中文提示 + 文件持久化" },
          ]},
          { title: "考试", items: [
            { name: "HirePerson POJO + DAO", path: "Java开发/Java基础/java/000/Exam/", icon: "📁", desc: "实体类(7字段) + DAO接口(getAllHirePerson/addHirePerson) + MySQL" },
            { name: "5个JAVA类源代码.pdf", path: "Java开发/Java基础/java/000/5个JAVA类源代码.pdf", icon: "📄", desc: "考试代码参考" },
          ]},
          { title: "课件", items: [
            { name: "Java 基本语法", path: "Java开发/Java基础/java/02 项目二：Java基本语法.rar", icon: "📦", desc: "课件压缩包" },
            { name: "流程控制语句", path: "Java开发/Java基础/java/03 项目三：流程控制语句.rar", icon: "📦", desc: "课件压缩包" },
            { name: "数据类型与运算符 PPT", path: "Java开发/Java基础/java/工作任务1...表达式.rar", icon: "📦", desc: "数据类型/变量/常量/类型转换/运算符" },
            { name: "坦克参数计算 PPT", path: "Java开发/Java基础/java/工作任务1/", icon: "📁", desc: "工作任务2：坦克参数和位置计算" },
          ]},
          { title: "练习题", items: [
            { name: "一维数组求最大值", path: "Java开发/Java基础/java/WORK/一维数组.txt", icon: "📄", desc: "{67,89,87,69,90,100,75,90}" },
            { name: "二维数组矩阵加法", path: "Java开发/Java基础/java/WORK/二维数组.txt", icon: "📄", desc: "3×3矩阵加法" },
            { name: "WORK1.TXT", path: "Java开发/Java基础/java/WORK/WORK1.TXT", icon: "📄", desc: "圆形计算/时间转换/最大数" },
            { name: "work2.txt", path: "Java开发/Java基础/java/WORK/work2.txt", icon: "📄", desc: "出租车费/成绩评定/周菜单/日期类型" },
            { name: "ASCII码表", path: "Java开发/Java基础/java/bin/ascii码表.txt", icon: "📄", desc: "ASCII码参考表" },
          ]},
          { title: "房屋租赁管理系统", items: [
            { name: "完整源码", path: "Java开发/Java基础/java/2.2房屋租赁管理系统源代码...rar", icon: "📦", desc: "查询/添加/修改/删除完整CRUD功能" },
          ]},
        ]
      },
      {
        title: "Java Web",
        path: "Java开发/Java_Web/Java_Web/",
        groups: [
          { title: "课程项目（按日期递进）", items: [
            { name: "0507 BMI计算器", path: "Java开发/Java_Web/Java_Web/0507/", icon: "📁", desc: "Scanner + if/else 体重指数分类（偏瘦/正常/超重）" },
            { name: "0510 文件IO操作", path: "Java开发/Java_Web/Java_Web/0510/", icon: "📁", desc: "BufferedReader/Writer 文本读写 + FileInputStream/OutputStream 二进制图片复制" },
            { name: "0512 继承与多态", path: "Java开发/Java_Web/Java_Web/0512/", icon: "📁", desc: "Vehicle→Car(BWM/Tesla/Xiaomi)+Bicycle+Motorcycle+Bus，多态数组+instanceof" },
            { name: "0514 IntelliJ入门", path: "Java开发/Java_Web/Java_Web/0514/", icon: "📁", desc: "Hello World 占位项目" },
            { name: "0518 HTTP服务器+JDBC", path: "Java开发/Java_Web/Java_Web/0518/", icon: "📁", desc: "自建电商后台：HttpServer端口8000 + MySQL electronics_store + 4端点 + HTML表格渲染" },
            { name: "0525 Spring Boot会议系统", path: "Java开发/Java_Web/Java_Web/0525/", icon: "📁", desc: "Spring Boot 3.5.0 + JPA + Thymeleaf + Venue实体CRUD + meeting_db + 端口8888" },
          ]},
          { title: "文档", items: [
            { name: "教程.docx / 规范.docx", path: "Java开发/Java_Web/Java_Web/", icon: "📄", desc: "Java Web 教程与编码规范" },
            { name: "Spring Boot (books).docx", path: "Java开发/Java_Web/Java_Web/Spring Boot (books).docx", icon: "📄", desc: "Spring Boot 项目文档" },
            { name: "徐祎昌XuYichang0513.doc", path: "Java开发/Java_Web/Java_Web/徐祎昌XuYichang0513.doc", icon: "📄", desc: "学生作业 5月13日" },
          ]},
        ]
      },
      {
        title: "Android 开发",
        path: "Java开发/Android/android.kf/",
        groups: [
          { title: "工作手册", items: [
            { name: "工作手册一~十一", path: "Java开发/Android/android.kf/", icon: "📁", desc: "全套Android实训手册（缺第五、第十册）" },
            { name: "按钮事件5种实现方式", path: "Java开发/Android/android.kf/Android的按钮单击事件及监听器五种常见的实现方式.docx", icon: "📄", desc: "OnClickListener 五种写法总结笔记" },
          ]},
          { title: "Demo 项目（Eclipse ADT）", items: [
            { name: "0904 Hello World", path: "Java开发/Android/android.kf/demo/0904/", icon: "📁", desc: "RelativeLayout + RatingBar + SeekBar" },
            { name: "Abutton 按钮事件", path: "Java开发/Android/android.kf/demo/Abutton/", icon: "📁", desc: "OnClickListener：按钮点击动态缩放 ±10%" },
            { name: "layout4 布局", path: "Java开发/Android/android.kf/demo/layout4/", icon: "📁", desc: "LinearLayout + TableLayout 多布局切换" },
            { name: "phone 拨号器", path: "Java开发/Android/android.kf/demo/phone/", icon: "📁", desc: "Intent.ACTION_CALL：EditText→隐式意图拨号" },
            { name: "ContextMenu.zip", path: "Java开发/Android/android.kf/demo/ContextMenu.zip", icon: "📦", desc: "长按弹出上下文菜单" },
            { name: "OptionsMenu.zip", path: "Java开发/Android/android.kf/demo/OptionsMenu.zip", icon: "📦", desc: "选项菜单演示" },
          ]},
        ]
      },
    ]
  },

  frontend: {
    sections: [
      {
        title: "Vue 课程资料",
        path: "前端开发/Vue课程/vue.js/",
        groups: [
          { title: "课程文件", items: [
            { name: "2025年春季《Vue应用程序开发》", path: "前端开发/Vue课程/vue.js/2025年春季《Vue应用程序开发》.html", icon: "🌐", desc: "语雀课程知识库离线保存（23软件技术教学笔记）" },
            { name: "0418 课堂demo", path: "前端开发/Vue课程/vue.js/0418demo.rar", icon: "📦", desc: "4月18日课堂演示" },
            { name: "0613 task6", path: "前端开发/Vue课程/vue.js/0613task6.rar", icon: "📦", desc: "task6项目压缩包" },
          ]},
        ]
      },
      {
        title: "Vue3 期末技能考试",
        path: "前端开发/Vue考试/2025vue3_exam/",
        groups: [
          { title: "完整电商 App · Vue 3.5 + Vite 6 + Pinia 3 + Router 4 + Axios + MockJS", items: [
            { name: "认证商店 (auth + cart + products)", path: "前端开发/Vue考试/2025vue3_exam/2025vue3_exam/src/stores/", icon: "📁", desc: "3个Pinia Store：auth(JWT模拟) + cart(CRUD+localStorage) + products(loading/error状态)" },
            { name: "路由与守卫", path: "前端开发/Vue考试/2025vue3_exam/2025vue3_exam/src/router/index.js", icon: "📄", desc: "4路由：/ /detail/:id /cart(需认证) /login(游客) + 导航守卫" },
            { name: "Mock API", path: "前端开发/Vue考试/2025vue3_exam/2025vue3_exam/src/mocks/", icon: "📁", desc: "MockJS：8个随机手机商品 + 登录/登出API (admin/123456)" },
            { name: "页面组件", path: "前端开发/Vue考试/2025vue3_exam/2025vue3_exam/src/views/", icon: "📁", desc: "Home(卡片网格) + Detail(路由参数) + Cart(加减/总计/结算) + Login(回跳)" },
          ]},
          { title: "考试试卷", items: [
            { name: "《Vue应用程序开发》期末技能考试试卷23软件.doc", path: "前端开发/Vue考试/2025vue3_exam/《Vue应用程序开发》期末技能考试试卷23软件.doc", icon: "📄", desc: "23软件技术 期末试卷" },
          ]},
        ]
      },
      {
        title: "Vue3 后台管理系统 (Task6)",
        path: "前端开发/Vue项目_task6/0613task6/",
        groups: [
          { title: "完整实现 · 同技术栈 (Vue3+Vite+Pinia+Router+Axios+MockJS)", items: [
            { name: "后台布局 AdminHome", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/views/AdminHome.vue", icon: "🏠", desc: "顶栏 + 左侧5项菜单 + 内容区 + 底栏" },
            { name: "用户管理 (完整)", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/components/Users.vue", icon: "👥", desc: "表格9条用户 + 角色彩色标签 + admin/user/guest统计" },
            { name: "商品管理", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/components/Goods.vue", icon: "🛒", desc: "Pinia goodsStore" },
            { name: "订单/权限/设置 (占位)", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/components/", icon: "📁", desc: "Order / Rights / Setting 静态占位" },
            { name: "参考模板 (填空版)", path: "前端开发/Vue项目_task6/0613task6/0613task6/src-参考/", icon: "📁", desc: "考试模板：所有Vue表达式已挖空供填写" },
          ]},
        ]
      },
      {
        title: "HTML/CSS/JS 作业集",
        path: "前端开发/HTML作业/XuYiChang/",
        groups: [
          { title: "考试 (3题)", items: [
            { name: "Задание 1", path: "前端开发/HTML作业/XuYiChang/exam/Задание 1.html", icon: "📄", desc: "表单验证：邮箱正则 + 密码长度 + 确认密码匹配" },
            { name: "Задание 2", path: "前端开发/HTML作业/XuYiChang/exam/Задание 2.html", icon: "📄", desc: "计算器构造函数：read() + sum() + div() + 除零保护" },
            { name: "Задание 3", path: "前端开发/HTML作业/XuYiChang/exam/Задание 3.html", icon: "📄", desc: "交互球类游戏：点击→球跟随移动 + 边界约束" },
          ]},
          { title: "平时作业（48个文件, 2024年10-11月）", items: [
            { name: "10-29 JS基础", path: "前端开发/HTML作业/XuYiChang/homework/10-29/", icon: "📁", desc: "对象属性增删改查、console输出" },
            { name: "10-31 DOM操作", path: "前端开发/HTML作业/XuYiChang/homework/10-31/", icon: "📁", desc: "cloneNode、元素创建、文本修改" },
            { name: "11-1 流程控制+时钟", path: "前端开发/HTML作业/XuYiChang/homework/11-1/", icon: "📁", desc: "for循环(兔子计数) + setInterval实时时钟 + alert/prompt" },
            { name: "11-4 定时器+验证", path: "前端开发/HTML作业/XuYiChang/homework/11-4/", icon: "📁", desc: "实时时钟 + 表单验证" },
            { name: "11-5 jQuery入门", path: "前端开发/HTML作业/XuYiChang/homework/11-5/", icon: "📁", desc: "mouseenter事件 + 选择器 + DOM操作" },
            { name: "11-6 AJAX/JSON", path: "前端开发/HTML作业/XuYiChang/homework/11-6/", icon: "📁", desc: "JSON.stringify/parse + AJAX基础" },
            { name: "综合练习", path: "前端开发/HTML作业/XuYiChang/homework/", icon: "📁", desc: "for...in · if/switch · 稀疏数组 · 语言检测(ru/en/cn/de) · 10×10数字表 · lab4_2~4_4" },
          ]},
        ]
      },
      {
        title: "Anna 日历 · 猫头鹰页面",
        path: "前端开发/Anna日历/Anna/calender/",
        groups: [
          { title: "Vue 3.5 + Vite 7 + vue-devtools", items: [
            { name: "App.vue (已修改)", path: "前端开发/Anna日历/Anna/calender/src/App.vue", icon: "📄", desc: "猫头鹰信息展示页面（双栏CSS布局）+ 默认Vite模板组件" },
          ]},
        ]
      },
    ]
  },

  python: {
    sections: [
      {
        title: "学生通讯录管理系统",
        path: "Python开发/通讯录系统/python/",
        groups: [
          { title: "命令行CRUD应用 · Python + CSV", items: [
            { name: "studentEntity.py", path: "Python开发/通讯录系统/python/学生通讯录管理系统/studentEntity.py", icon: "🐍", desc: "Student实体类：私有属性__name/__tel/__email + @property getter/setter + __str__" },
            { name: "manager.py", path: "Python开发/通讯录系统/python/学生通讯录管理系统/manager.py", icon: "🐍", desc: "StudentManager控制器：CSV读写(UTF-8) + 6项菜单(增删改查列退) + 重名检查 + 退出自动保存" },
            { name: "students.csv", path: "Python开发/通讯录系统/python/学生通讯录管理系统/students.csv", icon: "📊", desc: "CSV数据文件（姓名,邮箱,电话）" },
          ]},
        ]
      },
      {
        title: "RU Python 课程（中俄合作办学）",
        path: "Python开发/RU课程/RU_Python/",
        groups: [
          { title: "课堂 Demo（15个文件, 12月5-15日递进）", items: [
            { name: "条件分支 (12/5)", path: "Python开发/RU课程/RU_Python/pythonProject/Demo/12_5Demo.py", icon: "🐍", desc: "6道条件分支函数 Demo_0~Demo_5" },
            { name: "类与循环 (12/6)", path: "Python开发/RU课程/RU_Python/pythonProject/Demo/", icon: "📁", desc: "Calculator类 + for+arange+sin/sqrt数学计算" },
            { name: "列表操作 (12/9-10)", path: "Python开发/RU课程/RU_Python/pythonProject/Demo/", icon: "📁", desc: "随机生成·列表推导式·筛选·反转·去重·平方立方" },
            { name: "元组/字典/集合 (12/12)", path: "Python开发/RU课程/RU_Python/pythonProject/Demo/12_12_Demo.py", icon: "🐍", desc: "CRUD + 交并补运算" },
            { name: "Lambda+递归+OOP (12/13)", path: "Python开发/RU课程/RU_Python/pythonProject/Demo/12_13_Demo.py", icon: "🐍", desc: "字符串·lambda·阶乘递归·Book/BankAccount/Animal继承多态" },
            { name: "算法全集 (12/14)", path: "Python开发/RU课程/RU_Python/pythonProject/Demo/12_14_Demo.py", icon: "🐍", desc: "组合模式·方法链·deque·双栈队列·链表·6种排序·2种搜索·4种哈希表" },
            { name: "图算法 (12/15)", path: "Python开发/RU课程/RU_Python/pythonProject/Demo/12_15_Demo.py", icon: "🐍", desc: "开放寻址哈希·树遍历·邻接矩阵/表·Dijkstra(heapq)" },
          ]},
          { title: "课后作业（22个文件, ≥10个变体/文件）", items: [
            { name: "数学表达式求值", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/homework.py", icon: "🐍", desc: "10变体(Variant 0-9)：从x计算y和z" },
            { name: "分段函数", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/12_4_HomeWork_1.py", icon: "🐍", desc: "10道if-else + 8道if/elif/else三分支" },
            { name: "match-case", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/12_5HomeWork_2.py", icon: "🐍", desc: "10道match-case变体" },
            { name: "for循环迭代", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/12_6_HomeWork_1.py", icon: "🐍", desc: "14道arange循环(Work_0~Work_13)" },
            { name: "Matplotlib绘图", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/12_10_HomeWork.py", icon: "🐍", desc: "plot/stackplot/stem + grid/labels/title" },
            { name: "函数编写", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/12_11_HomeWork.py", icon: "🐍", desc: "二次方程(Cramer法则)·三角形面积·阶乘组合" },
            { name: "矩阵+集合", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/12_12_HomeWork.py", icon: "🐍", desc: "2D矩阵对角线·元组min/max·集合交并差" },
            { name: "Lambda+字符串", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/12_13_HomeWork.py", icon: "🐍", desc: "子串搜索·字符定位·10个lambda变体" },
          ]},
          { title: "技能库覆盖", items: [
            { name: "math / numpy / random / matplotlib / heapq / collections.deque / unittest", path: "", icon: "📦", desc: "7个标准/第三方库" },
          ]},
        ]
      },
    ]
  },

  c: {
    sections: [
      {
        title: "C 语言课程",
        path: "C语言/c/",
        groups: [
          { title: "课程资料", items: [
            { name: "C语言课件", path: "C语言/c/C语言课件.zip", icon: "📦", desc: "课件压缩包" },
            { name: "VC++2010安装教程", path: "C语言/c/Visual C++2010学习版详细安装教程.docx", icon: "📄", desc: "Visual C++ 2010学习版安装指南" },
          ]},
          { title: "NCRE 考试练习", items: [
            { name: "回文判断 proc.cpp", path: "C语言/c/NCRE/EXE/Demo1/Demo1/proc.cpp", icon: "📄", desc: "strlen + 双指针判断 \"123a321\" 是否为回文" },
            { name: "VS项目文件", path: "C语言/c/NCRE/EXE/Demo1/", icon: "📁", desc: ".sln / .vcxproj 项目文件" },
          ]},
        ]
      },
    ]
  },

  database: {
    sections: [
      {
        title: "MySQL 数据库",
        path: "数据库/mysql/",
        groups: [
          { title: "在线电商数据库 onlinedb", items: [
            { name: "onlinedb.sql (6表)", path: "数据库/mysql/onlinedb/onlinedb.sql", icon: "🗄️", desc: "administrator/cart/category/goods/orders/ordersitem/users + 4个事务存储过程(下单/付款)" },
            { name: "视图笔记", path: "数据库/mysql/onlinedb/", icon: "📁", desc: "视图创建+添加字段 + 索引创建/删除/复合/前缀" },
          ]},
          { title: "拍卖系统 auction1", items: [
            { name: "auction1.sql (5表)", path: "数据库/mysql/exam/auction1.sql", icon: "🗄️", desc: "bid/items/kind/state/users + 完整拍卖数据" },
            { name: "all.txt (高级SQL)", path: "数据库/mysql/exam/all.txt", icon: "📄", desc: "最高出价视图·赢家判定(>=底价→被赢取,<底价→流拍)·查询报表·proc_jy_info" },
            { name: "视图SQL (2.txt/3.txt)", path: "数据库/mysql/exam/", icon: "📁", desc: "view_price(最高出价) + view_p_u(最高出价人) + CASE WHEN赢家判定" },
          ]},
          { title: "美淘网团购平台 meitao", items: [
            { name: "meitao.sql (8表)", path: "数据库/mysql/meitao.sql", icon: "🗄️", desc: "admin/地区(层级)/商品类型(层级)/客户/订单/订单明细/商品/商家 + 武汉数据" },
            { name: "meitao中文.sql", path: "数据库/mysql/meitao中文.sql", icon: "🗄️", desc: "中文表名版 + 修正字段名" },
          ]},
          { title: "旅游系统 journey", items: [
            { name: "journey - 中文版.sql (6表)", path: "数据库/mysql/journey - 中文版.sql", icon: "🗄️", desc: "客户/线路/线路类型/订单/订单线路详细/订单客户详细 + 国内短线+出境游" },
          ]},
          { title: "触发器与存储过程", items: [
            { name: "3个触发器", path: "数据库/mysql/触发器.txt", icon: "📄", desc: "tri_tel(手机号长度校验) + tel_pwd(密码MD5加密) + trig_order_num(库存/销量/金额更新)" },
            { name: "游标存储过程", path: "数据库/mysql/1219.txt", icon: "📄", desc: "proc_name_cate_price：游标遍历goods+category" },
          ]},
          { title: "设计", items: [
            { name: "数据模型.cdm", path: "数据库/mysql/模型.cdm", icon: "📊", desc: "PowerDesigner概念数据模型" },
            { name: "课程语雀", path: "数据库/mysql/数据库语雀地址.txt", icon: "🔗", desc: "https://www.yuque.com/zhangjunpeng-1yflg/iwoioo" },
          ]},
        ]
      },
    ]
  },

  testing: {
    sections: [
      {
        title: "软件测试",
        path: "软件测试/rjcs/",
        groups: [
          { title: "Selenium 自动化（15级递进式work目录）", items: [
            { name: "work9 高级定位", path: "软件测试/rjcs/rjcs_python/", icon: "📁", desc: "ActionChains双击右键·Ctrl+A/C/V·CSS_SELECTOR·XPATH·TPShop登录" },
            { name: "work10 Frame+特殊交互", path: "软件测试/rjcs/rjcs_python/", icon: "📁", desc: "Frame切换(menu→main)·窗口句柄·alert·文件上传·JS滚动条" },
            { name: "work11 POM基础", path: "软件测试/rjcs/rjcs_python/", icon: "📁", desc: "LoginClass(login/logout) + CallLogin调用" },
            { name: "work12 unittest", path: "软件测试/rjcs/rjcs_python/", icon: "📁", desc: "TestMath(assertEqual) + TestSys(XPATH+CSS双登录测试)" },
            { name: "work13 HTML报告", path: "软件测试/rjcs/rjcs_python/", icon: "📁", desc: "HTMLTestRunner + TestLoader.discover + 失败截图" },
            { name: "work14 DDT数据驱动", path: "软件测试/rjcs/rjcs_python/", icon: "📁", desc: "CSV读取 + @data装饰器 + ECShop表单填写 + assertEqual" },
            { name: "work15 完整POM架构", path: "软件测试/rjcs/rjcs_python/", icon: "📁", desc: "BasePage→LoginPage→AddPage三层继承 + test_Add集成测试" },
          ]},
          { title: "JMeter 性能测试", items: [
            { name: "JMeter 5.5 完整安装", path: "软件测试/rjcs/apache-jmeter-5.5/", icon: "📁", desc: "Apache JMeter 5.5" },
            { name: "C_BF_PD.jmx", path: "软件测试/rjcs/C_BF_PD.jmx", icon: "🧪", desc: "ECShop登录压测：HTTP→192.168.136.145→admin/admin123→Cookie Manager+View Results Tree" },
          ]},
          { title: "LoadRunner VUGen", items: [
            { name: "ECShop1 录制脚本", path: "软件测试/rjcs/VUG/ECShop1/", icon: "📁", desc: "HTML模式录制：ECShop登录+品牌页浏览+回放结果" },
          ]},
          { title: "测试环境", items: [
            { name: "WAMP (Apache+PHP+MySQL)", path: "软件测试/rjcs/wamp/", icon: "📁", desc: "Apache 2.2.21 + PHP 5.5.27 + MySQL 5.5.28 + ECShop部署" },
            { name: "Eclipse IDE", path: "软件测试/rjcs/eclipse/", icon: "📁", desc: "含Java/ECF/m2e插件" },
          ]},
        ]
      },
    ]
  },

  erp: {
    sections: [
      {
        title: "ERP 资源协同管理平台",
        path: "ERP项目/",
        groups: [
          { title: "项目文档", items: [
            { name: "需求说明书", path: "ERP项目/1. ERP（资源协同）管理平台需求说明书.doc", icon: "📄", desc: "1.4 MB 完整需求文档" },
            { name: "部署地址", path: "ERP项目/ERP（资源协同）管理平台.txt", icon: "🌐", desc: "http://39.105.187.61:17238/" },
          ]},
          { title: "测试用例", items: [
            { name: "测试用例 v04", path: "ERP项目/ERP资产管理系统测试用例04.xls", icon: "📊", desc: "26 KB" },
            { name: "测试用例（学生版）", path: "ERP项目/ERP资产管理系统测试用例stu.xlsx", icon: "📊", desc: "11 KB" },
          ]},
        ]
      },
    ]
  },

  docs: {
    sections: [
      {
        title: "文档资料",
        path: "文档资料/",
        groups: [
          { title: "工作手册", items: [
            { name: "工作手册（二）", path: "文档资料/工作手册（二）.docx", icon: "📄", desc: "通用工作手册" },
            { name: "Android 工作手册一~十一", path: "Java开发/Android/android.kf/", icon: "📁", desc: "全套Android实训手册（缺五/十）" },
            { name: "Java Web 教程/规范/Hello", path: "Java开发/Java_Web/Java_Web/", icon: "📁", desc: "教程.docx + 规范.docx + Hello.docx" },
          ]},
          { title: "课件与教程", items: [
            { name: "JDK安装与配置 PPT", path: "文档资料/Windows+JDK安装与环境变量配置++JDK+Setup+on+Windows.pptx", icon: "📊", desc: "13 MB 详细教程" },
            { name: "VC++2010安装教程", path: "C语言/c/Visual C++2010学习版详细安装教程.docx", icon: "📄", desc: "VS2010学习版指南" },
            { name: "Java数据类型PPT", path: "Java开发/Java基础/java/工作任务1...表达式.rar", icon: "📦", desc: "数据类型/变量/常量/运算符" },
          ]},
          { title: "考试试卷", items: [
            { name: "Vue期末技能考试试卷", path: "前端开发/Vue考试/2025vue3_exam/《Vue应用程序开发》期末技能考试试卷23软件.doc", icon: "📄", desc: "23软件技术" },
            { name: "5个JAVA类源代码.pdf", path: "Java开发/Java基础/java/000/5个JAVA类源代码.pdf", icon: "📄", desc: "Java考试代码参考" },
          ]},
          { title: "其他", items: [
            { name: "23级软件学生名单", path: "文档资料/23级软件（中外）学生名单.xlsx", icon: "📊", desc: "xlsx + xlsm(宏)两个版本" },
            { name: "MySQL语雀链接", path: "数据库/mysql/数据库语雀地址.txt", icon: "🔗", desc: "zhangjunpeng-1yflg/iwoioo" },
          ]},
        ]
      },
    ]
  },

  tools: {
    sections: [
      {
        title: "工具与资源",
        path: "工具与资源/",
        groups: [
          { title: "开发环境", items: [
            { name: "Eclipse IDE", path: "软件测试/rjcs/eclipse/", icon: "📁", desc: "含Java/ECF/m2e插件" },
            { name: "Apache JMeter 5.5", path: "软件测试/rjcs/apache-jmeter-5.5/", icon: "📁", desc: "性能测试工具" },
            { name: "WAMP 环境", path: "软件测试/rjcs/wamp/", icon: "📁", desc: "Apache 2.2.21 + PHP 5.5.27 + MySQL 5.5.28" },
            { name: "Android ADT 23.0.7", path: "Java开发/Android/android.kf/ADT-23.0.7.zip", icon: "📦", desc: "Eclipse Android开发插件" },
          ]},
          { title: "其他工具（MINI 已移回根目录）", items: [
            { name: "Eclipse IDE 备份", path: "归档文件/eclipse.rar", icon: "📦", desc: "519 MB 完整 Eclipse 压缩包" },
            { name: "JAR 包合集", path: "归档文件/jar包.rar", icon: "📦", desc: "Java JAR 依赖合集" },
          ]},
          { title: "其他", items: [
            { name: "微PE信息", path: "工具与资源/WePE_64_V2.3.iso.txt", icon: "📄", desc: "WePE V2.3 x64" },
            { name: "截图", path: "工具与资源/捕获.PNG", icon: "🖼️", desc: "截图文件" },
            { name: "Pictures / Recordings / Ringtones", path: "工具与资源/", icon: "📁", desc: "媒体文件夹" },
            { name: "TEST 测试页", path: "工具与资源/TEST/", icon: "📁", desc: "demo.html + demo2.html/css + demo3.html" },
          ]},
        ]
      },
    ]
  },

  archives: {
    sections: [
      {
        title: "归档文件",
        path: "归档文件/",
        groups: [
          { title: "作业提交包", items: [
            { name: "2318831-徐祎昌.zip", path: "归档文件/2318831-徐祎昌.zip", icon: "📦", desc: "360 KB · 2025-01-02" },
            { name: "2318831徐祎昌.rar", path: "归档文件/2318831徐祎昌.rar", icon: "📦", desc: "4 MB · 2024-06-25" },
            { name: "05徐祎昌src.rar", path: "归档文件/05徐祎昌src.rar", icon: "📦", desc: "20 KB · 2025-06-20" },
            { name: "序号.zip", path: "归档文件/序号.zip", icon: "📦", desc: "13 KB · 2025-05-09" },
            { name: "src-小黑记事本.rar", path: "归档文件/src-小黑记事本.rar", icon: "📦", desc: "3 KB · 记事本项目源码" },
          ]},
          { title: "课程归档（散落在各分类中, 共20+）", items: [
            { name: "Java 练习案例 V2.0", path: "Java开发/Java基础/java/000/《面向对象程序设计》练习案例（A）V2.0.rar", icon: "📦", desc: "OOP练习案例" },
            { name: "Java 基本语法/流程控制课件", path: "Java开发/Java基础/java/", icon: "📦", desc: "02+03两个rar" },
            { name: "房屋租赁管理系统", path: "Java开发/Java基础/java/2.2房屋租赁管理系统源代码...rar", icon: "📦", desc: "完整CRUD功能" },
            { name: "Student_Books 项目", path: "Java开发/Java_Web/Java_Web/Student_Booksen.zip", icon: "📦", desc: "图书管理系统" },
            { name: "Vue 0418demo + 0613task6", path: "前端开发/Vue课程/vue.js/", icon: "📦", desc: "2个rar" },
            { name: "Android 素材 + ContextMenu + OptionsMenu", path: "Java开发/Android/android.kf/", icon: "📦", desc: "1个rar + 2个zip" },
            { name: "C语言课件", path: "C语言/c/C语言课件.zip", icon: "📦", desc: "课件压缩包" },
            { name: "JMeter 5.5 + 会话分析", path: "软件测试/rjcs/", icon: "📦", desc: "2个rar" },
          ]},
        ]
      },
    ]
  },
};
