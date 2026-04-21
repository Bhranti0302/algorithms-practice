/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let freq = {};

    for(let item of cpdomains){
        let [count, domain] = item.split(" ");
        count = Number(count);

        let parts = domain.split(".");

        // Build domain
        for(let i=0; i < parts.length; i++){
            let subDomain = parts.slice(i).join(".");

            freq[subDomain] = (freq[subDomain] || 0) + count;
        }
    }

    let result = [];

    for(let key in freq){
        result.push(freq[key] + " " + key)
    }

    return result;
};