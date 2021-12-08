/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import expect from 'expect';
import * as randomstring from "randomstring";

Given('There is no logged-in user', async function (this: ICustomWorld) {
	const { page } = this;

	await page?.goto('https://app.jscrambler.com');
	expect(page?.url()).toBe('https://app.jscrambler.com/login');
});

When('We visit Jscrambler website', async function (this: ICustomWorld) {
	const { page } = this;

	await page?.goto('https://jscrambler.com');
	await page?.click('"Accept"');
});

Then('We are in Jscrambler home', async function (this: ICustomWorld) {
	const { page } = this;

	expect(page?.url()).toBe('https://jscrambler.com/');
});

When('We click the Try it free option', async function (this: ICustomWorld) {
	const { page } = this;

	await page?.click('"Try it Free"');
});

Then('We are in a new form', async function (this: ICustomWorld) {
	const { page } = this;

	expect(page?.url()).toBe('https://jscrambler.com/signup');
	await page?.waitForSelector('form');
});

When('Fill in the Email and Password Inputs', async function (this: ICustomWorld) {
	const { page } = this,
		username = randomstring.generate({
			length: 5,
			charset: "numeric"
		}) + 'automation@jscrambler.com',
		password = randomstring.generate({
			length: 4,
			charset: "numeric",
			readable: true
		}) + randomstring.generate({
			length: 4,
			charset: "alphabetic",
			readable: true,
			capitalization: "uppercase"
		}) + randomstring.generate({
			length: 4,
			charset: "alphabetic",
			readable: true,
			capitalization: "lowercase"
		}) + "!";

	await page?.fill('input#username', username);
	await page?.fill('input#password', password);

});

Then('The continue button is enabled', async function (this: ICustomWorld) {
	const { page } = this;

	await page?.isEnabled('"Continue"');

});

Then('We click the continue button', async function (this: ICustomWorld) {
	const { page } = this;

	await page?.click('"Continue"');
});

When('Fill in the details form with country {string}', async function (this: ICustomWorld, country: string) {
	const { page } = this,
		name = randomstring.generate({
			length: 5,
			charset: "alphabetic"
		}) + " " + randomstring.generate({
			length: 5,
			charset: "alphabetic"
		}),
		company = randomstring.generate({
			length: 5,
			charset: "alphabetic"
		}),
		nameInput = "input#name",
		companyInput = "input#company",
		phoneCountryDropdownBtn = "div[name = 'search']",
		phoneCountrySearch = "input#search-bar",
		phoneCountryFlag = "img[class*= 'optionBadge']",
		phoneInput = "#officePhoneNumber";

	let phone = "917609982";

	expect(page?.url()).toBe('https://jscrambler.com/signup/complete');

	await page?.fill(nameInput, name);
	await page?.fill(companyInput, company);
	await page?.click(phoneCountryDropdownBtn);
	await page?.fill(phoneCountrySearch, country);
	await page?.click(phoneCountryFlag);

	if (country === "United States") {
		const stateInput = "input#state",
			state = "Florida";

		phone = "8502456059";

		await page?.fill(stateInput, state);
	}

	await page?.fill(phoneInput, phone);
});

When('Finalize the Account Creation', async function (this: ICustomWorld) {
	const { page } = this,
		optionsBtnFirst = "[class^='useCaseButton']:nth-child(1)",
		optionsBtnLast = "[class^='useCaseButton']:nth-child(6)";

	expect(page?.url()).toBe('https://jscrambler.com/signup/use-case');

	await page?.click(optionsBtnFirst);
	await page?.click(optionsBtnLast);
});

When('We skip the analyze website page', async function (this: ICustomWorld) {
	const { page } = this,
		skipAnchor = "a[class*='skip']";

	expect(page?.url()).toBe('https://jscrambler.com/website-inventory-report?group=wpi-code');
	await page?.click(skipAnchor);
});

Then('We are redirected to the App Builder Webpage', async function (this: ICustomWorld) {
	const { page } = this;

	expect(page?.url()).toContain('https://app.jscrambler.com');
});

Then('We are logged in', async function (this: ICustomWorld) {
	const { page } = this;

	await page?.goto('https://app.jscrambler.com');
	expect(page?.url()).toContain('https://app.jscrambler.com');
	expect(page?.url()).not.toContain('/login');
});

When('We log out', async function (this: ICustomWorld) {
	const { page } = this,
		manuBarsIcon = "div[class*='index'] > i.fa-bars",
		logout = "[href='https://accounts.jscrambler.com:443/logout']";

	await page?.click(manuBarsIcon);
	await page?.click(logout);
});

Then('We are in Jscrambler mainpage', async function (this: ICustomWorld) {
	const { page } = this;

	expect(page?.url()).toBe('https://app.jscrambler.com/login');
});