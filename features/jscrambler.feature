Feature: Jscrambler Try it Free

	Scenario: Valid signup test for country "<country>"
		Given There is no logged-in user
		When We visit Jscrambler website
		Then We are in Jscrambler home

		When We click the Try it free option
		Then We are in a new form

		When Fill in the Email and Password Inputs
		Then The continue button is enabled
		Then Snapshot
		Then We click the continue button

		When Fill in the details form with country "<country>"
		Then The continue button is enabled
		Then Snapshot
		Then We click the continue button

		When Finalize the Account Creation
		Then The continue button is enabled
		Then Snapshot
		Then We click the continue button

		When We skip the analyze website page
		Then We are redirected to the App Builder Webpage
		Then Snapshot
		Then We are logged in

		When We log out
		Then We are in Jscrambler mainpage
		Then Snapshot
		Then There is no logged-in user

		Examples:
			| country       |
			| Portugal      |
			| United States |