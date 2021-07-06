package io.github.jhipster.sample.web.rest;

import io.github.jhipster.sample.ResponseBean;
import io.github.jhipster.sample.web.rest.client.WebServiceClient;
import io.micronaut.http.annotation.Controller;

@Controller("/MakeClientRequest")
public class ClientCommController {

    private final WebServiceClient webServiceClient;

    public ClientCommController(WebServiceClient webServiceClient) {
        this.webServiceClient = webServiceClient;
    }

    public ResponseBean getServerBean() {
        return webServiceClient.getResponseBean();
    }
}
