var History = (function () {

    function Stack() {
        this.data = [];
        this.top = 0;
    }

    Stack.prototype.push = function (val) {
        this.data[this.top++] = val;
    };

    Stack.prototype.pop = function () {
        if(this.top > 0) {
            return this.data[--this.top];
        }

        return null;
    };

    Stack.prototype.isEmpty = function () {
        return this.top === 0;
    };

    Stack.prototype.empty = function () {
        this.top = 0;
    };

    var _backStack = new Stack();
    var _fwdStack = new Stack();
    var _current;

    var _add = function (item) {

        if(_current !== null) {
            _backStack.push(_current);
        }
        
        _current = item;
        _fwdStack.empty();
    };

    var _back = function() {
        var item = _backStack.pop();
        
        if(item) {
            _fwdStack.push(_current);
            _current = item;
        }

        return item;
    };

    var _fwd = function() {
        var item = _fwdStack.pop();
        
        if(item) {
            _backStack.push(_current);
            _current = item;
        }

        return item;
    };

    var _hasBack = function () {
        return !_backStack.isEmpty();
    };

    var _hasFwd = function () {
        return !_fwdStack.isEmpty();
    };

    var _clear = function () {
        _backStack.empty();
        _fwdStack.empty();

        _current = null;
    };

    var _getCurrent = function () {
        return _current;
    };

    return {
        add: _add,
        back: _back,
        fwd: _fwd,
        hasBack: _hasBack,
        hasFwd: _hasFwd,
        clear: _clear,
        current: _getCurrent
    };

})();

if(typeof module !== undefined) {
    module.exports = History;
}