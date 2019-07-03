describe('Healthcheck', function healthcheckTest() {
    const express = require('express');
    const supertest = require('supertest');
    const httpStatus = require('http-status');

    const initApp = require('../../lib/app');

    it('Should response positively to a healthcheck', () => {
        const app = initApp(express);
        request(app)
            .get('/healthcheck')
            .expect(httpStatus.OK);
    });
});
