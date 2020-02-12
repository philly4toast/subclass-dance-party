var ChangingColoursDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

ChangingColoursDancer.prototype = Object.create(MakeDancer.prototype);

ChangingColoursDancer.prototype.constructor = ChangingColoursDancer;

ChangingColoursDancer.prototype.oldStep = MakeDancer.prototype.step;

ChangingColoursDancer.prototype.step = function() {
  this.oldStep();

  if (this.top <= 0) {
    this.top = window.innerHeight;
  }
  this.top -= 5;
  this.setPosition(this.top, this.left);
};