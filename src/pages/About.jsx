import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Features from '../partials/features'
import cv from '../images/james_owen.pdf'

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">

        </section>

      </main>

      <Features />


    </div>
  );
}

export default SignIn;