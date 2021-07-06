package io.github.jhipster.sample;

import io.micronaut.http.annotation.Controller;

import java.util.List;

@Controller(WebServiceAPI.ENDPOINT)
public class WebServiceController implements WebServiceAPI {
    @Override
    public ResponseBean getResponseBean() {
        ResponseBean bean = new ResponseBean();
        bean.setFieldOne("I am field one");
        bean.setFieldTwo(List.of("Field two-one", "Field two-two", "Field two-three"));
        bean.setIntField(1337);
        return bean;
    }
}
