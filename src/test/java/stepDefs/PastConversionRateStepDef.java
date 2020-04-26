package stepDefs;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utility.GetRequestSpecification;
import utility.ResponseValidator;

import static io.restassured.RestAssured.*;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;
import java.util.Map.Entry;

public class PastConversionRateStepDef{

	Response response;

	RequestSpecification req;
	private static final String VALIDDATE = "2010-05-15";
	ResponseValidator validator = new ResponseValidator();

	@Given("API endpoint is available")
	public void api_endpoint_is_available() throws IOException {

		req = given().spec(GetRequestSpecification.getSpecification("pastRateBaseUri"));
	}

	@When("user hits get request with {string} specified in YYYY-MM-DD format")
	public void user_hits_get_request_with_specified_in_YYYY_MM_DD_format(String date) {

		response = req.when().get(date);
		validator.setResponseString(response);
	}

	@Then("responsecode is {int}")
	public void responsecode_is(int responseCode) {
		
		Assert.assertEquals(responseCode, response.getStatusCode());

	}

	@Then("response contains exchanges rates for all supported currencies")
	public void response_contains_exchanges_rates_for_all_supported_currencies() {

		Assert.assertTrue(validator.getCount("rates")>0);

	}

	@When("user hits exchange rate request with {string} and valid {string}")
	public void user_hits_exchange_rate_request_with_valid(String symbol, String symbolValues) {
		response = req.queryParam(symbol, symbolValues).when().get(VALIDDATE);
		validator.setResponseString(response);
	}

	@Then("response contains exchange rates for given {string}")
	public void response_contains_exchange_rates_for_given(String symbol) {

		String[] symbolValues = symbol.split(",");
		int countOfSymbols = symbolValues.length;
		Assert.assertEquals(countOfSymbols, validator.getCount("rates"));

	}

	@Then("response contains exchange rates for all currencies with given base {string}")
	public void response_contains_exchange_rates_for_all_currencies_with_given_base(String baseValue) {

		Assert.assertEquals(baseValue, validator.getValueForSpecifiedKey("base"));

	}

	@When("user hits exchange rate request with {string} as {string} and {string} as {string}")
	public void user_hits_exchange_rate_request_with_as_and_as(String base, String baseValue, String symbol,
			String symbolValue) {
		response = req.queryParam(symbol, symbolValue).queryParam(base, baseValue).when().get(VALIDDATE);
		validator.setResponseString(response);
	}

	@Then("response contains exchange rates for specified {string} and {string}")
	public void response_contains_exchange_rates_for_specified_and(String baseValue, String symbolValue) {
		
		Assert.assertEquals(baseValue, validator.getValueForSpecifiedKey("base"));
		Assert.assertTrue(!validator.getValueForSpecifiedKey("rates." + symbolValue).isEmpty());
		Map<Object, Object> maps = validator.getValuesFromResponse("rates");
		Assert.assertTrue(maps.containsKey(symbolValue));

	}

}
