const cachePlugin = require("./cachePlugin");

const authority = {
    AADAuthority: "https://login.microsoftonline.com/90b8faa8-cc95-460e-a618-ee770bee1759",
    CommonAuthority: "https://login.microsoftonline.com/common"
}

module.exports = {
    /**
     * Public Client Application Configuration
     */
    auth: {
        clientId: "99cab759-2aab-420b-91d8-5e3d8d4f063b",
        authority: authority.AADAuthority,
        redirectUri: "http://localhost:3000/redirect",
    },
    cache: {
        cachePlugin,
    },
};