const app = new Vue ({
    el: "#app",
    data : {
        loggedin: false,
        JWT: "",
        createUN: "", 
        createPW: "",
        devURL: "http://localhost:3000",
        prodURL: null,
        user: null, 
        token: null, 
    },
    methods: {
        handleLogin: function() {
            const URL = this.prodURL ? this.prodURL : this.devURL;
            const user = { username: this.createUN, password: this.createPW };
            console.log("hello");
            fetch(`${URL}/login`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            .then((response) => response.json())
            .then((data) => {  
            this.user = data.user;    
            this.token = data.token;     
            this.loggedin = true;   
            this.createPW=""
            this.createUN=""
        });
        },
        handleLogout: function() {
            this.loggedin= false
            this.user= null;
            this.token = null;
        }
    }
})
