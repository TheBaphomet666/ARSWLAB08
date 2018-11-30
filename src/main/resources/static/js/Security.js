var host = "http://localhost:8080"
var sec = (function(){

    return{

        login : async function(creds){
            await Promise.resolve(axios.post(host+"/users",creds));

        },

        register: async function(creds){
            await Promise.resolve(axios.post(host+"/users/sign-up",creds));

        }
    }
})();