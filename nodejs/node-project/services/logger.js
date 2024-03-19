const winston = require('winston');

const errorLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'error.log',
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                winston.format.printf(error => `${error.level}: ${[error.timestamp]}: ${error.message}`),
                winston.format.prettyPrint(),
        )}),
    ]
});

const warnLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'error.log',
            level: 'warn',
            format: winston.format.combine(
                winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                winston.format.printf(error => `${error.level}: ${[error.timestamp]}: ${error.message}`),
                winston.format.prettyPrint(),
        )}),
    ]
});

const infoLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'info.log',
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
        )}),
    ]
})

module.exports = { infoLogger, errorLogger, warnLogger };