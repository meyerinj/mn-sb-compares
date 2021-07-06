package io.github.jhipster.sample.web.rest.errors.handlers;

import io.micronaut.context.annotation.Replaces;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.MutableHttpResponse;
import io.micronaut.http.server.exceptions.ExceptionHandler;
import io.micronaut.security.authentication.AuthorizationException;
import io.micronaut.security.authentication.DefaultAuthorizationExceptionHandler;
import org.zalando.problem.Problem;
import org.zalando.problem.Status;

import javax.inject.Singleton;

@Singleton
@Replaces(DefaultAuthorizationExceptionHandler.class)
public class ProblemRejectionHandler extends ProblemHandler implements ExceptionHandler<AuthorizationException, MutableHttpResponse<?>> {

    @Override
    public MutableHttpResponse<?> handle(HttpRequest request, AuthorizationException exception) {
        Problem problem = Problem.builder()
            .withType(request.getUri())
            .withStatus(Status.UNAUTHORIZED)
            .build();

        return create(problem, request, exception);
    }
}
