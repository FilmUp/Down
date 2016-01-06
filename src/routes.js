/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import RouterContainer from './services/RouterContainer';
import assets from './assets';

import HomePage from './components/Pages/HomePage.js';
import SignUp from './components/Pages/SignUp.js';
import LoginPage from './components/Pages/LoginPage.js';

import BusinessSignUpPage from './components/BusinessSignUpPage.js';
import StudentSignUpPage from './components/StudentSignUpPage.js';
import SubscriptionPage from './components/SubscriptionPage.js';
import Feed from './components/Feed.js'
import SubmitProjectPage from './components/SubmitProjectPage.js';
import BusinessProfile from './components/BusinessProfile.js';

const router = new Router(on => {
  on('/', async () => <HomePage entry={assets.main.js} />);
  on('/home', async () => <HomePage entry={assets.main.js} />);
  on('/login', async () => <LoginPage entry={assets.main.js}/>);
  on('/student-signup', () => <StudentSignUpPage />);
  on('/business-signup', () => <BusinessSignUpPage />);
  on('/project', () => <SubmitProjectPage />);
  on('/feed', () => <Feed />);
  on('/BusinessProfile', () => <BusinessProfile />);
  on('/register', async () => <RegisterPage />);
  on('/details', async () => <SubscriptionPage />);
  on('/s', async () => <SignUp />);

});
RouterContainer.set(router);

export default router;
