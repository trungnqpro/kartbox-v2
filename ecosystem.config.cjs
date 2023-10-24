// PRODUCTION
module.exports = {
  apps: [
    {
      name: 'KartboxV2',
      exec_mode: 'cluster', // enables clustering: cluster | fork
      instances: '1', // or an integer
      cwd: './',
      script: '.output/server/index.mjs',
      node_args: '',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      //        error_file: "DragonKartApp.err.log",
      //        out_file: "DragonKartApp.out.log",
      env: {
        HOST: '0.0.0.0',
        PORT: 3000,
        SESSION_EXPIRES: process.env.SESSION_EXPIRES,
      },
    },
  ],
}

// NODE_OPTIONS=--max-old-space-size=4096
