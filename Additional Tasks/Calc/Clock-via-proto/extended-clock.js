
function ExtendedClock (options) {
  this._template = options.template;
  precision = +options.precision || 1000;
}

ExtendedClock.prototype = Object.create(Clock.prototype);
ExtendedClock.prototype.constructor = Clock;

ExtendedClock.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, precision);
}
