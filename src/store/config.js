export const baseConfig = {
    baseUrl: 'http://5.230.142.193/public/',
    fetchConfig(ctx) {

        return {
            headers: {
                Authorization: 'bearer ' + ctx.rootState.user.apikey
            }
        }
    }
}