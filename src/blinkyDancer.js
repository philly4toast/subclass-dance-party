var MakeBlinkyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="gif" src = "img/carlton.gif" />');
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // MakeDancer(this.step);
  // MakeBlinkyDancer.bind(MakeDancer.prototype.step);
  MakeDancer.prototype.step.call(this);
  console.log(this.$node);

  this.$node.toggle();
};