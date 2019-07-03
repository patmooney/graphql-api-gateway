module.exports = {
    PORT: 4001,
    services: [
        { name: 'videos', url: 'http://localhost:4003' },
        { name: 'models', url: 'http://localhost:4002' },
        // { name: 'models-service', url: 'http://10.0.0.145:4002' },
    ]
}
