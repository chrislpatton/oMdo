var React = require('react');
var Loading = require('../loading');
var Form = require('../form');
var Tile = require('../tile');

function Twit(props) {
  return (
    props.isLoading === true
    ? <Loading />
    : <Tile>
        <Form onSubmit={props.onSubmit} text='Submit' >
          <h2>What does your Twitter feed say about your mood?</h2>
          <p>This will fetch your 25 most recent tweets and run them through a sentiment analysis. The results will show the general sentiment (positive, negative, or neutral) for this subset of tweets.</p>
          <div>
            <input type='text' placeholder='Twitter Handle' onChange={props.onTwitterChange} />
          </div>
      </Form>
    </Tile>
  )
}

module.exports = Twit;
