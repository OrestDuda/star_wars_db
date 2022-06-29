import axios from "axios";

const baseUrl = "https://swapi.dev/api";

async function getResource(url) {
  try {
    return await axios.get(`${baseUrl}${url}`);
  } catch (error) {
    console.log(error);
  }
}

async function getAllPeople() {
  const res = await getResource("/people");
  return transformAllPeople(res.data.results);
}

async function getPerson(id) {
  const res = await getResource(`/people/${id}`);
  return transformPerson(res.data);
}

async function getAllPlanets() {
  const res = await getResource("/planets");
  return transformAllPlanets(res.data.results);
}

async function getPlanet(id) {
  const res = await getResource(`/planets/${id}`);
  return transformPlanet(res.data);
}

async function getAllStarships() {
  const res = await getResource("/starships");
  return transformAllStarships(res.data.results);
}

async function getStarship(id) {
  const res = await getResource(`/starships/${id}`);
  return transformStarship(res.data);
}

function extractId(item) {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.match(idRegExp)[1];
}

function transformAllPlanets(data) {
  return data.map((item) => {
    return {
      id: extractId(item.url),
      name: item.name,
      climate: item.climate,
      terrain: item.terrain,
    };
  });
}

function transformPlanet(planet) {
  return {
    id: extractId(planet.url),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
    orbitalPeriod: planet.orbital_period,
    gravity: planet.gravity,
    terrain: planet.terrain,
    residents: [planet.residents],
    url: `https://starwars-visualguide.com/assets/img/planets/${extractId(
      planet.url
    )}.jpg`,
  };
}

function transformAllStarships(data) {
  return data.map((item) => {
    return {
      id: extractId(item.url),
      name: item.name,
      length: item.length,
      maxSpeed: item.max_atmosphering_speed,
    };
  });
}

function transformStarship(starship) {
  return {
    id: extractId(starship.url),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity,
    url: `https://starwars-visualguide.com/assets/img/starships/${extractId(
      starship.url
    )}.jpg`,
  };
}

function transformAllPeople(data) {
  return data.map((item) => {
    return {
      id: extractId(item.url),
      name: item.name,
    };
  });
}

function transformPerson(person) {
  return {
    id: extractId(person.url),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
    url: `https://starwars-visualguide.com/assets/img/characters/${extractId(
      person.url
    )}.jpg`,
  };
}

export {
  getAllPeople,
  getPerson,
  getAllPlanets,
  getPlanet,
  getAllStarships,
  getStarship,
};
