import React from 'react';
import {Col, Rate, Row} from 'antd';

const RateComponent = ({justify, title, changeRating, rate, disabled}) => {

  return (
    <Row justify={justify || 'center'}>
      <Col>
        {title && <p style={{marginTop: 8, marginRight: 10}}>{title}</p>}
      </Col>
      <Col>
        <Rate
          allowHalf
          disabled={disabled}
          defaultValue={rate || 0}
          onChange={changeRating && (value => changeRating(value))}
        />
      </Col>
    </Row>
  );
};

export default RateComponent;