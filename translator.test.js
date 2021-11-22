import {expect, it} from '@jest/globals';
import {} from './translator.js';

// If 'a' is input, Expect '.-'
if("'a' is input, return '.-'", () => {
    const result = translator("a");
    expect(result).toBe(".-");
});

// If 'z' is input, Expect '--..'
if("'z' is input, return '--..'", () => {
    const result = translator("z");
    expect(result).toBe("--..");
});

// If 'hello' is input, Expect '.... . .-.. .-.. ---'
if("'hello' is input, return '.... . .-.. .-.. ---'", () => {
    const result = translator("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
});

// // If '#^&' is input, Expect 'unavailable'
// if("'#^&' is input, return 'unavailable'", () => {
//     const result = translator("#^&");
//     expect(result).toBe("unavailable");
// });