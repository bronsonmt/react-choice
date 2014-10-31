var Choice = require('react-choice');

var countries = [
  {"label": "Afghanistan", "value": "AF"},
  {"label": "Albania", "value": "AL"},
  {"label": "Algeria", "value": "DZ"},
  // etc...
];

// Render component
<Choice.Single
  options={countries}
  placeholder="Select a country" />
