/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useState,} from 'react';
import ProgressBar from '../../teste';
import Header from '../../components/Header';
import Content from './Content'

const Compress: React.FC = () =>  {
  return (
    <Fragment>
        <Content />
        <ProgressBar/>
    </Fragment>
  );
}

export default Compress;
