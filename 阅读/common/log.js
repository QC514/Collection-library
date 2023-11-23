const log4js = require('log4js');


module.exports = {
    init(file) {
        // 配置日志
        log4js.configure({
            appenders: {
                console: {
                    type: 'console',
                    layout: {
                        type: 'pattern',
                        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] [%f{3}:%l] %m',
                    }
                }, // 输出到控制台
                file: {
                    type: 'file',
                    filename: file,
                    layout: {
                        type: 'pattern',
                        pattern: '%r %p - %m',
                    }
                }
            },
            categories: {
                default: {
                    appenders: ["console",'file'],
                    level: 'debug'
                }
            }
        })
        let logs = console.log
        let logger = log4js.getLogger()

        logs("启动日志")
        logger.info('启动日志')
        console.log = (...d) => {
            logs(...d)
            logger.info(...d)
        }
    }
}