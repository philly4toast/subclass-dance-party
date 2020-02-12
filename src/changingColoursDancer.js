var ChangingColoursDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class ="gif" src = "img/giphy.gif" />');
};

ChangingColoursDancer.prototype = Object.create(MakeDancer.prototype);

ChangingColoursDancer.prototype.constructor = ChangingColoursDancer;
ChangingColoursDancer.prototype.oldStep = MakeDancer.prototype.step;

ChangingColoursDancer.prototype.step = function() {
  this.oldStep();

  if (this.left <= 0) {
    this.left = window.innerWidth;
  }
  this.left -= 5;
  this.setPosition(this.top, this.left);
};