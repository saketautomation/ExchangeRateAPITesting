Feature: To get past conversion rates using Exchange Rate API 

Scenario Outline: Get past conversion rate according to date 

	Given API endpoint is available 
	When user hits get request with "<date>" specified in YYYY-MM-DD format 
	Then responsecode is <responseCode> 
	And  response contains exchanges rates for all supported currencies 
	Examples: 
		| date     | responseCode |
		| 1999-10-11 |   200   |  
		| 2020-04-25 |   200   | 
		
		
Scenario Outline: Get past conversion rate according to symbol 

	Given API endpoint is available 
	When user hits exchange rate request with "symbols" and valid "<symbolValues>" 
	Then responsecode is <responseCode> 
	And response contains exchange rates for given "<symbolValues>" 
	Examples: 
		| symbolValues | responseCode |
		| USD      |   200        |  
		| INR,GBP  |   200        |
		
Scenario Outline: Get specific exchange rate with diffrent base 

	Given API endpoint is available 
	When user hits exchange rate request with "base" and valid "<baseValue>" 
	Then responsecode is <responseCode> 
	And response contains exchange rates for all currencies with given base "<baseValue>" 
	Examples: 
		| baseValue  | responseCode |
		| USD      |   200        |  
		| GBP      |   200        |
		
		
Scenario Outline: Get exchange rate with specific base and symbol 

	Given API endpoint is available 
	When user hits exchange rate request with "base" as "<baseValue>" and "symbols" as "<symbolValue>" 
	Then responsecode is <responseCode> 
	And response contains exchange rates for specified "<baseValue>" and "<symbolValue>" 
	Examples: 
		|baseValue|symbolValue   | responseCode |
		|    INR  | USD      |   200        |  
		|    EUR  | GBP      |   200        |
