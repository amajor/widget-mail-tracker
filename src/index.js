import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from './components/BigNumber.js';
import './bootstrap.min.css';
import './index.css';

// It would take a little more than half a tree to make a carton (10 reams)
// of 100 percent, non-recycled 20-lb. copier paper.
//
// One tree makes 16.67 reams of copy paper, or 8,333.3 sheets.
//
// One ream (500 sheets) uses 6 percent of a tree.

const pagesPerTree = 8333.3;

const MailTracker = props => (
  <div className="MailTracker container">
    <div className="row">
      <div className="col-sm">
        <BigNumber
          bigNumber={props.numberReceived}
          smallPrint={"RECEIVED"}
          imageChoice="mail"
        />
      </div>
      <div className="col-sm">
        <BigNumber
          bigNumber={props.numberStamped}
          smallPrint={"STAMPED"}
          imageChoice="stamp"
        />
      </div>
      <div className="col-sm">
        <BigNumber
          bigNumber={props.numberUploaded}
          smallPrint={"UPLOADED"}
          imageChoice="upload"
        />
      </div>
    </div>
  </div>
);

MailTracker.propTypes = {
  /** The total number of emails received */
  numberReceived: PropTypes.number,
  /** The total number of emails stamped */
  numberStamped: PropTypes.number,
  /** The total number of emails uploaded */
  numberUploaded: PropTypes.number,
};

MailTracker.defaultProps = {
  numberReceived: 103,
  numberStamped: 101,
  numberUploaded: 99,
}

export default MailTracker;
