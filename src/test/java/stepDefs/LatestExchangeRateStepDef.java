package stepDefs;

import static io.restassured.RestAssured.given;

import java.io.IOException;
import java.util.Map;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utility.GetRequestSpecification;
import utility.ResponseValidator;

public class LatestExchangeRateStepDef {

	RequestSpecification req;
	Response response;
	ResponseValidator validator = new ResponseValidator();

	@Given("Latest Exchange Rate API Enpoint is available")
	public void latest_Exchange_Rate_API_Enpoint_is_available() {
		try {
			req = given().spec(GetRequestSpecification.getSpecification("latestRateBaseUri"));

		} catch (IOException e) {

			e.printStackTrace();
		}
	}

	@When("user hits the exchange rate API")
	public void user_hits_the_exchange_rate_API() {
		response = req.when().get();
		validator.setResponseString(response);
	}

	@Then("response code is {int}")
	public void response_code_is(int responseCode) {
		Assert.assertEquals(response.getStatusCode(), responseCode);

	}

	@Then("all available currencies with latest conversion rate are displayed in response")
	public void all_available_currencies_with_latest_conversion_rate_are_displayed_in_response() {
		Map<Object, Object> jsonValues = validator.getValuesFromResponse("rates");
		Assert.assertTrue(jsonValues.size() >= 0);

	}

	@When("user hits foreign exchange rate API with {string} as {string}")
	public void user_hits_foreign_exchange_rate_API_with_as(String symbol, String symbolValue) {
		response = req.queryParam(symbol, symbolValue).when().get();
		validator.setResponseString(response);

	}

	@Then("response contains foreign exchange rates for given {string}")
	public void response_contains_foreign_exchange_rates_for_given(String symbolValue) {
		String[] symbolValues = symbolValue.split(",");
		int countOfSymbols = symbolValues.length;
		Assert.assertEquals(countOfSymbols, validator.getCount("rates"));
		Map<Object, Object> maps = validator.getValuesFromResponse("rates");
		for (int i = 0; i < maps.size(); i++) {
			Assert.assertTrue(maps.containsKey(symbolValues[i]));
		}

	}

	@Then("response contains foreign exchange rates for all currencies with given base {string}")
	public void response_contains_foreign_exchange_rates_for_all_currencies_with_given_base(String baseValue) {

		Assert.assertEquals(baseValue, validator.getValueForSpecifiedKey("base"));

	}

	@When("user hits foreign exchange rate request with {string} as {string} and {string} as {string}")
	public void user_hits_foreign_exchange_rate_request_with_as_and_as(String base, String baseValue, String symbol,
			String symbolValue) {

		response = req.queryParam(symbol, symbolValue).queryParam(base, baseValue).when().get();
		validator.setResponseString(response);
	}

	@Then("response contains foreign exchange rates for specified {string} and {string}")
	public void response_contains_foreign_exchange_rates_for_specified_and(String baseValue, String symbolValue) {
		
		Assert.assertEquals(baseValue, validator.getValueForSpecifiedKey("base"));
		Assert.assertTrue(!validator.getValueForSpecifiedKey("rates." + symbolValue).isEmpty());
		Map<Object, Object> maps = validator.getValuesFromResponse("rates");
		Assert.assertTrue(maps.containsKey(symbolValue));

	}

}
