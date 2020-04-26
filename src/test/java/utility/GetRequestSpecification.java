package utility;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public class GetRequestSpecification {
	static Properties prop;
	static RequestSpecification reqSpec;
	
	public static RequestSpecification getSpecification(String baseUri) throws IOException
	{
		
		PrintStream log = new PrintStream(new FileOutputStream("log.txt"));
         reqSpec = new RequestSpecBuilder().setBaseUri(getBaseUri(baseUri))
        		 .addFilter(RequestLoggingFilter.logRequestTo(log))
        		 .addFilter(ResponseLoggingFilter.logResponseTo(log))
        		 .setContentType(ContentType.JSON).build();
         
         
         return reqSpec;
		
	}

	
	public static String getBaseUri(String key) throws IOException
	{
		FileInputStream file = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\ExchangeRate.properties");
		prop = new Properties();
		prop.load(file);
		return prop.getProperty(key);
	
	   
	}
}
