Feature: Get latest conversion rates from exchange rate API 

Scenario: Get latest foreign exchange rates 

	Given Latest Exchange Rate API Enpoint is available 
	When user hits the exchange rate API 
	Then response code is 200 
	Then all available currencies with latest conversion rate are displayed in response 
	
	
Scenario Outline: Get latest foreign exchange rates according to symbol 

	Given Latest Exchange Rate API Enpoint is available 
	When user hits foreign exchange rate API with "symbols" as "<symbolValues>" 
	Then response code is <responseCode> 
	And response contains foreign exchange rates for given "<symbolValues>" 
	Examples: 
		| symbolValues | responseCode |
		| USD      |   200        |  
		| INR,GBP  |   200        |
		
		
Scenario Outline: Get latest foreign exchange rates according to specific base 

	Given Latest Exchange Rate API Enpoint is available 
	When user hits foreign exchange rate API with "base" as "<baseValue>" 
	Then response code is <responseCode> 
	And response contains foreign exchange rates for all currencies with given base "<baseValue>" 
	Examples: 
		| baseValue  | responseCode |
		| USD      |   200        |  
		| GBP      |   200        |
		
		
Scenario Outline: Get foreign exchange rate with specific base and symbol 

	Given Latest Exchange Rate API Enpoint is available 
	When user hits foreign exchange rate request with "base" as "<baseValue>" and "symbols" as "<symbolValue>" 
	Then response code is <responseCode> 
	And response contains foreign exchange rates for specified "<baseValue>" and "<symbolValue>" 
	Examples: 
		|baseValue|symbolValue   | responseCode |
		|    INR  | USD      |   200        |  
		|    EUR  | GBP      |   200        |
		
