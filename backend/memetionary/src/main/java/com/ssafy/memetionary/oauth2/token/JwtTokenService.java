package com.ssafy.memetionary.oauth2.token;

import com.ssafy.memetionary.common.CustomErrorType;
import com.ssafy.memetionary.common.exception.MemberNotFoundException;
import com.ssafy.memetionary.oauth2.repository.JwtTokenRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class JwtTokenService {

    private final String AUTHENTICATION_PREFIX;

    private final JwtTokenRepository jwtTokenRepository;

    public JwtTokenService(@Value("${spring.jwt.prefix}") String AUTHENTICATION_PREFIX, JwtTokenRepository jwtTokenRepository) {
        this.AUTHENTICATION_PREFIX = AUTHENTICATION_PREFIX;
        this.jwtTokenRepository = jwtTokenRepository;
    }

    public String findMemberId(String accessToken) {
        JwtToken jwtToken = findJwtToken(accessToken);
        return jwtToken.getMemberId();
    }

    public void deleteJwtToken(String accessToken) {
        JwtToken jwtToken = findJwtToken(accessToken);
        jwtTokenRepository.delete(jwtToken);
    }

    private JwtToken findJwtToken(String accessToken) {
        Optional<JwtToken> jwtToken = jwtTokenRepository.findById(accessToken);
        return jwtToken.orElseThrow(() -> new MemberNotFoundException(CustomErrorType.MEMBER_NOT_FOUND.getMessage()));
    }

    public void saveJwtToken(JwtToken jwtToken) {
        jwtTokenRepository.save(jwtToken);
    }
}
