'use strict';

export const config = {
    PORT: process.env.PORT || 4999,
    HOST: process.env.HOST || 'localhost',
    PREFIX: '/api',
    VERSION: 'v1',
    API_PREFIX: `/api/v1`,
    SCHEMA: 'http'
}

/**
 * Create the route path based on the config prefix and version API
 * @param resourceName
 */
export const getResourcePath = (resourceName:string) => {
    return `${config.API_PREFIX}/${resourceName}`;
}
