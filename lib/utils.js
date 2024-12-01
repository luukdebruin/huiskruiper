export function log(...props){
    const date = new Date().toISOString().slice(0, 16);
    const prefix = `=> ${date}`;
    console.log(prefix, ...props);
};