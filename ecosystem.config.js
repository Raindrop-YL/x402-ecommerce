module.exports = {
  apps: [
    {
      name: 'x402-ecommerce', // 应用名称
      script: 'npm', // 使用 npm 作为启动器
      args: 'start', // 传递给 npm 的参数（即执行 npm start）
      port: 4021, // 应用端口

      // 环境变量
      env: {
        NODE_ENV: 'production',
        PORT: 4021,
      },

      // 日志配置
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      log_file: './logs/nextjs-app.log',
      error_file: './logs/nextjs-app-error.log',
      out_file: './logs/nextjs-app-out.log',

      // 其他设置
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
}
