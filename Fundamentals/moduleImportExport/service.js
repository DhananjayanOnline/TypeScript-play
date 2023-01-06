"use strict";
exports.__esModule = true;
exports.ItemService = void 0;
var ItemService = /** @class */ (function () {
    function ItemService() {
    }
    ItemService.prototype.getAllProducts = function () {
        console.log('fetch all products');
    };
    ItemService.prototype.getProductDetail = function () {
        console.log('product detail');
    };
    return ItemService;
}());
exports.ItemService = ItemService;
