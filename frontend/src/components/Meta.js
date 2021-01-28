import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'SHU-72',
  description:
    'Britains top provider of running shoes, trainers, and everything shu.',
  keywords:
    'Nike, adidas, asics, trainers, shoes, air max, air jordan, air, adidas, nike'
};

export default Meta;
