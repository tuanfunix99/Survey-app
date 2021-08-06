
//Dependencies
const keys = require('../config/keys');


module.exports = (survey) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div style="text-align: center;">
          <h3>${survey.title}</h3>
          <p>${survey.body}</p>
          <div style="display: flex;text-align: center;">
              <a href="${keys.rootDomain}/api/surveys/${survey._id}/yes">Yes</a>
              <a href="${keys.rootDomain}/api/surveys/${survey._id}/no">No</a>
          </div>
      </div>
  </body>
  </html>
    `;
};
