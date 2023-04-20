import Head from 'next/head'
import { Button, message, Steps, theme } from 'antd';
import React, { useState } from 'react';

import Owner from './components/Owner';
import Hospital from './components/Hospital';
import Verifier from './components/Verifiers';
import demoPage from './components/Demo';
import Demo from './components/Demo';

export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};


export default function SignIn() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Fact Fortress Demo</h1>
          </div>
          <Demo />
        </div>
      </div>
    </section>
  );
}
