let rootElement = document.querySelector('#root');

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let testelement = data.map((x) => x.position);
    console.log(testelement);
    data
      .map((x) =>
        mainBlock(
          x.logo,
          x.company,
          x.position,
          x.postedAt,
          x.contract,
          x.location,
          x.new,
          x.featured,
          x.role,
          x.level,
          x.language
        )
      )
      .forEach((x) => rootElement.appendChild(x));
  });

const mainBlock = (
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  addedNew,
  addFeatured,
  role,
  level,
  language
) => {
  let mainDiv = document.createElement('div');
  let logoElement = document.createElement('img');
  let companyName = document.createElement('p');
  let positionName = document.createElement('p');
  let jobStatus = document.createElement('p');
  let newItem = document.createElement('div');
  let featuredItem = document.createElement('div');
  let requiredSkills = document.createElement('div');
  let roleItem = document.createElement('div');
  let levelItem = document.createElement('div');
  let languageItem = document.createElement('div');

  logoElement.src = logo;
  companyName.innerText = company;
  positionName.innerText = position;
  jobStatus.innerText = `${postedAt} - ${contract} - ${location}`;
  addedNew ? (newItem.innerText = 'NEW') : (newItem.innerText = '');
  addFeatured
    ? (featuredItem.innerText = 'FEATURED')
    : (featuredItem.innerText = '');
  roleItem.innerText = role;
  levelItem.innerText = level;

  requiredSkills.appendChild(roleItem);
  requiredSkills.appendChild(levelItem);

  mainDiv.appendChild(logoElement);
  mainDiv.appendChild(companyName);
  mainDiv.appendChild(positionName);
  mainDiv.appendChild(jobStatus);
  mainDiv.appendChild(newItem);
  mainDiv.appendChild(featuredItem);
  mainDiv.appendChild(requiredSkills);

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
