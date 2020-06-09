let rootElement = document.querySelector('#root');

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let testelement = data.map((x) => x.position);
    console.log(testelement);
    data
      .map((x) => mainBlock(x.logo, x.company, x.position, x.postedAt, x.contract, x.location, x.new, x.featured))
      .forEach((x) => rootElement.appendChild(x));
  });

const mainBlock = (logo, company, position, postedAt, contract, location, addedNew, addFeatured) => {
  let mainDiv = document.createElement('div');
  let logoElement = document.createElement('img');
  let companyName = document.createElement('p');
  let positionName = document.createElement('p');
  let jobStatus = document.createElement('p');
  let newItem = document.createElement('div')
  let featuredItem = document.createElement('div')
  let requiredSkills = document.createElement('div')

  logoElement.src = logo;
  companyName.innerText = company;
  positionName.innerText = position;
  jobStatus.innerText = `${postedAt} - ${contract} - ${location}`;
  addedNew ? newItem.innerText = 'NEW': newItem.innerText = '';
  addFeatured ? featuredItem.innerText = 'FEATURED': featuredItem.innerText = '';



  mainDiv.appendChild(logoElement);
  mainDiv.appendChild(companyName);
  mainDiv.appendChild(positionName);
  mainDiv.appendChild(jobStatus);
  mainDiv.appendChild(newItem);
  mainDiv.appendChild(featuredItem);

  return mainDiv;
};

// let makeTitle = (title, season, number) => {
//   let titleElement = document.createElement('h3');
//   titleElement.innerText = '';
//   return titleElement;
// };

// //Getting photo

// let makePhoto = (photo) => {
//   let photoElement = document.createElement('img');
//   photoElement.src = photo;
//   return photoElement;
// };

// //getting the summary
// let makeSummary = (summary) => {
//   let summaryElement = document.createElement('p');
//   summaryElement.innerText = summary
//   return summaryElement;
// };
