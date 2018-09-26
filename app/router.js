import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bricks', {path: '/legos'});
  // dynamic route 'item/:item_name'
  this.route('item', {path: 'item/:item_name'}, function() {
    this.route('nutrition');
  });

});

export default Router;
