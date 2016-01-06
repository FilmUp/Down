/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export const port = process.env.PORT || 5000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const googleAnalyticsId = 'UA-XXXXX-X';

export const analyticsCode = { __html:
  `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
  `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
  `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
  `e.src='https://www.google-analytics.com/analytics.js';` +
  `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
  `ga('create','xxxxxxx-x','auto');ga('send','pageview');`,
};
