package utility;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;


public class ResponseValidator {
	
	private  Response  response;
	
	static ArrayList<String> jsonValues;
	static JsonPath jsonPath;
	
	public  Map<Object, Object> getValuesFromResponse(String path)
	{
		jsonPath=response.jsonPath(); 
		
		 Map<Object, Object> map = jsonPath.getMap(path);
	  
	  return map;
	 }
	
	
	
	public  int getCount(String path )
	{
		jsonPath=response.jsonPath();
		 Map<Object, Object> map = jsonPath.getMap(path);
		 
		return map.size();
		
	}
	public  void setResponseString(Response res)
	{
		response=res;
	}
	
	public String getValueForSpecifiedKey(String key)
	{
		JsonPath path = response.jsonPath();
		return path.get(key).toString();
	}
	
	
	

}
