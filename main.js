let rootElement = document.querySelector('#root');

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let testelement = data.map((x) => x.languages);
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
          x.languages
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
  languages
) => {
  let mainDiv = document.createElement('div');
  let logoElement = document.createElement('img');
  let companyName = document.createElement('div');
  let positionName = document.createElement('p');
  let jobStatus = document.createElement('p');
  let newItem = document.createElement('div');
  let featuredItem = document.createElement('div');
  let requiredSkills = document.createElement('div');
  let roleItem = document.createElement('div');
  let levelItem = document.createElement('div');
  let languageItem = document.createElement('div');

  //css groups
  let groupOne = document.createElement('div');
  let groupTwo = document.createElement('div');
  let groupThree = document.createElement('div');

  const divMaker = (params) => {
    let regularDiv = document.createElement('div');
    regularDiv.innerText = params;
    return regularDiv;
  };

  //extracts array elements
  const arrayValue = (params, group) => {
    let iterator = params.values();
    for (let value of iterator) {
      group.appendChild(divMaker(value));
    }
  };

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
  arrayValue(languages, languageItem);
  requiredSkills.appendChild(languageItem);

  groupThree.appendChild(companyName);
  groupThree.appendChild(newItem);
  groupThree.appendChild(featuredItem);

  groupTwo.appendChild(groupThree);
  groupTwo.appendChild(positionName);
  groupTwo.appendChild(jobStatus);

  groupOne.appendChild(logoElement);
  groupOne.appendChild(groupTwo);

  mainDiv.appendChild(groupOne);
  mainDiv.appendChild(requiredSkills);

  mainDiv.classList.add('mainDiv')
  groupOne.classList.add('groupOne')
  groupTwo.classList.add('groupTwo')
  groupThree.classList.add('groupThree')
  requiredSkills.classList.add('skills')
  languageItem.classList.add('language')
  
  return mainDiv;
};
