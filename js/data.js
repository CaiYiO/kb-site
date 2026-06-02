const KB = {
  home: {
    stats: [
      { num: 10, label: "知识分类" },
      { num: 82, label: "文件/目录" },
      { num: 6, label: "编程语言" },
      { num: 11, label: "课程项目" },
    ]
  },

  categories: [
    { id: "java",      icon: "☕", name: "Java 开发",     desc: "Java基础 / Java Web / Android" },
    { id: "frontend",  icon: "🎨", name: "前端开发",      desc: "Vue3 / HTML / CSS / JavaScript" },
    { id: "python",    icon: "🐍", name: "Python 开发",    desc: "通讯录系统 / 中俄合作课程" },
    { id: "c",         icon: "⚙️", name: "C 语言",         desc: "课件 / NCRE考试 / VC++" },
    { id: "database",  icon: "🗄️", name: "数据库",         desc: "MySQL / SQL脚本 / 模型设计" },
    { id: "testing",   icon: "🧪", name: "软件测试",      desc: "JMeter / 测试用例 / Eclipse" },
    { id: "erp",       icon: "🏢", name: "ERP 项目",       desc: "资源协同管理平台" },
    { id: "docs",      icon: "📄", name: "文档资料",      desc: "工作手册 / 课件 / 学生名单" },
    { id: "tools",     icon: "🔧", name: "工具与资源",    desc: "开发工具 / 环境配置 / MINI" },
    { id: "archives",  icon: "📦", name: "归档文件",      desc: "作业提交 / 源码包 / 课件归档" },
  ],

  java: {
    sections: [
      {
        title: "Java 基础",
        path: "Java开发/Java基础/java/",
        groups: [
          { title: "课程项目", items: [
            { name: "A11-19 项目", path: "Java开发/Java基础/java/A11-19/", icon: "📁", desc: "Eclipse Java项目（含src/bin）" },
            { name: "A11-21 项目", path: "Java开发/Java基础/java/A11-21/", icon: "📁", desc: "Eclipse Java项目（含src/bin）" },
            { name: "房屋租赁管理系统", path: "Java开发/Java基础/java/2.2房屋租赁管理系统源代码...rar", icon: "📦", desc: "完整CRUD功能源码" },
          ]},
          { title: "课件", items: [
            { name: "Java基本语法", path: "Java开发/Java基础/java/02 项目二：Java基本语法.rar", icon: "📦", desc: "课件压缩包" },
            { name: "流程控制语句", path: "Java开发/Java基础/java/03 项目三：流程控制语句.rar", icon: "📦", desc: "课件压缩包" },
            { name: "练习案例 (A) V2.0", path: "Java开发/Java基础/java/000/《面向对象程序设计》练习案例（A）V2.0.rar", icon: "📦", desc: "面向对象练习" },
          ]},
          { title: "考试", items: [
            { name: "考试目录", path: "Java开发/Java基础/java/000/Exam/", icon: "📁", desc: "考试相关文件" },
            { name: "5个JAVA类源代码", path: "Java开发/Java基础/java/000/5个JAVA类源代码.pdf", icon: "📄", desc: "考试代码参考" },
          ]},
        ]
      },
      {
        title: "Java Web",
        path: "Java开发/Java_Web/Java_Web/",
        groups: [
          { title: "课程项目", items: [
            { name: "0507 - BMI计算器", path: "Java开发/Java_Web/Java_Web/0507/", icon: "📁", desc: "Java Web BMI项目" },
            { name: "0510 - 文件IO操作", path: "Java开发/Java_Web/Java_Web/0510/", icon: "📁", desc: "含图片IO操作" },
            { name: "0512 - IDEA项目", path: "Java开发/Java_Web/Java_Web/0512/", icon: "📁", desc: "IDEA Java项目" },
            { name: "0514 - IDEA项目", path: "Java开发/Java_Web/Java_Web/0514/", icon: "📁", desc: "IDEA Java项目" },
            { name: "0518 - IDEA项目", path: "Java开发/Java_Web/Java_Web/0518/", icon: "📁", desc: "IDEA Java项目" },
            { name: "SQL脚本", path: "Java开发/Java_Web/Java_Web/.sql/", icon: "📁", desc: "数据库SQL脚本" },
          ]},
        ]
      },
      {
        title: "Android 开发",
        path: "Java开发/Android/android.kf/",
        groups: [
          { title: "工作手册（全套）", items: [
            { name: "工作手册（一）~（十一）", path: "Java开发/Android/android.kf/", icon: "📄", desc: "Android开发全套手册（缺五、十）" },
            { name: "按钮事件五种实现方式", path: "Java开发/Android/android.kf/Android的按钮单击事件及监听器五种常见的实现方式.docx", icon: "📄", desc: "学习笔记" },
          ]},
          { title: "Demo 项目", items: [
            { name: "0904 课堂demo", path: "Java开发/Android/android.kf/demo/0904/", icon: "📁", desc: "课程演示项目" },
            { name: "Abutton - 按钮事件", path: "Java开发/Android/android.kf/demo/Abutton/", icon: "📁", desc: "按钮单击事件demo" },
            { name: "layout4 - 布局", path: "Java开发/Android/android.kf/demo/layout4/", icon: "📁", desc: "布局demo" },
            { name: "phone - 电话应用", path: "Java开发/Android/android.kf/demo/phone/", icon: "📁", desc: "电话应用demo" },
            { name: "ContextMenu", path: "Java开发/Android/android.kf/demo/ContextMenu.zip", icon: "📦", desc: "上下文菜单demo" },
            { name: "OptionsMenu", path: "Java开发/Android/android.kf/demo/OptionsMenu.zip", icon: "📦", desc: "选项菜单demo" },
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
            { name: "2025年春季《Vue应用程序开发》", path: "前端开发/Vue课程/vue.js/2025年春季《Vue应用程序开发》.html", icon: "🌐", desc: "语雀课程文档（离线保存）" },
            { name: "0418 课堂demo", path: "前端开发/Vue课程/vue.js/0418demo.rar", icon: "📦", desc: "4月18日课堂demo" },
            { name: "0613 task6", path: "前端开发/Vue课程/vue.js/0613task6.rar", icon: "📦", desc: "task6项目压缩包" },
          ]},
        ]
      },
      {
        title: "Vue3 期末考试",
        path: "前端开发/Vue考试/2025vue3_exam/",
        groups: [
          { title: "考试项目", items: [
            { name: "Vue3 考试项目", path: "前端开发/Vue考试/2025vue3_exam/2025vue3_exam/", icon: "📁", desc: "Vite + Vue3 期末技能考试" },
            { name: "考试试卷", path: "前端开发/Vue考试/2025vue3_exam/《Vue应用程序开发》期末技能考试试卷23软件.doc", icon: "📄", desc: "Vue期末技能考试试卷" },
          ]},
        ]
      },
      {
        title: "Vue3 后台管理系统 (Task6)",
        path: "前端开发/Vue项目_task6/0613task6/",
        groups: [
          { title: "核心组件", items: [
            { name: "登录页面", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/views/Login.vue", icon: "🔐", desc: "Login.vue" },
            { name: "管理后台首页", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/views/AdminHome.vue", icon: "🏠", desc: "AdminHome.vue" },
            { name: "商品管理", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/components/Goods.vue", icon: "🛒", desc: "Goods.vue" },
            { name: "订单管理", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/components/Order.vue", icon: "📋", desc: "Order.vue" },
            { name: "权限管理", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/components/Rights.vue", icon: "🛡️", desc: "Rights.vue" },
            { name: "系统设置", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/components/Setting.vue", icon: "⚙️", desc: "Setting.vue" },
            { name: "用户管理", path: "前端开发/Vue项目_task6/0613task6/0613task6/src/components/Users.vue", icon: "👥", desc: "Users.vue" },
            { name: "参考源码", path: "前端开发/Vue项目_task6/0613task6/0613task6/src-参考/", icon: "📁", desc: "含Cart/Detail/Home等参考页面" },
          ]},
        ]
      },
      {
        title: "HTML/CSS/JS 作业",
        path: "前端开发/HTML作业/XuYiChang/",
        groups: [
          { title: "考试", items: [
            { name: "Задание 1.html", path: "前端开发/HTML作业/XuYiChang/exam/Задание 1.html", icon: "📄", desc: "考试任务1" },
            { name: "Задание 2.html", path: "前端开发/HTML作业/XuYiChang/exam/Задание 2.html", icon: "📄", desc: "考试任务2" },
            { name: "Задание 3.html", path: "前端开发/HTML作业/XuYiChang/exam/Задание 3.html", icon: "📄", desc: "考试任务3" },
          ]},
          { title: "平时作业", items: [
            { name: "JS基础练习", path: "前端开发/HTML作业/XuYiChang/homework/", icon: "📁", desc: "for...in / if / switch 等" },
            { name: "表格练习", path: "前端开发/HTML作业/XuYiChang/homework/table.html", icon: "📄", desc: "table.html" },
            { name: "DOM操作练习", path: "前端开发/HTML作业/XuYiChang/homework/demo1030.1.html", icon: "📄", desc: "demo1030.1.html" },
            { name: "Lab实验", path: "前端开发/HTML作业/XuYiChang/homework/lab4_2.html", icon: "📄", desc: "lab4_2 ~ lab4_4" },
          ]},
        ]
      },
      {
        title: "Anna 日历项目",
        path: "前端开发/Anna日历/Anna/calender/",
        groups: [
          { title: "项目文件", items: [
            { name: "日历应用", path: "前端开发/Anna日历/Anna/calender/", icon: "📁", desc: "Vite + Vue3 日历应用" },
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
          { title: "项目文件", items: [
            { name: "manager.py", path: "Python开发/通讯录系统/python/学生通讯录管理系统/manager.py", icon: "🐍", desc: "主管理逻辑" },
            { name: "studentEntity.py", path: "Python开发/通讯录系统/python/学生通讯录管理系统/studentEntity.py", icon: "🐍", desc: "学生实体类" },
            { name: "students.csv", path: "Python开发/通讯录系统/python/学生通讯录管理系统/students.csv", icon: "📊", desc: "CSV数据文件" },
          ]},
        ]
      },
      {
        title: "RU Python 课程（中俄合作）",
        path: "Python开发/RU课程/RU_Python/",
        groups: [
          { title: "项目文件", items: [
            { name: "Demo 代码", path: "Python开发/RU课程/RU_Python/pythonProject/Demo/", icon: "📁", desc: "课堂Demo代码" },
            { name: "HomeWork 作业", path: "Python开发/RU课程/RU_Python/pythonProject/HomeWork/", icon: "📁", desc: "作业代码" },
            { name: "学习笔记", path: "Python开发/RU课程/RU_Python/pythonProject/note/", icon: "📁", desc: "学习笔记" },
            { name: "课程截图", path: "Python开发/RU课程/RU_Python/", icon: "🖼️", desc: "课程相关截图（多张jpg）" },
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
            { name: "课堂Demo代码", path: "C语言/c/DESKTOP-2DE31UE/Demo/", icon: "📁", desc: "课堂演示代码" },
            { name: "NCRE 考试", path: "C语言/c/NCRE/EXE/", icon: "📁", desc: "全国计算机等级考试" },
            { name: "VC++2010安装教程", path: "C语言/c/Visual C++2010学习版详细安装教程.docx", icon: "📄", desc: "Visual C++ 2010学习版安装指南" },
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
          { title: "在线数据库项目", items: [
            { name: "onlinedb.sql", path: "数据库/mysql/onlinedb/onlinedb.sql", icon: "🗄️", desc: "在线数据库完整SQL" },
            { name: "SQL笔记（多篇）", path: "数据库/mysql/onlinedb/", icon: "📁", desc: "视图/索引/创建表笔记" },
          ]},
          { title: "考试", items: [
            { name: "考试答卷PDF", path: "数据库/mysql/exam/4_2318831_徐祎昌.pdf", icon: "📄", desc: "考试答卷" },
            { name: "拍卖系统SQL", path: "数据库/mysql/exam/auction1.sql", icon: "🗄️", desc: "auction系统数据库" },
          ]},
          { title: "SQL脚本", items: [
            { name: "sql.txt", path: "数据库/mysql/sql.txt", icon: "📄", desc: "SQL语句汇总" },
            { name: "美淘系统", path: "数据库/mysql/meitao.sql", icon: "🗄️", desc: "美淘系统SQL" },
            { name: "旅游系统", path: "数据库/mysql/journey - 中文版.sql", icon: "🗄️", desc: "旅游系统SQL" },
            { name: "触发器笔记", path: "数据库/mysql/触发器.txt", icon: "📄", desc: "触发器学习笔记" },
          ]},
          { title: "设计", items: [
            { name: "数据模型", path: "数据库/mysql/模型.cdm", icon: "📊", desc: "PowerDesigner概念数据模型" },
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
          { title: "测试工具", items: [
            { name: "Apache JMeter 5.5", path: "软件测试/rjcs/apache-jmeter-5.5/", icon: "📁", desc: "JMeter完整安装目录" },
            { name: "Eclipse IDE", path: "软件测试/rjcs/eclipse/", icon: "📁", desc: "用于Java测试开发" },
          ]},
          { title: "测试脚本", items: [
            { name: "C_BF_PD.jmx", path: "软件测试/rjcs/C_BF_PD.jmx", icon: "🧪", desc: "JMeter压测脚本" },
            { name: "ERP测试用例", path: "软件测试/rjcs/ERP资产管理系统测试用例04.xls", icon: "📊", desc: "ERP系统测试用例" },
          ]},
          { title: "测试项目", items: [
            { name: "任务5", path: "软件测试/rjcs/任务5/", icon: "📁", desc: "测试任务5" },
            { name: "任务6", path: "软件测试/rjcs/work6/", icon: "📁", desc: "测试任务6" },
            { name: "Python测试", path: "软件测试/rjcs/rjcs_python/", icon: "📁", desc: "Python测试代码" },
            { name: "会话分析", path: "软件测试/rjcs/analysis_session.rar", icon: "📦", desc: "测试会话分析报告" },
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
            { name: "需求说明书", path: "ERP项目/1. ERP（资源协同）管理平台需求说明书.doc", icon: "📄", desc: "1.4 MB - 完整需求文档" },
            { name: "项目简介", path: "ERP项目/ERP（资源协同）管理平台.txt", icon: "📄", desc: "项目简介" },
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
          { title: "教程与课件", items: [
            { name: "JDK安装教程PPT", path: "文档资料/Windows+JDK安装与环境变量配置++JDK+Setup+on+Windows.pptx", icon: "📊", desc: "13 MB - 详细安装指南" },
            { name: "VC++2010安装教程", path: "C语言/c/Visual C++2010学习版详细安装教程.docx", icon: "📄", desc: "VC++安装指南" },
          ]},
          { title: "工作手册", items: [
            { name: "工作手册（二）", path: "文档资料/工作手册（二）.docx", icon: "📄", desc: "根目录工作手册" },
            { name: "Android全套手册", path: "Java开发/Android/android.kf/", icon: "📁", desc: "工作手册一~十一" },
          ]},
          { title: "学生名单", items: [
            { name: "23级软件（中外）学生名单", path: "文档资料/23级软件（中外）学生名单.xlsx", icon: "📊", desc: "Excel格式" },
            { name: "23级软件（中外）学生名单（宏）", path: "文档资料/23级软件（中外）学生名单.xlsm", icon: "📊", desc: "含宏Excel" },
          ]},
          { title: "其他", items: [
            { name: "405 徐祎昌", path: "文档资料/405 徐祎昌.pdf", icon: "📄", desc: "7.4 MB PDF" },
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
          { title: "MINI 工具集", items: [
            { name: "杂项工具", path: "工具与资源/MINI/MINI/111/", icon: "📁", desc: "clash/MC服务器/ToDesk等" },
            { name: "文件恢复工具", path: "工具与资源/MINI/MINI/Backup_2025-04-16 095249/", icon: "📁", desc: "文件恢复备份" },
            { name: "Eclipse压缩包", path: "工具与资源/MINI/MINI/eclipse.rar", icon: "📦", desc: "Eclipse IDE" },
            { name: "JAR包合集", path: "工具与资源/MINI/MINI/jar包.rar", icon: "📦", desc: "Java JAR依赖" },
          ]},
          { title: "系统工具", items: [
            { name: "微PE信息", path: "工具与资源/WePE_64_V2.3.iso.txt", icon: "📄", desc: "PE启动盘信息" },
          ]},
          { title: "媒体文件", items: [
            { name: "截图", path: "工具与资源/捕获.PNG", icon: "🖼️", desc: "截图文件" },
            { name: "Pictures 图片库", path: "工具与资源/Pictures/", icon: "📁", desc: "图片/截图" },
            { name: "Recordings 录音", path: "工具与资源/Recordings/", icon: "📁", desc: "录音文件" },
            { name: "Ringtones 铃声", path: "工具与资源/Ringtones/", icon: "📁", desc: "铃声文件" },
          ]},
          { title: "TEST 测试", items: [
            { name: "demo.html", path: "工具与资源/TEST/demo.html", icon: "📄", desc: "HTML测试页" },
            { name: "demo2.html", path: "工具与资源/TEST/demo2.html", icon: "📄", desc: "HTML测试页" },
            { name: "demo3.html", path: "工具与资源/TEST/demo3.html", icon: "📄", desc: "HTML测试页" },
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
          { title: "作业提交", items: [
            { name: "2318831-徐祎昌.zip", path: "归档文件/2318831-徐祎昌.zip", icon: "📦", desc: "360 KB - 2025年1月" },
            { name: "2318831徐祎昌.rar", path: "归档文件/2318831徐祎昌.rar", icon: "📦", desc: "4 MB - 2024年6月" },
            { name: "05徐祎昌src.rar", path: "归档文件/05徐祎昌src.rar", icon: "📦", desc: "20 KB - 2025年6月" },
            { name: "序号.zip", path: "归档文件/序号.zip", icon: "📦", desc: "13 KB" },
            { name: "src-小黑记事本.rar", path: "归档文件/src-小黑记事本.rar", icon: "📦", desc: "3 KB - 记事本项目源码" },
          ]},
          { title: "课程归档（散落在各分类中）", items: [
            { name: "Java作业归档", path: "Java开发/Java基础/java/000/2318831-徐祎昌.zip", icon: "📦", desc: "Java课程作业" },
            { name: "Vue demo", path: "前端开发/Vue课程/vue.js/0418demo.rar", icon: "📦", desc: "Vue课堂demo" },
            { name: "HTML作业", path: "前端开发/HTML/html/Вариант 2.zip", icon: "📦", desc: "HTML俄语作业" },
            { name: "Android素材", path: "Java开发/Android/android.kf/第三讲 素材.rar", icon: "📦", desc: "Android课程素材" },
            { name: "C语言课件", path: "C语言/c/C语言课件.zip", icon: "📦", desc: "C语言课件" },
            { name: "JMeter工具", path: "软件测试/rjcs/apache-jmeter-5.5.rar", icon: "📦", desc: "JMeter安装包" },
          ]},
        ]
      },
    ]
  },
};
