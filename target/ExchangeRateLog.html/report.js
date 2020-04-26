$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/latestConversionRate.feature");
formatter.feature({
  "name": "Get latest conversion rates from exchange rate API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get latest foreign exchange rates",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.latest_Exchange_Rate_API_Enpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits the exchange rate API",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.user_hits_the_exchange_rate_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all available currencies with latest conversion rate are displayed in response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.all_available_currencies_with_latest_conversion_rate_are_displayed_in_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get latest foreign exchange rates according to symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.step({
  "name": "user hits foreign exchange rate API with \"symbols\" as \"\u003csymbolValues\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "response code is \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "response contains foreign exchange rates for given \"\u003csymbolValues\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "symbolValues",
        "responseCode"
      ]
    },
    {
      "cells": [
        "USD",
        "200"
      ]
    },
    {
      "cells": [
        "INR,GBP",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get latest foreign exchange rates according to symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.latest_Exchange_Rate_API_Enpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits foreign exchange rate API with \"symbols\" as \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.user_hits_foreign_exchange_rate_API_with_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains foreign exchange rates for given \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_contains_foreign_exchange_rates_for_given(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get latest foreign exchange rates according to symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.latest_Exchange_Rate_API_Enpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits foreign exchange rate API with \"symbols\" as \"INR,GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.user_hits_foreign_exchange_rate_API_with_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains foreign exchange rates for given \"INR,GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_contains_foreign_exchange_rates_for_given(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get latest foreign exchange rates according to specific base",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.step({
  "name": "user hits foreign exchange rate API with \"base\" as \"\u003cbaseValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "response code is \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "response contains foreign exchange rates for all currencies with given base \"\u003cbaseValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseValue",
        "responseCode"
      ]
    },
    {
      "cells": [
        "USD",
        "200"
      ]
    },
    {
      "cells": [
        "GBP",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get latest foreign exchange rates according to specific base",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.latest_Exchange_Rate_API_Enpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits foreign exchange rate API with \"base\" as \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.user_hits_foreign_exchange_rate_API_with_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains foreign exchange rates for all currencies with given base \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_contains_foreign_exchange_rates_for_all_currencies_with_given_base(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get latest foreign exchange rates according to specific base",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.latest_Exchange_Rate_API_Enpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits foreign exchange rate API with \"base\" as \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.user_hits_foreign_exchange_rate_API_with_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains foreign exchange rates for all currencies with given base \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_contains_foreign_exchange_rates_for_all_currencies_with_given_base(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get foreign exchange rate with specific base and symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.step({
  "name": "user hits foreign exchange rate request with \"base\" as \"\u003cbaseValue\u003e\" and \"symbols\" as \"\u003csymbolValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "response code is \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "response contains foreign exchange rates for specified \"\u003cbaseValue\u003e\" and \"\u003csymbolValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseValue",
        "symbolValue",
        "responseCode"
      ]
    },
    {
      "cells": [
        "INR",
        "USD",
        "200"
      ]
    },
    {
      "cells": [
        "EUR",
        "GBP",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get foreign exchange rate with specific base and symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.latest_Exchange_Rate_API_Enpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits foreign exchange rate request with \"base\" as \"INR\" and \"symbols\" as \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.user_hits_foreign_exchange_rate_request_with_as_and_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains foreign exchange rates for specified \"INR\" and \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_contains_foreign_exchange_rates_for_specified_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get foreign exchange rate with specific base and symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Latest Exchange Rate API Enpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.latest_Exchange_Rate_API_Enpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits foreign exchange rate request with \"base\" as \"EUR\" and \"symbols\" as \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.user_hits_foreign_exchange_rate_request_with_as_and_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains foreign exchange rates for specified \"EUR\" and \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LatestExchangeRateStepDef.response_contains_foreign_exchange_rates_for_specified_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/pastConversionRate.feature");
formatter.feature({
  "name": "To get past conversion rates using Exchange Rate API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Get past conversion rate according to date",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.step({
  "name": "user hits get request with \"\u003cdate\u003e\" specified in YYYY-MM-DD format",
  "keyword": "When "
});
formatter.step({
  "name": "responsecode is \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "response contains exchanges rates for all supported currencies",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "date",
        "responseCode"
      ]
    },
    {
      "cells": [
        "1999-10-11",
        "200"
      ]
    },
    {
      "cells": [
        "2020-04-25",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get past conversion rate according to date",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.api_endpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits get request with \"1999-10-11\" specified in YYYY-MM-DD format",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.user_hits_get_request_with_specified_in_YYYY_MM_DD_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "responsecode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.responsecode_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains exchanges rates for all supported currencies",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.response_contains_exchanges_rates_for_all_supported_currencies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get past conversion rate according to date",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.api_endpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits get request with \"2020-04-25\" specified in YYYY-MM-DD format",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.user_hits_get_request_with_specified_in_YYYY_MM_DD_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "responsecode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.responsecode_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains exchanges rates for all supported currencies",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.response_contains_exchanges_rates_for_all_supported_currencies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get past conversion rate according to symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.step({
  "name": "user hits exchange rate request with \"symbols\" and valid \"\u003csymbolValues\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "responsecode is \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "response contains exchange rates for given \"\u003csymbolValues\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "symbolValues",
        "responseCode"
      ]
    },
    {
      "cells": [
        "USD",
        "200"
      ]
    },
    {
      "cells": [
        "INR,GBP",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get past conversion rate according to symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.api_endpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits exchange rate request with \"symbols\" and valid \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.user_hits_exchange_rate_request_with_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "responsecode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.responsecode_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains exchange rates for given \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.response_contains_exchange_rates_for_given(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get past conversion rate according to symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.api_endpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits exchange rate request with \"symbols\" and valid \"INR,GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.user_hits_exchange_rate_request_with_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "responsecode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.responsecode_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains exchange rates for given \"INR,GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.response_contains_exchange_rates_for_given(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get specific exchange rate with diffrent base",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.step({
  "name": "user hits exchange rate request with \"base\" and valid \"\u003cbaseValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "responsecode is \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "response contains exchange rates for all currencies with given base \"\u003cbaseValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseValue",
        "responseCode"
      ]
    },
    {
      "cells": [
        "USD",
        "200"
      ]
    },
    {
      "cells": [
        "GBP",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get specific exchange rate with diffrent base",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.api_endpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits exchange rate request with \"base\" and valid \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.user_hits_exchange_rate_request_with_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "responsecode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.responsecode_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains exchange rates for all currencies with given base \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.response_contains_exchange_rates_for_all_currencies_with_given_base(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get specific exchange rate with diffrent base",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.api_endpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits exchange rate request with \"base\" and valid \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.user_hits_exchange_rate_request_with_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "responsecode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.responsecode_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains exchange rates for all currencies with given base \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.response_contains_exchange_rates_for_all_currencies_with_given_base(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get exchange rate with specific base and symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.step({
  "name": "user hits exchange rate request with \"base\" as \"\u003cbaseValue\u003e\" and \"symbols\" as \"\u003csymbolValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "responsecode is \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "response contains exchange rates for specified \"\u003cbaseValue\u003e\" and \"\u003csymbolValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "baseValue",
        "symbolValue",
        "responseCode"
      ]
    },
    {
      "cells": [
        "INR",
        "USD",
        "200"
      ]
    },
    {
      "cells": [
        "EUR",
        "GBP",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get exchange rate with specific base and symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.api_endpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits exchange rate request with \"base\" as \"INR\" and \"symbols\" as \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.user_hits_exchange_rate_request_with_as_and_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "responsecode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.responsecode_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains exchange rates for specified \"INR\" and \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.response_contains_exchange_rates_for_specified_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get exchange rate with specific base and symbol",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "API endpoint is available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.api_endpoint_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits exchange rate request with \"base\" as \"EUR\" and \"symbols\" as \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.user_hits_exchange_rate_request_with_as_and_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "responsecode is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.responsecode_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains exchange rates for specified \"EUR\" and \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.PastConversionRateStepDef.response_contains_exchange_rates_for_specified_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});