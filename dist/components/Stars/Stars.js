"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Star_1 = __importDefault(require("../Star/Star"));
function Stars({ count = 0 }) {
    if (count || count < 1 || count > 5 || typeof count !== 'number') {
        return;
    }
    // const arr = new Array(count).fill(0);
    return (react_1.default.createElement("ul", { className: 'card-body-stars' }, Array.from({ length: count }).map((_, index) => {
        return react_1.default.createElement(Star_1.default, { key: index });
    })));
}
exports.default = Stars;
//# sourceMappingURL=Stars.js.map