var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // makeDancer(this.step);
  // makeBlinkyDancer.bind(makeDancer.prototype.step);
  makeDancer.prototype.step.call(this);
  console.log(this.$node);
  
  this.$node.toggle();
};