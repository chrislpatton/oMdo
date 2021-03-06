jest.unmock('../app/components/about.js');

describe('About', function() {
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');
  var About;
  beforeEach(function() {
    About = require('../app/components/about');
  });
  it('should exist', function() {
    var about = TestUtils.renderIntoDocument(<div><About /></div>);
    expect(TestUtils.isDOMComponent(about)).toBeTruthy();
  });
});


