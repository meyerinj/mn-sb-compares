package io.github.jhipster.sample;

import java.util.List;

public class ResponseBean {
    private String fieldOne;
    private List<String> fieldTwo;
    private int intField;

    public String getFieldOne() {
        return fieldOne;
    }

    public void setFieldOne(String fieldOne) {
        this.fieldOne = fieldOne;
    }

    public List<String> getFieldTwo() {
        return fieldTwo;
    }

    public void setFieldTwo(List<String> fieldTwo) {
        this.fieldTwo = fieldTwo;
    }

    public int getIntField() {
        return intField;
    }

    public void setIntField(int intField) {
        this.intField = intField;
    }
}
