package io.github.jhipster.sample.web.rest.client;

import io.github.jhipster.sample.ResponseBean;
import io.github.jhipster.sample.WebServiceAPI;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.client.annotation.Client;

@Client("http://localhost:8080")
public interface WebServiceClient extends WebServiceAPI {

    @Get(WebServiceAPI.ENDPOINT)
    ResponseBean getResponseBean();
}
