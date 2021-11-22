import {expect, it} from '@jest/globals';
import {translateFromEng} from './translator.js';

// If 'a' is input, Expect '.-'
it("'a' is input, return '.-'", () => {
    const result = translateFromEng("a");
    expect(result).toBe(".-");
});

// If 'z' is input, Expect '--..'
it("'z' is input, return '--..'", () => {
    const result = translateFromEng("z");
    expect(result).toBe("--..");
});

// If 'hello' is input, Expect '.... . .-.. .-.. ---'
it("'hello' is input, return '.... . .-.. .-.. ---'", () => {
    const result = translateFromEng("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
});

// // If '#^&' is input, Expect 'unavailable'
it("'#^&' is input, return 'unavailable'", () => {
    const result = translator("#^&");
    expect(result).toBe("unavailable");
});