const isIsomorphic = (s, t) => {
    mapS = {}
    mapT = {}

    for(let i in s){
        if(mapS[s[i]] && mapS[s[i]] != t[i]){
            return false;
        } else if (mapT[t[i]] && mapT[t[i]] != [s[i]]){
            return false;
        } else {
            mapS[s[i]] = t[i]
            mapT[t[i]] = s[i]
        }
    }

    return true;
}

let s1 = 'egg';
let t1 = 'add';

let s2 = 'foo';
let t2 = 'bar';

let s3 = 'paper';
let t3 = 'title';

console.log(isIsomorphic(s1, t1));
console.log(isIsomorphic(s2, t2));
console.log(isIsomorphic(s3, t3));