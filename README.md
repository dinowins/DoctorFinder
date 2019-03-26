# Doctor Finder

This application searches for local doctors using the Better Doctor API.

## Installation

Git clone using https://github.com/dinowins/DoctorFinder.git.

Run npm install to install the environment and dependencies.

Run tests using npm test.

```bash
git clone https://github.com/dinowins/DoctorFinder.git
npm install
npm test
```

## Usage

Enter in a health condition and/or first name and/or last name to return search results.

## Specs
Specification | Input | Output
------------- | ----- | ------
Should return an error message when there are no matching results | last name: adjdfjfdjp | Error
Should return results when a condition is entered | Toothache | Results: 10
Should return results when a first and/or last name is entered | Hall | Results: 10

## Technologies

- JavaScript, Jasmine, Karma, Webpack, Better Doctor API

## Roadmap

- Add UI for application
- Add option to change location for search results

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
([MIT](https://choosealicense.com/licenses/mit/)) The Doctor Finder is licensed under the terms of the MIT license and is available for free.
