// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

function promptUser() {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'projectName',
			message: 'What is the title of your project? (Required)',
			validate: (projectInput) => {
				if (projectInput) {
					return true;
				} else {
					console.log('Please enter the title of your project.');
					return false;
				}
			},
		},
		{
			type: 'input',
			name: 'description',
			message: 'Enter a description for this project. (Required)',
			validate: (descriptionInput) => {
				if (descriptionInput) {
					return true;
				} else {
					console.log('Please enter a short description for this project.');
					return false;
				}
			},
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Any installation instructions?',
		},
		{
			type: 'input',
			name: 'projectUse',
			message: 'What is the use of this project?',
		},
		{
			type: 'input',
			name: 'contributions',
			message: 'How do you contribute to this project?',
		},
		{
			type: 'input',
			name: 'test',
			message: 'Provide test instructions if there are any.',
		},
		{
			type: 'list',
			name: 'license',
			message: 'Select a license for this project',
			choices: ['Apache', 'CreativeCommons', 'MIT', 'Mozilla'],
		},
		{
			type: 'input',
			name: 'githubUsername',
			message: 'What is your Github username? (Required)',
			validate: (userInput) => {
				if (userInput) {
					return true;
				} else {
					console.log('Please enter your Github username.');
					return false;
				}
			},
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is your email? (Required)',
			validate: (emailInput) => {
				if (emailInput) {
					return true;
				} else {
					console.log('Please enter your email.');
					return false;
				}
			},
		},
	]);
}

promptUser()
	.then((answers) => generateMarkdown(answers))
	.then((readme) => {
		fs.writeFile('README.md', readme, (err) => {
			if (err) {
				console.log(err);
				return;
			}
		});
	});
