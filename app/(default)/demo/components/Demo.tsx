"use client";
import { Button, message, Steps, theme } from 'antd';
import React, { useState } from 'react';

import Owner from './Owner';
import Hospital from './Hospital';
import Verifier from './Verifiers';
import Dapp from './Dapp';

export default function Demo() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: 'Mint',
      content: <Owner />,
    },
    {
      title: 'Data Provider',
      content: <Hospital />,
    },
    {
      title: 'Data Analyis',
      content: <Dapp />,
    },
    {
      title: 'Verify',
      content: <Verifier />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    margin: 16,
    height: '80%',
  };
  return (
    <div>
      <Steps current={current} items={items} style={{ margin: 25, width: '95%' }}/>
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ margin: 20 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: 10 }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  )
}
