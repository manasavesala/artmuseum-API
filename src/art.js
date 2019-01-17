export class Art {
    period() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.harvardartmuseums.org/period?apikey=${process.env.API_KEY}`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
    
    century() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.harvardartmuseums.org/century?apikey=${process.env.API_KEY}`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
    classification() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.harvardartmuseums.org/classification?apikey=${process.env.API_KEY}`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
    technique() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.harvardartmuseums.org/technique?apikey=${process.env.API_KEY}`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }



    
}
