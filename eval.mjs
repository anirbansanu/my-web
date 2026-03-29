import fs from 'fs';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', { 
    url: 'http://localhost/', 
    runScripts: 'dangerously' 
});

const code = fs.readFileSync('dist/assets/index-CLsRRP1C.js', 'utf-8');

try {
    dom.window.eval(code);
    console.log('EVAL SUCCESS');
} catch(e) {
    console.error('JS ERROR:', e);
}
