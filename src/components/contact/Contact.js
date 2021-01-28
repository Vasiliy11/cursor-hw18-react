import React from 'react';
import './contact.scss';
import noGender from '../../assets/images/no-gender.svg';
import male from '../../assets/images/male.svg';
import female from '../../assets/images/female.svg';

const Contact = (props) => {
  return (
    <div className="contact">
      <img
        src={
          props.gender === undefined
            ? noGender
            : props.gender === 'male'
            ? male
            : female
        }
        alt="gender"
      />
      <div className="info">
        <p className="fullname">
          {props.firstName} {props.lastName}
        </p>
        <p className="number">{props.phone}</p>
      </div>
    </div>
  );
};

export default Contact;
