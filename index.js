import { log } from "./lib/utils.js";

function main() {
    log('Running this')
}

(() => {
    main()
  
    setInterval(() => {
      main();
    }, 1 * 60 * 1000); // 1 minutes
})();
