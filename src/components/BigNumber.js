import React from 'react';
import PropTypes from 'prop-types';
import MailImage from '../images/envelope.svg';
import StampImage from '../images/stamp.svg';
import UploadImage from '../images/upload.svg';

const BigNumber = props => {
  const imageHeight = "2em";

  let smallImage;
  if (props.imageChoice == "stamp") {
    smallImage = <StampImage height={imageHeight} className="small-image" />;
  } else if (props.imageChoice == "upload") {
    smallImage = <UploadImage height={imageHeight} className="small-image" />;
  } else {
    smallImage = <MailImage height={imageHeight} className="small-image" />;
  }

  return (
    <div className="BigNumber">
      <span className="small-text">
        {smallImage}{props.smallPrint}
      </span>
      <span className="big-number">
        {props.bigNumber.toFixed(props.numDecimalPlaces)}
      </span>
    </div>
  )
};

BigNumber.propTypes = {
  /** The big number */
  bigNumber: PropTypes.number,
  /** The small print */
  smallPrint: PropTypes.string,
  /** The image choice, either "mail" or "stamp" or "upload" */
  imageChoice: PropTypes.string,
};

BigNumber.defaultProps = {
  bigNumber: 103,
  smallPrint: "Received!",
  imageChoice: "mail",
}

export default BigNumber;
