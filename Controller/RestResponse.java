
public class RestResponse {
    String status = "OK";
    String comment = null;
    Object result = null;

    //Konstruktor odpowiedzi FAILED
    public RestResponse(String comment) {
        this.comment = comment;
        this.status = "FAILED";
    }

    //Konstruktor odpowiedzi OK
    public RestResponse(){}
}
